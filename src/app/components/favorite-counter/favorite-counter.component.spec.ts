import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCounterComponent } from './favorite-counter.component';

describe('FavoriteCounterComponent', () => {
  let component: FavoriteCounterComponent;
  let fixture: ComponentFixture<FavoriteCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
