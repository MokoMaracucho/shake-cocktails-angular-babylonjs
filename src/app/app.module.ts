import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WindowRefService } from './shared/services/window-ref.service';

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
    BrowserModule,
    HttpClientModule,
    //RouterModule.forRoot([
      //{ path: 'home', component: HomeComponent },
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
    //]),
    AppRoutingModule
  ],
  providers: [
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
