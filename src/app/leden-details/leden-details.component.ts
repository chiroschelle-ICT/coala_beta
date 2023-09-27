import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Route, ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-leden-details',
  templateUrl: './leden-details.component.html',
  styleUrls: ['./leden-details.component.css']
})
export class LedenDetailsComponent implements OnInit{

  constructor(private dataService : DataService, private route : ActivatedRoute, private router : Router) {}  

  leden: any[] = []
  parameterValue!: any
  detailLid!: any

  lidNaam!: any
  lidVoornaam!: any
  lidAfdeling!: any
  lidEmail!: any
  lidTelefoon!: any
  lidStraat!: any
  lidHuisnummer!: any
  lidGemeente!: any
  lidPostcode!: any

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parameterValue = params['lidId']
      console.log("Parameter value: ", this.parameterValue)
    })
    this.dataService.getLidById(this.parameterValue).subscribe((data: any[]) => {
      this.leden = data
    }) 
  }

}
