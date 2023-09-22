import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-afdeling-lijst',
  templateUrl: './afdeling-lijst.component.html',
  styleUrls: ['./afdeling-lijst.component.css']
})
export class AfdelingLijstComponent implements OnInit {

  leden: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getLeden().subscribe((data: any[]) => {
      this.leden = data;
    });  
  }
  loginUser(item:any) {
    
  }
}
