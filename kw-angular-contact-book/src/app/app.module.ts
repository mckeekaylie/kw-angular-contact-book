import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ProfileComponent } from './profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({ declarations: [
        AppComponent,
        PanelComponent,
        ProfileComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FontAwesomeModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
