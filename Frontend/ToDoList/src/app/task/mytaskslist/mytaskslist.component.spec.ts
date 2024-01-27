import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytaskslistComponent } from './mytaskslist.component';

describe('MytaskslistComponent', () => {
  let component: MytaskslistComponent;
  let fixture: ComponentFixture<MytaskslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytaskslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MytaskslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
