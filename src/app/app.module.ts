import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Google Maps
import { AgmCoreModule } from '@agm/core';

// Angular Material module
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [AppComponent, BottomSheetComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    AgmCoreModule.forRoot({ apiKey: environment.GOOGLE_MAPS_API_KEY })
  ],
  entryComponents: [BottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
