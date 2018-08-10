import { Component, OnInit } from '@angular/core';
import {UrlService} from '../../services/url.service';

@Component({
  selector: 'app-broken-urls',
  templateUrl: './broken-urls.component.html',
  styleUrls: ['./broken-urls.component.css']
})
export class BrokenUrlsComponent implements OnInit {

  constructor(private urlservice:UrlService) { }

  ngOnInit() {
  }
  urlss=[];
  urls=JSON.parse(localStorage.getItem("urls"));



exist() {
this.urlservice.exist();
}
}
