import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsWithoutAlcoholComponent } from './cocktails-without-alcohol.component';

describe('CocktailsWithoutAlcoholComponent', () => {
  let component: CocktailsWithoutAlcoholComponent;
  let fixture: ComponentFixture<CocktailsWithoutAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsWithoutAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsWithoutAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
