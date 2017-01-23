/**
 * Created by natha on 21.01.2017.
 */
import {Component, ViewChildren, NgZone} from '@angular/core';
import {ipcRenderer} from 'electron';
import {DomSanitizer} from "@angular/platform-browser";

export enum Mediatype {
    Image,
    Video
}

@Component({
    selector: 'beamer-display',
    templateUrl: 'app/components/beamer/beamer.component.html',
    styleUrls: ['app/components/beamer/beamer.component.css']
})

export class BeamerComponent {
    randomNumber:Number = 0;
    brightPerc:Number = 0;
    medias:Object[];
    @ViewChildren('videoP') videos;

    constructor(public zone: NgZone, private sanitizer:DomSanitizer) {
        this.randomNumber = 1;
        this.brightPerc = 20;
        this.medias = [{id: 1, type: 1, opacity: 0.5, src: './assets/vids/hallo.mp4'},{id: 2, type: 2, opacity: 0.8, src: './assets/imgs/ice-On-Mount-Mckinley.jpg'}];
    }

    ngOnInit() {
        ipcRenderer.on('brightness-changed', (event, arg) => {
            this.zone.run(() => this.brightPerc = arg);
        });

        ipcRenderer.on('media-changed', (event, arg) => {
            this.zone.run(() => this.medias = arg);
        });
    }

    ngAfterViewInit() {
        console.log(this.videos);
        for (let i = 0; i < this.videos._results.length; i++) {
            console.log(this.videos._results[i]);
            let video = this.videos._results[i];
            video.nativeElement.autoplay = true;
            video.nativeElement.play();
        }
    }

    getStyle() {
        return this.sanitizer.bypassSecurityTrustStyle('brightness(' + this.brightPerc + '%)');
    }
}