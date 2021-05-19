import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsWithAlcoholComponent } from './cocktails-with-alcohol.component';

describe('CocktailsWithAlcoholComponent', () => {
  let component: CocktailsWithAlcoholComponent;
  let fixture: ComponentFixture<CocktailsWithAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsWithAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsWithAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
