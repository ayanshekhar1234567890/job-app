import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppModule } from './app/app.module';

// import * as Sentry from "@sentry/angular" // for Angular 10/11 instead
import * as Sentry from "@sentry/angular-ivy";
import { enableProdMode } from '@angular/core';

Sentry.init({
  dsn: "https://40d20216ed75432aabdbd420511e4411@o4505330018287616.ingest.sentry.io/4505330021695488",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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
enableProdMode()

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);