import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceStoriesComponent } from './reference-stories.component';

describe('ReferenceStoriesComponent', () => {
  let component: ReferenceStoriesComponent;
  let fixture: ComponentFixture<ReferenceStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
