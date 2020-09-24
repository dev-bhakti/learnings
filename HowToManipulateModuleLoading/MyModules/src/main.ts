import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { FirstModuleModule } from './app/first-module/first-module.module'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FirstModuleModule)
  .catch(err => console.error(err));
