import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelControllerComponent } from './quizxel-controller.component';

describe('QuizxelControllerComponent', () => {
  let component: QuizxelControllerComponent;
  let fixture: ComponentFixture<QuizxelControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelControllerComponent]
    });
    fixture = TestBed.createComponent(QuizxelControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
