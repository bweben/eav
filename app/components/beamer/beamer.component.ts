/**
 * Created by natha on 21.01.2017.
 */
import {Component, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'beamer-display',
    templateUrl: 'app/components/beamer/beamer.component.html',
    styleUrls: ['app/components/beamer/beamer.component.css']
})

export class BeamerComponent {
    randomNumber:Number = 0;
    brightPerc:Number = 0;
    @ViewChild('video1') videoPlayer1;
    @ViewChild('video2') videoPlayer2;

    constructor(private sanitizer:DomSanitizer) {
        this.randomNumber = 1;
        this.brightPerc = 20;
    }

    ngAfterViewInit() {
        /*this.videoPlayer1.loop = true;
        this.videoPlayer2.loop = true;
        this.videoPlayer1.play();
        this.videoPlayer2.play();*/
    }

    getStyle() {
        return this.sanitizer.bypassSecurityTrustStyle('brightness(' + this.brightPerc + '%)');
    }
}