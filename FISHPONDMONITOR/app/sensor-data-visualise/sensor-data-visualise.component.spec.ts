import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorVisualizationComponent } from './sensor-data-visualise.component';

describe('SensorDataVisualiseComponent', () => {
  let component: SensorVisualizationComponent;
  let fixture: ComponentFixture<SensorVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
