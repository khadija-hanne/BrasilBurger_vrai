import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurLivraisonsComponent } from './livreur-livraisons.component';

describe('LivreurLivraisonsComponent', () => {
  let component: LivreurLivraisonsComponent;
  let fixture: ComponentFixture<LivreurLivraisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurLivraisonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreurLivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
