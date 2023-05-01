import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:DetailsService) { }
  getcId:any;
  CData:any;

  ngOnInit(): void {
    this.getcId = this.param.snapshot.paramMap.get('id');
    console.log(this.getcId,'getc');
    if(this.getcId)
    {
      this.CData =  this.service.CDetails.filter((value)=>{
          return value.id == this.getcId;
        });
        console.log(this.CData,'Cdata>>');
        
    }
    
  }

}
