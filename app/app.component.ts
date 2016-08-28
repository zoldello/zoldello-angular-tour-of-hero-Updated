import {  Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    public heroes: Hero[];
    private selected: Hero;

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.InitHeroes();
    }

    InitHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes );
      }

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
