import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorDataChartComponent } from './sensor-data-chart/sensor-data-chart.component';
import { SensorVisualizationComponent } from './sensor-data-visualise/sensor-data-visualise.component';

export const routes: Routes = [
  { path: 'sensor-data-chart', component: SensorDataChartComponent },
  { path: 'visualize', component: SensorVisualizationComponent },
  { path: '', redirectTo: 'sensor-data-chart', pathMatch: 'full' },
  { path: '**', redirectTo: 'visualize', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
