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
    <div *ngFor="let display of displays" (click)="onSelect(display)">
        <p>{{display.id}}</p>
    </div>
`
})
export class DashboardComponent implements OnInit{
    displays: Object[];

    constructor(public zone: NgZone) {
        this.displays = [];
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