import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesZoneComponent } from './commandes-zone.component';

describe('CommandesZoneComponent', () => {
  let component: CommandesZoneComponent;
  let fixture: ComponentFixture<CommandesZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
