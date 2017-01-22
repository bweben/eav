/**
 * Created by natha on 21.01.2017.
 */
import {Component, ViewChild, ViewChildren} from '@angular/core';
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

    constructor(private sanitizer:DomSanitizer) {
        this.randomNumber = 1;
        this.brightPerc = 20;
        this.medias = [{id: 1, type: 1, opacity: 0.5, src: './assets/vids/ticino.mp4'},{id: 2, type: 1, opacity: 0.8, src: './assets/vids/P1190438_1.mp4'}];
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