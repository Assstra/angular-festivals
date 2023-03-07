import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalCreationComponent } from './festival-creation.component';

describe('FestivalCreationComponent', () => {
  let component: FestivalCreationComponent;
  let fixture: ComponentFixture<FestivalCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
