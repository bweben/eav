/**
 * Created by natha on 21.01.2017.
 */
/**
 * Created by natha on 21.01.2017.
 */
import {Component, OnInit, NgZone} from '@angular/core';
import {ipcRenderer} from 'electron';

@Component({
    selector: 'dasboard-overview',
    templateUrl: 'app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    displays: Object[];
    brightness:Number;
    full:boolean = false;
    width;

    constructor(public zone: NgZone) {
        this.displays = [];
        this.brightness = 0;
        this.width = 1;
    }

    sendBrightness() {
        ipcRenderer.send('brightness-changed', this.brightness);
    }

    ngOnInit(): void {
        if (typeof ipcRenderer != 'undefined') {
            ipcRenderer.once('all-displays', (event, arg) => {
                this.zone.run(() => this.displays = arg);
            });

            ipcRenderer.on('aspect-ratio-change', (event, arg) => {
                this.zone.run(() => this.width = arg);
            });
        }
    }

    onSelect(display: Object): void {
        ipcRenderer.send('selected-display', display);
    }

    fullscreen():void {
        this.full = !this.full;
        ipcRenderer.send('make-fullscreen', this.full);
    }
}