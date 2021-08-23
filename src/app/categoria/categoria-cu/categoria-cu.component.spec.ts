import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCuComponent } from './categoria-cu.component';

describe('CategoriaCuComponent', () => {
  let component: CategoriaCuComponent;
  let fixture: ComponentFixture<CategoriaCuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaCuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
