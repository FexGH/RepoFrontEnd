import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialwebsLinkComponent } from './socialwebs-link.component';

describe('SocialwebsLinkComponent', () => {
  let component: SocialwebsLinkComponent;
  let fixture: ComponentFixture<SocialwebsLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialwebsLinkComponent]
    });
    fixture = TestBed.createComponent(SocialwebsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
