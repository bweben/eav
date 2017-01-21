/**
 * Created by natha on 21.01.2017.
 */
import { NgModule }      from '@angular/core';

import {DashboardComponent}   from './dashboard.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports:      [BrowserModule],
    declarations: [ DashboardComponent ],
    exports: [ DashboardComponent ]
})
export class DashboardModule { }