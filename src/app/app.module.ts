import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

 

const firebaseConfig = {
  apiKey: "AIzaSyD_eyegHar4yT1DTw6H6B-g4vVMMWI2baI",
  authDomain: "pagina-ionic-54264.firebaseapp.com",
  projectId: "pagina-ionic-54264",
  storageBucket: "pagina-ionic-54264.appspot.com",
  messagingSenderId: "691523823297",
  appId: "1:691523823297:web:555c139c0fe05ef4235640"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
