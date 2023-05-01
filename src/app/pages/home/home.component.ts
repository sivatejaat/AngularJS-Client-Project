import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:DetailsService) { }
  CData:any;
  ngOnInit(): void {
    this.CData = this.service.CDetails;
  }

}
