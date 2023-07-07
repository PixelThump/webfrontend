import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLobbyComponent } from './host-lobby.component';

describe('HostLobbyComponent', () => {
  let component: HostLobbyComponent;
  let fixture: ComponentFixture<HostLobbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostLobbyComponent]
    });
    fixture = TestBed.createComponent(HostLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
