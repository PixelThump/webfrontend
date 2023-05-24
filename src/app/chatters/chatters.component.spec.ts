import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattersComponent } from './chatters.component';

describe('ChattersComponent', () => {
  let component: ChattersComponent;
  let fixture: ComponentFixture<ChattersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChattersComponent]
    });
    fixture = TestBed.createComponent(ChattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
