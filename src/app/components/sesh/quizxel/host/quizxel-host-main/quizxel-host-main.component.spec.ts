import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelHostMainComponent } from './quizxel-host-main.component';

describe('QuizxelHostMainComponent', () => {
  let component: QuizxelHostMainComponent;
  let fixture: ComponentFixture<QuizxelHostMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelHostMainComponent]
    });
    fixture = TestBed.createComponent(QuizxelHostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
