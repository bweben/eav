/**
 * Created by natha on 21.01.2017.
 */
import { NgModule }      from '@angular/core';

import {DashboardComponent}   from './dashboard.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';

import {MediaPickerModule} from '../mediaPicker/mediaPicker.module';
import {BeamerModule} from "../beamer/beamer.module";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        MediaPickerModule,
        BeamerModule
    ],
    declarations: [ DashboardComponent ],
    exports: [ DashboardComponent ]
})
export class DashboardModule { }