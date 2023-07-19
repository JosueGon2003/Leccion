import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent {
  transporte:any={};
  constructor(private activatedRoute: ActivatedRoute, private  _servicesService: ServiceService){
    this.activatedRoute.params.subscribe(params =>{
      this.transporte= _servicesService.getHeroe(params['id']);
      console.log(this.transporte);
    })
  }
}
