import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCvsProfileComponent } from './reference-cvs-profile.component';

describe('ReferenceCvsProfileComponent', () => {
  let component: ReferenceCvsProfileComponent;
  let fixture: ComponentFixture<ReferenceCvsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceCvsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceCvsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
