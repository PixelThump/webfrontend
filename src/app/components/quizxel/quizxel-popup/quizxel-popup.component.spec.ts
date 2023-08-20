import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelPopupComponent } from './quizxel-popup.component';

describe('QuizxelPopupComponent', () => {
  let component: QuizxelPopupComponent;
  let fixture: ComponentFixture<QuizxelPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelPopupComponent]
    });
    fixture = TestBed.createComponent(QuizxelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
