import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCvsComponent } from './reference-cvs.component';

describe('ReferenceCvsComponent', () => {
  let component: ReferenceCvsComponent;
  let fixture: ComponentFixture<ReferenceCvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceCvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceCvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
