import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPageComponent } from './host-page.component';

describe('HostPageComponent', () => {
  let component: HostPageComponent;
  let fixture: ComponentFixture<HostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostPageComponent]
    });
    fixture = TestBed.createComponent(HostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
