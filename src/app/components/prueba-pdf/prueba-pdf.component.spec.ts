import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaPdfComponent } from './prueba-pdf.component';

describe('PruebaPdfComponent', () => {
  let component: PruebaPdfComponent;
  let fixture: ComponentFixture<PruebaPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
