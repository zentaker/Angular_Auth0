import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrecioComponent,
    ProtegidaComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       // Import the module into the application, with configuration
       AuthModule.forRoot({
        domain: 'dev-1pua9kwm.us.auth0.com',
         clientId: '4Ylaefbos4xbwXBmQRbsBb6r1LIPQRtn',
         cacheLocation: 'localstorage',
         useRefreshTokens: true
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
