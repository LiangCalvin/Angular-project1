import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingsearchComponent } from './shoppingsearch.component';

describe('ShoppingsearchComponent', () => {
  let component: ShoppingsearchComponent;
  let fixture: ComponentFixture<ShoppingsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
