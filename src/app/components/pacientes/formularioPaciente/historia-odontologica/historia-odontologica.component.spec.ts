import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaOdontologicaComponent } from './historia-odontologica.component';

describe('HistoriaOdontologicaComponent', () => {
  let component: HistoriaOdontologicaComponent;
  let fixture: ComponentFixture<HistoriaOdontologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaOdontologicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaOdontologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
