import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CocktailsWithAlcoholComponent } from './cocktails-with-alcohol/cocktails-with-alcohol.component';
import { CocktailsWithoutAlcoholComponent } from './cocktails-without-alcohol/cocktails-without-alcohol.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cocktails-without-alcohol', component: CocktailsWithoutAlcoholComponent },
      { path: '', redirectTo: 'cocktails-without-alcohol', pathMatch: 'full' },
      { path: 'cocktails-with-alcohol', component: CocktailsWithAlcoholComponent },
      { path: '**', redirectTo: 'cocktails-without-alcohol', pathMatch: 'full' }
    ])
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
