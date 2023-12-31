import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { CategoriesModule } from './categories/categories.module';

import { EditComponent } from './fruits/edit/edit.component';
import { FruitsModule } from './fruits/fruits.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FruitsModule,
    CategoriesModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }