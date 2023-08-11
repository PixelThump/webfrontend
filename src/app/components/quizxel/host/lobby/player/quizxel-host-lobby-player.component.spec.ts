import { ComponentFixture, TestBed } from '@angular/core/testing';
import {QuizxelHostLobbyPlayerComponent} from "./quizxel-host-lobby-player.component";


describe('QuizxelHostLobbyPlayerComponent', () => {
  let component: QuizxelHostLobbyPlayerComponent;
  let fixture: ComponentFixture<QuizxelHostLobbyPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelHostLobbyPlayerComponent]
    });
    fixture = TestBed.createComponent(QuizxelHostLobbyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
