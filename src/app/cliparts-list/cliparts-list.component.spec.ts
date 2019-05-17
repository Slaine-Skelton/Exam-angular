import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipartsListComponent } from './cliparts-list.component';

describe('ClipartsListComponent', () => {
  let component: ClipartsListComponent;
  let fixture: ComponentFixture<ClipartsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipartsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
