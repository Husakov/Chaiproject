import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
sortterm="";
  constructor() { }

  ngOnInit() {
  }
  urls=JSON.parse(localStorage.getItem("urls"));
  urlss=this.urls.urls;

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
