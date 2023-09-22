import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-afdelingen',
  templateUrl: './afdelingen.component.html',
  styleUrls: ['./afdelingen.component.css']
})
export class AfdelingenComponent implements OnInit {

  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

  }

}
