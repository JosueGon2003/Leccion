import { Component } from '@angular/core';
import { Transporte, ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.css']
})
export class TransportesComponent {
  filtro: string = ''; // Variable para almacenar el filtro seleccionado

  trasporte: Transporte[] = [];
  constructor(public _servicesService: ServiceService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.trasporte = this._servicesService.getHeroes();
    console.log(this.trasporte)
    
  }
  verTransporte(idx: Transporte) {
    console.log(idx);
    this.router.navigate(['/transporte', this.trasporte.indexOf(idx)]);
  }
}
