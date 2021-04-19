import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpushComponent } from './webpush.component';

describe('WebpushComponent', () => {
  let component: WebpushComponent;
  let fixture: ComponentFixture<WebpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
