import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})//если нужно один сервис на всех
export class LogService{

    consoleStyles = {
        'h1': 'font: 2.5em/1 Arial; color: crimson;',
        'h2': 'font: 2em/1 Arial; color: orangered;',
        'h3': 'font: 1.5em/1 Arial; color: olivedrab;',
        'bold': 'font: bold 1.3em/1 Arial; color: midnightblue;',
        'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
    };
    write(logMsg:string, styleMsg:string = 'bold' ){
        console.log('%c'+ logMsg,  this.consoleStyles[styleMsg]);
    }
   
}