﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../domain/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/components/heroes/heroes.component.css']
})
export class HeroesComponent {
    title = 'Tour of Heroesssssss';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}