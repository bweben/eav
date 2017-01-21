/**
 * Created by natha on 21.01.2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'beamer-display',
    template: '<h1>My first App with Angular2 and Electron, second Screen</h1>' +
    '<p>{{randomNumber}}</p>'
})
export class BeamerComponent {
    randomNumber:Number = 0;

    constructor() {
        this.randomNumber = 1;
    }
}