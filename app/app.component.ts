/**
 * Created by natha on 21.01.2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ipcRenderer} from 'electron';

@Component({
    selector: 'beamer-app',
    template: `<router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit{
    randomNumber:Number = 0;

    constructor(private router: Router) {
        this.randomNumber = Math.random();
    }

    ngOnInit(): void {
        ipcRenderer.send('init-done', 'done');
        if (typeof ipcRenderer != 'undefined') {
            ipcRenderer.on('elect-redirect-to', (event, arg) => {
                console.log(arg);
                this.router.navigate([arg]);
            });
        }
    }
}