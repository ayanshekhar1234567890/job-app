import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

// Encrypt function
export function encryptData(data: string, secretKey: string): string {
  const iv = randomBytes(16); // Generate random initialization vector
  const cipher = createCipheriv('aes-256-cbc', secretKey, iv);

  let encryptedData = cipher.update(data, 'utf8', 'base64');
  encryptedData += cipher.final('base64');

  return iv.toString('hex') + ':' + encryptedData;
}