/**
 * Created by natha on 23.01.2017.
 */
import {Component, OnInit, NgZone} from '@angular/core';
import {ipcRenderer} from 'electron';
import {Media} from "../../shared/video/Media";
import {Mediatype} from "../../shared/enum/mediaType";

@Component({
    selector: 'custom-media-picker',
    templateUrl: 'app/components/mediaPicker/mediaPicker.component.html',
    styleUrls: ['app/components/mediaPicker/mediaPicker.component.css']
})

export class MediaPickerComponent {
    medias = [{opacity:1},{opacity:1}];
    opacity = 1;
    mediaType = Mediatype;

    constructor() {

    }

    fileUpload(e, place, src?:String):boolean {
        console.log("hallo");
        if (!e) {
            return true;
        }

        let files: File;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else{
            files = e.srcElement.files;
        }
        Object.keys(files).forEach((key) => {
            console.log(files[key]);
            let file = files[key];
            let media:Media = new Media();

            if (file.type.split('/')[0] === "image") {
                media.type = Mediatype.Image;
            } else {
                media.type = Mediatype.Video;
            }
            media.id = new Date().getUTCMilliseconds();
            media.opacity = 1;
            media.src = "file:///" + file.path;
            this.medias[place] = media;
        });

        this.sendMedia();

        return false;
    }

    sendMedia() {
        ipcRenderer.send('media-changed', this.medias);
    }

    sendOpacity() {
        if (this.medias.length > 1) {
            this.medias[1].opacity = this.opacity;
            ipcRenderer.send('opacity-changed', this.opacity);
        }
    }
}