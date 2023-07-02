import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelPageComponent } from './quizxel-page.component';

describe('QuizxelPageComponent', () => {
  let component: QuizxelPageComponent;
  let fixture: ComponentFixture<QuizxelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelPageComponent]
    });
    fixture = TestBed.createComponent(QuizxelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
