/**
 * Created by natha on 30.01.2017.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SongListComponent} from "./songlist.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [SongListComponent],
    exports: [SongListComponent]
})

export class SongListModule {}