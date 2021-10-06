import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbConversionComponent } from './fb-conversion.component';

describe('FbConversionComponent', () => {
  let component: FbConversionComponent;
  let fixture: ComponentFixture<FbConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
