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

  totalLeden: any = 0

  ngOnInit(): void {
    this.loadLeden()   
  }

  loadLeden() {
    this.dataservice.getLeden().subscribe((data: any) => {
      this.leden = data
      this.totalLeden = this.leden.length
    });
  }
  loadCountLeden() {
    this.dataservice.getCountLeden().subscribe((data: any) => {
      // Does not work
    }); 
  }


}
