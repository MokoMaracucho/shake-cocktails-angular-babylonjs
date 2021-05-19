import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CocktailsWithAlcoholComponent } from './cocktails-with-alcohol/cocktails-with-alcohol.component';
import { CocktailsWithoutAlcoholComponent } from './cocktails-without-alcohol/cocktails-without-alcohol.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsWithAlcoholComponent,
    CocktailsWithoutAlcoholComponent
  ],
  imports: [
    BrowserModule//,
    //RouterModule.forRoot([
      //{ path: 'home', component: HomeComponent },
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
    //])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
