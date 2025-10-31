import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

const mergedConfig = {
  ...appConfig,
  providers: [...(appConfig?.providers ?? []), provideHttpClient()],
};
bootstrapApplication(App, mergedConfig).catch((err) => console.error(err));
