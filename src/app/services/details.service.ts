import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  

  constructor() { }

  // details 
  
  CDetails = [
    {
      id:1,
      cName:"Climate change Impacts on Human “CHANGES IN VECTOR ECOLOGY”",
      cImg:"https://una.org.uk/sites/default/files/Climate%20Change.jpg",
    },
    {
      id:2,
      cName:"Climate crisis puts one billion children at “EXTREMELY HIGH RISK”",
      cImg:"https://pyxis.nymag.com/v1/imgs/bcf/827/a94bba6206655147352551346dba37dd99-01-climate-change.rsocial.w1200.jpg"
    },
    {
      id:3,
      cName:"Disabled People “EXPECTED LOSSES” in the Climate Crisis",
      cImg:"https://assets.teenvogue.com/photos/5d88d0f75854b70008442b97/16:9/w_1280,c_limit/00-social-disabledclimate0change.jpg"
    },
    {
      id:4,
      cName:"Bangladesh's Floods “A RECURRING THREAT TO CITIZENS",
      cImg:"https://static.dw.com/image/62197984_605.jpg"
    },
    {
      id:5,
      cName:"India may suffer devastating climate change impact in 80 years",
      cImg:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/PTI28-05-2020_000067A-647x363.jpeg?Z0cl6gmcbOr29mCxgmGVX_zLTPhP.t4t"
    },
    {
      id:6,
      cName:"Is India Prepared to Tackle Economic Risks From Climate Change?",
      cImg:"https://cdn.thewire.in/wp-content/uploads/2018/11/07164923/climate-change.jpg"
    }
  ]
}
