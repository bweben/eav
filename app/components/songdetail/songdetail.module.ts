/**
 * Created by natha on 30.01.2017.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SongDetailComponent} from './songdetail.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [SongDetailComponent],
    exports: [SongDetailComponent]
})
export class SongDetailModule {}