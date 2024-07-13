import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './modules/test-request/test-request.module';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { HttpBookDirective } from './modules/book/http-book.directive';
import { Form01Component } from './modules/form/form01/form01.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessagesModule } from 'primeng/messages';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { PokemonInfoComponent } from './modules/pokemon/pokemon-info/pokemon-info.component';
import { MatTableModule } from '@angular/material/table';
import { PipePokemonModule } from "../shared/pipe/pipe-pokemon/pipe-pokemon.module";
import { Table, TableModule } from 'primeng/table';
import { ViewChildComponent } from './modules/view-child/view-child.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HttpBookDirective,
        Form01Component,
        PokemonInfoComponent,
        ViewChildComponent,
        ViewChildComponent
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule, MatToolbarModule, MatIconModule,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    BrowserAnimationsModule,
    ShoppingModule,
    ButtonModule,
    CommonModule,
    FormsModule, FloatLabelModule,
    MessagesModule,
    ReactiveFormsModule,
    MatTableModule,
    PipePokemonModule,
    TableModule
]
})
export class AppModule { }
