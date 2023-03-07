import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalJeuxComponent } from './festival-jeux.component';

describe('FestivalJeuxComponent', () => {
  let component: FestivalJeuxComponent;
  let fixture: ComponentFixture<FestivalJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalJeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
