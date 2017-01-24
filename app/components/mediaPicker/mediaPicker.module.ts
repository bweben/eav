/**
 * Created by natha on 23.01.2017.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MediaPickerComponent} from "./mediaPicker.component";
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [MediaPickerComponent],
    exports: [MediaPickerComponent]
})

export class MediaPickerModule {}