import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';


import { ListaProduseComponent } from './produse/lista-produse/lista-produse.component';
import { ListaCosComponent } from './cos/lista-cos/lista-cos.component';
import { AntetComponent } from './antet/antet.component';

@NgModule({
  declarations: [
    AppComponent,
    AntetComponent,
    ListaProduseComponent,
    ListaCosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
