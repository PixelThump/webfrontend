import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelLobbyPlayerComponent } from './quizxel-lobby-player.component';

describe('QuizxelLobbyPlayerComponent', () => {
  let component: QuizxelLobbyPlayerComponent;
  let fixture: ComponentFixture<QuizxelLobbyPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelLobbyPlayerComponent]
    });
    fixture = TestBed.createComponent(QuizxelLobbyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
