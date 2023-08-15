import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelControllerLobbyComponent } from './quizxel-controller-lobby.component';

describe('QuizxelControllerLobbyComponent', () => {
  let component: QuizxelControllerLobbyComponent;
  let fixture: ComponentFixture<QuizxelControllerLobbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelControllerLobbyComponent]
    });
    fixture = TestBed.createComponent(QuizxelControllerLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
