import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelControllerLobbyIconchangerComponent } from './quizxel-controller-lobby-iconchanger.component';

describe('QuizxelControllerLobbyIconchangerComponent', () => {
  let component: QuizxelControllerLobbyIconchangerComponent;
  let fixture: ComponentFixture<QuizxelControllerLobbyIconchangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelControllerLobbyIconchangerComponent]
    });
    fixture = TestBed.createComponent(QuizxelControllerLobbyIconchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
