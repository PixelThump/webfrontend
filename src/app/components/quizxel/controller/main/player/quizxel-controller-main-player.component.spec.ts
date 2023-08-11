import { ComponentFixture, TestBed } from '@angular/core/testing';
import {QuizxelControllerMainPlayerComponent} from "./quizxel-controller-main-player.component";


describe('QuizxelControllerMainComponent', () => {
  let component: QuizxelControllerMainPlayerComponent;
  let fixture: ComponentFixture<QuizxelControllerMainPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelControllerMainPlayerComponent]
    });
    fixture = TestBed.createComponent(QuizxelControllerMainPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
