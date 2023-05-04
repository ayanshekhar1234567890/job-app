import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Design } from './app/job/Design';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log(new Design("pc", "pc", "card").getPixelLength());