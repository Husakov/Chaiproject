import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {UrlService} from '../../../services/url.service';

@Component({
  selector: 'modalComponent',
  templateUrl: './modal-component.html'
})
export class ModalComponent {
  urll:string;
  urlname:string;
  urldescription:string;
  closeResult: string;

  constructor(private modalService: NgbModal,private urlServices:UrlService) {
    this.urll="fsdg";
    this.urlname="gds";
    this.urldescription="gds";

  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  AddUrls(){

    this.urlServices.addUrls(this.urll,this.urlname,this.urldescription);


    console.log("Samir");
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
