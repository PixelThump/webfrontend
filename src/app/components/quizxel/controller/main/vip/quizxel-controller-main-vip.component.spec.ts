import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelControllerMainVipComponent } from './quizxel-controller-main-vip.component';

describe('QuizxelControllerMainVipComponent', () => {
  let component: QuizxelControllerMainVipComponent;
  let fixture: ComponentFixture<QuizxelControllerMainVipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelControllerMainVipComponent]
    });
    fixture = TestBed.createComponent(QuizxelControllerMainVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
