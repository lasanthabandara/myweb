﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';

import { HeroesComponent }     from '../components/heroes/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroService }         from '../services/hero.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }