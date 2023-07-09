import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelControllerMainComponent } from './quizxel-controller-main.component';

describe('QuizxelControllerMainComponent', () => {
  let component: QuizxelControllerMainComponent;
  let fixture: ComponentFixture<QuizxelControllerMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelControllerMainComponent]
    });
    fixture = TestBed.createComponent(QuizxelControllerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
