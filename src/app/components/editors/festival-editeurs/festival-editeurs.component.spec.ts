import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalEditeursComponent } from './festival-editeurs.component';

describe('FestivalEditeursComponent', () => {
  let component: FestivalEditeursComponent;
  let fixture: ComponentFixture<FestivalEditeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalEditeursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalEditeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
