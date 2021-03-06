/**
 * Created by natha on 21.01.2017.
 */
import {Component, ViewChildren, NgZone} from '@angular/core';
import {ipcRenderer} from 'electron';
import {DomSanitizer} from "@angular/platform-browser";
import {Mediatype} from "../../shared/enum/mediaType";



@Component({
    selector: 'beamer-display',
    templateUrl: 'app/components/beamer/beamer.component.html',
    styleUrls: ['app/components/beamer/beamer.component.css']
})

export class BeamerComponent {
    randomNumber:Number = 0;
    brightPerc:Number = 0;
    medias:Object[];
    mediaType = Mediatype;
    @ViewChildren('videoP') videos;

    constructor(public zone: NgZone, private sanitizer:DomSanitizer) {
        this.randomNumber = 1;
        this.brightPerc = 20;
        this.medias = [];
    }

    ngOnInit() {
        ipcRenderer.on('brightness-changed', (event, arg) => {
            this.zone.run(() => this.brightPerc = arg);
        });

        ipcRenderer.on('media-changed', (event, arg) => {
            this.zone.run(() => this.medias = arg);
            this.playVideos();
        });

        ipcRenderer.on('opacity-changed', (event, arg) => {
            this.zone.run(() => this.medias = arg);
        })
    }

    ngAfterViewInit() {
        this.playVideos();
    }

    playVideos() {
        for (let i = 0; i < this.videos._results.length; i++) {
            let video = this.videos._results[i];
            video.nativeElement.autoplay = true;
            if (video.nativeElement.paused) {
                video.nativeElement.play();
            }
        }
    }

    getStyle() {
        return this.sanitizer.bypassSecurityTrustStyle('brightness(' + this.brightPerc + '%)');
    }
}