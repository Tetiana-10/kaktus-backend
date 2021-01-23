import { Component, OnInit } from '@angular/core';
import { ChartsModule} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Mon', 'Tue', 'Wed', 'Th', 'Fr', 'Sat', 'Sun'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Helen'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Marco'}
  ];
  public doughnutChartLabels = ['Used Amount', 'Planned Amount'];
  public doughnutChartData = [120, 180];
  public doughnutChartType = 'doughnut';
  public doughnutColors = [{
    backgroundColor: ['rgba(2,62,138,0.8)', 'rgba(237,242,251,0.8)'],
  }];

  ngOnInit(): void {
  }

}
