import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyBshsK3IMQr5yxeAtyH0FPgF46q1Ghd4LM",
  authDomain: "job-app-b1749.firebaseapp.com",
  projectId: "job-app-b1749",
  storageBucket: "job-app-b1749.appspot.com",
  messagingSenderId: "328057006720",
  appId: "1:328057006720:web:775b08b26b09cb23d6d465",
  measurementId: "G-J9QJ48F3SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);