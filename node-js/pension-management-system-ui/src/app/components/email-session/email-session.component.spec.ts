import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSessionComponent } from './email-session.component';

describe('EmailSessionComponent', () => {
  let component: EmailSessionComponent;
  let fixture: ComponentFixture<EmailSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
