import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-afdeling-lijst',
  templateUrl: './afdeling-lijst.component.html',
  styleUrls: ['./afdeling-lijst.component.css']
})
export class AfdelingLijstComponent implements OnInit {

  leden: any[] = [];
  afdeling!: string
  parameterValue!: number 

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parameterValue = params['afdelingParId']
      console.log("Parameter value: ", this.parameterValue)
    })
    this.dataService.getAfdelingId(this.parameterValue).subscribe((data: any[]) => {
      this.leden = data
      this.afdeling = data[0].afdeling
    }) 
  }

}