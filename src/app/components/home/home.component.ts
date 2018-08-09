import { Component, OnInit,Input } from '@angular/core';
import {UrlService} from '../../services/url.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url="";
  name="";
  des="";
  constructor(private urlservice:UrlService){
  }

  ngOnInit() {
  }


public addUrls(){
    this.urlservice.addUrls(this.url,this.name,this.des);
    console.log("samir")

}


}
