import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSqlComponent } from './lab-sql.component';

describe('LabSqlComponent', () => {
  let component: LabSqlComponent;
  let fixture: ComponentFixture<LabSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
