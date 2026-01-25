import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarLink } from './solar-link';

describe('SolarLink', () => {
  let component: SolarLink;
  let fixture: ComponentFixture<SolarLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
