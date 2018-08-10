import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {UrlService} from '../../services/url.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
sortterm="";
  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem("urls"))!=null){
      this.urls=JSON.parse(localStorage.getItem("urls"));
      this.urlss=this.urls.urls;
    }else{
      this.urlss=[
        {name:"URL",url:"Name",description:"Description",time:"date/time"},
      ];

    }
  }
  urls=JSON.parse(localStorage.getItem("urls"));
  urlss=[];


remove(i){
console.log(this.urlss)
this.urlss.splice(i,1);
console.log(this.urlss);
  localStorage.setItem('urls',JSON.stringify({urls:this.urlss}));
}

exist() {
this.urlss.forEach((url,index)=>{
  let xhr = new XMLHttpRequest();
  let file = url.url;
  let randomNum = Math.round(Math.random() * 10000);

  xhr.open('HEAD', file + "?rand=" + randomNum, true);
  xhr.send();

  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 304) {
        console.log("connection exist");
        url.splice(index,1);
        console.log(url);

      } else {
        console.log("connection doesnt exist");

        console.log(url);
      }
    }
  }


  }
)

}

}
