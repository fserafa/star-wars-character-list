import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensPage } from './personagens.page';

describe('PersonagensPage', () => {
  let component: PersonagensPage;
  let fixture: ComponentFixture<PersonagensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
