import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMediaInputComponent } from './text-media-input.component';

describe('TextMediaInputComponent', () => {
  let component: TextMediaInputComponent;
  let fixture: ComponentFixture<TextMediaInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextMediaInputComponent]
    });
    fixture = TestBed.createComponent(TextMediaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
