import { Injectable } from '@angular/core';
import {urls} from '../data/urls';
import {URLS} from '../data/urls.data';



@Injectable()
export class UrlService {

  constructor() {
    let urlss= this.getUrls();
  }

  public addUrls(urll:string,name: string,description:string): void {
    let url = new urls(urll,name,description);
    let urlss = this.getUrls();

    URLS.push(url);
  }

  getUrls() {
    let LocalStorageUrls=JSON.parse(localStorage.getItems('urls'))
    return LocalStorageUrls == null ? [] : LocalStorageUrls.Urls;
  }

  private setLocalStorageUrls(urlss=urls):void{

    localStorage.setItem('urls',JSON.stringify({urls:urlss}))


  }
}
