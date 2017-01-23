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
    template: `
    <h1>Dashboard</h1>
    <button *ngFor="let display of displays" (click)="onSelect(display)">
    click <span class="badge">{{display.id}}</span>
    </button>
    <label for="brightChange">Change Brightness: </label>
    <input id="brightChange" [(ngModel)]="brightness" (change)="sendBrightness()" type="range" min="0" max="100">
`
})
export class DashboardComponent implements OnInit{
    displays: Object[];
    brightness:Number;

    constructor(public zone: NgZone) {
        this.displays = [];
        this.brightness = 100;
    }

    sendBrightness() {
        ipcRenderer.send('brightness-changed', this.brightness);
    }

    ngOnInit(): void {
        if (typeof ipcRenderer != 'undefined') {
            ipcRenderer.once('all-displays', (event, arg) => {
                this.zone.run(() => this.displays = arg);
                console.log(arg);
            });
        }
    }

    onSelect(display: Object): void {
        ipcRenderer.send('selected-display', display);
    }
}