import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostObjectComponent } from './reddit-post-object.component';

describe('RedditPostObjectComponent', () => {
  let component: RedditPostObjectComponent;
  let fixture: ComponentFixture<RedditPostObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditPostObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditPostObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
