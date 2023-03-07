import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalEditeursDetailsComponent } from './festival-editeurs-details.component';

describe('FestivalEditeursDetailsComponent', () => {
  let component: FestivalEditeursDetailsComponent;
  let fixture: ComponentFixture<FestivalEditeursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalEditeursDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalEditeursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
