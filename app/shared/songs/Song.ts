/**
 * Created by natha on 30.01.2017.
 */
export class Song {
    id: Number;
    text: String;
    author: any;
    copyright: any;
    pictures: any;

    constructor(id:Number, text: String, author?: any, copyright?: any, pictures?: any) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.copyright = copyright;
        this.pictures = pictures;
    }
}