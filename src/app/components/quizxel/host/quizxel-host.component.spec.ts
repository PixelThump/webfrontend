import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelHostComponent } from './quizxel-host.component';

describe('QuizxelHostComponent', () => {
  let component: QuizxelHostComponent;
  let fixture: ComponentFixture<QuizxelHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelHostComponent]
    });
    fixture = TestBed.createComponent(QuizxelHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
