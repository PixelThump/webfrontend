import { ComponentFixture, TestBed } from '@angular/core/testing';
import {QuizxelHostPlayerimageComponent} from "./quizxel-host-lobby-player.component";


describe('QuizxelHostLobbyPlayerComponent', () => {
  let component: QuizxelHostPlayerimageComponent;
  let fixture: ComponentFixture<QuizxelHostPlayerimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizxelHostPlayerimageComponent]
    });
    fixture = TestBed.createComponent(QuizxelHostPlayerimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
