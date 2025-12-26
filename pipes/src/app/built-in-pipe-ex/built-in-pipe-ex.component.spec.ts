import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipeExComponent } from './built-in-pipe-ex.component';

describe('BuiltInPipeExComponent', () => {
  let component: BuiltInPipeExComponent;
  let fixture: ComponentFixture<BuiltInPipeExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInPipeExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuiltInPipeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
