import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelComponent } from './quizxel.component';

describe('QuizxelComponent', () => {
  let component: QuizxelComponent;
  let fixture: ComponentFixture<QuizxelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelComponent]
    });
    fixture = TestBed.createComponent(QuizxelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
