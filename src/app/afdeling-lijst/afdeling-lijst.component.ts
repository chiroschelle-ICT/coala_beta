import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router'; 
import { ActiveDataPoint } from 'chart.js';


@Component({
  selector: 'app-afdeling-lijst',
  templateUrl: './afdeling-lijst.component.html',
  styleUrls: ['./afdeling-lijst.component.css']
})
export class AfdelingLijstComponent implements OnInit {

  leden: any[] = [];

  constructor(private dataService: DataService, private route : ActivatedRoute) {}

  ngOnInit() {
  this.route.params.subscribe((params) => {
    const parameterValue = params['afdelingId']; 
    console.log('Route parameter value:', parameterValue);
    this.dataService.getLedenByParameter(parameterValue).subscribe((data: any[]) => {
      this.leden = data;
    });
  });
  }
}
