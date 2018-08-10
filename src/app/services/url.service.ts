import { Injectable } from '@angular/core';
import {urls} from '../data/urls';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {ItemListComponent} from '../components/item-list/item-list.component';


@Injectable()
export class UrlService {

private urlss: urls[];
url=JSON.parse(localStorage.getItem("urls"));
urlsss=this.url.urls;

  constructor(private item:ItemListComponent) {
    this.urlss=[
      {url:"URL",name:"Name",description:"Description",time:"date/time"},
    ];



  }



  public addUrls(urll:string,name: string,description:string): void {
    this.urlss=this.urlsss;
    let now = moment().format('DD MM YYYY kk mm');
    let url = new urls(name,urll,description,now);
    this.urlss.push(url);
    this.setLocalStorageUrls();
    console.log(this.urlss);
  }

  exist(){
this.item.exist();

  }




  private setLocalStorageUrls(urlss=urls):void{

    localStorage.setItem('urls',JSON.stringify({urls:this.urlss}))


  }
}
