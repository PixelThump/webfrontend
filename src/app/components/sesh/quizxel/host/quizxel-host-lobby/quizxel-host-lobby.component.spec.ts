import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizxelHostLobbyComponent } from './quizxel-host-lobby.component';

describe('QuizxelHostLobbyComponent', () => {
  let component: QuizxelHostLobbyComponent;
  let fixture: ComponentFixture<QuizxelHostLobbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelHostLobbyComponent]
    });
    fixture = TestBed.createComponent(QuizxelHostLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
