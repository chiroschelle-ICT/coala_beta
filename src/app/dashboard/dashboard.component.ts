import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataservice : DataService) {}

  leden: any[] = [];

  totalLeden!: number 

  ngOnInit(): void {
    this.dataservice.getLeden().subscribe((data: any) => {
      this.leden = data
    });
    this.dataservice.getCountLeden().subscribe((data: any) => {
      this.totalLeden = data[0].count
    });
    this.totalLeden = this.leden.length
  }

}
