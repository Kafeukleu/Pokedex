import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCounterComponent } from './pokemon-counter.component';

describe('PokemonCounterComponent', () => {
  let component: PokemonCounterComponent;
  let fixture: ComponentFixture<PokemonCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
