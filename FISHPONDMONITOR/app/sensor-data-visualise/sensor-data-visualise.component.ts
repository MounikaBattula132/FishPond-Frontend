import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SensorDataService } from '../fishpond.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-sensor-visualise',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './sensor-data-visualise.component.html',
  styleUrls: ['./sensor-data-visualise.component.css'],
  providers: [SensorDataService],
})
export class SensorVisualizationComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  sensorData: any[] = [];
  isBrowser: boolean = false;

  constructor(
    private sensorDataService: SensorDataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.fetchSensorData();
    }
  }

  private fetchSensorData(): void {
    this.sensorDataService.getAllSensorData().subscribe((data: any[]) => {
      this.sensorData = data;
      console.log('Fetched Sensor Data:', this.sensorData);
    });
  }

  visualizeData(sensor: string): void {
    const xAxisLabels = this.sensorData.map(entry => {
      const date = new Date(entry.timestamp);
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    });

    const chartData = this.sensorData.map(entry => entry[sensor]);

    this.chartOptions = {
      chart: {
        type: 'line',
        zoomType: 'xy',
      },
      title: {
        text: `${sensor} Levels by Day`,
      },
      xAxis: {
        categories: xAxisLabels,
        title: { text: 'Day of the Week' },
        crosshair: true,
      },
      yAxis: {
        title: { text: `${sensor} Value` },
        min: 0,
        max: this.getMaxYValue(sensor),
      },
      tooltip: {
        shared: true,
        crosshairs: true,
        formatter: function (this: Highcharts.TooltipFormatterContextObject): string {
          return `Day: <b>${this.x}</b><br>${sensor}: <b>${this.y}</b>`;
        },
      },
      series: [
        {
          name: `${sensor}`,
          data: chartData,
          type: 'line',
          color: this.getSeriesColor(sensor),
          marker: {
            enabled: true,
            radius: 4,
          },
        },
      ],
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
      },
    };
  }

  getMaxYValue(sensor: string): number {
    switch (sensor.toLowerCase()) {
      case 'ph': return 14;
      case 'temperature': return 50;
      case 'oxygen': return 12;
      case 'waterlevel': return 50;
      default: return 100;
    }
  }

  getSeriesColor(sensor: string): string {
    const colors: { [key: string]: string } = {
      ph: '#00aaff',
      temperature: '#ff5733',
      oxygen: '#28a745',
      waterLevel: '#f0ad4e',
    };
    return colors[sensor.toLowerCase()] || '#007bff';
  }
}
