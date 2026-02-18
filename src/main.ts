import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/1';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
