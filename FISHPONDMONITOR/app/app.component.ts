import { Component,Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SensorDataChartComponent } from "./sensor-data-chart/sensor-data-chart.component";
import { SensorVisualizationComponent } from "./sensor-data-visualise/sensor-data-visualise.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SensorDataChartComponent, SensorVisualizationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fishpondmonitor';
}
