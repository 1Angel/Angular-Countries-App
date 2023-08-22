import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTableComponent } from './region-table.component';

describe('RegionTableComponent', () => {
  let component: RegionTableComponent;
  let fixture: ComponentFixture<RegionTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionTableComponent]
    });
    fixture = TestBed.createComponent(RegionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
