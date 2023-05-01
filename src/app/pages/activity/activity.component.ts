import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private service:DetailsService) { }
  CData:any;
  ngOnInit(): void {
    this.CData = this.service.CDetails;
  }

}
