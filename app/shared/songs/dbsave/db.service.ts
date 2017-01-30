/**
 * Created by natha on 30.01.2017.
 */
import { Injectable } from '@angular/core';
import {Song} from "../Song";
import {SONGS} from "../mock/mock-songs";

@Injectable()
export class DBService {
    getSongs(): Song[] {
        return SONGS;
    }

    getSong(text: String): Song {
        return SONGS[0];
    }
}