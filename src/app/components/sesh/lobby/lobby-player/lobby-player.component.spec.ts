import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyPlayerComponent } from './lobby-player.component';

describe('LobbyPlayerComponent', () => {
  let component: LobbyPlayerComponent;
  let fixture: ComponentFixture<LobbyPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LobbyPlayerComponent]
    });
    fixture = TestBed.createComponent(LobbyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
