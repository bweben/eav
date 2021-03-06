/**
 * Created by natha on 21.01.2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { BeamerModule } from './components/beamer/beamer.module';
import { DashboardModule } from './components/dashboard/dasboard.module'
import { AppRoutingModule } from './app-routing.module';
import {MediaPickerModule} from "./components/mediaPicker/mediaPicker.module";

@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule,
        BeamerModule,
        DashboardModule,
        MediaPickerModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }