import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Ribbels', 'Speelclub', 'Rakwi', 'Tito', 'Keti', 'Aspi',  ], 
	       datasets: [
          {
            label: "Meisjes",
            data: ['23','25', '20', '11', '24', '23'],
            backgroundColor: 'pink'
          },
          {
            label: "Jongens",
            data: ['13', '19', '17', '3', '8', '20'],
            backgroundColor: 'blue'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
