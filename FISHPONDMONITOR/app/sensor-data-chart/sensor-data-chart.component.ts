import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SensorDataService } from '../fishpond.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sensor-data-chart',
  standalone: true,
  templateUrl: './sensor-data-chart.component.html',
  styleUrls: ['./sensor-data-chart.component.css'],
  imports: [CommonModule, RouterModule],  // Import RouterModule here
  providers: [SensorDataService],
})
export class SensorDataChartComponent implements OnInit {
  sensorDataList: any[] = [];

  constructor(
    private sensorDataService: SensorDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sensorDataService.getAllSensorData().subscribe(
      (data) => {
        this.sensorDataList = data;
      },
      (error) => {
        console.error('Error fetching sensor data:', error);
      }
    );
  }

  goToChartPage(): void {
    this.router.navigate(['/visualize']);
  }
}
