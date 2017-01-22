/**
 * Created by natha on 21.01.2017.
 */
import { NgModule }      from '@angular/core';

import { BeamerComponent }   from './beamer.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports:      [CommonModule],
    declarations: [ BeamerComponent ],
    exports: [ BeamerComponent ]
})
export class BeamerModule { }