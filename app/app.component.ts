import {  Component } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

const HEROES: Hero[] = [
    { id: 11, name: 'Dirty Diana' },
    { id: 12, name: 'Billie Jean' },
    { id: 13, name: 'Maria' },
    { id: 14, name: 'Hannah' },
    { id: 15, name: 'Suzy' },
    { id: 16, name: 'Susie' },
    { id: 17, name: 'Elizabeth' }
];


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    public heroes = HEROES;
    private selected: Hero;

     onSelect(hero: Hero) : void {
         this.selected = hero;
     }

     isSelected(hero):  boolean {
         return hero === this.selected;
     }

}


/*
Questions

- How to set up service
- How to add css style via component
.
.
.

- Unit test runner
- e2e test runner
*/
