import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  search: string = '';
  private transportes:Transporte[]=[
    {
    ciudadOrigen: 'Ciudad A',
    ciudadDestino: 'Ciudad B',
    precio: 100,
    descripcion: 'Ruta desde Ciudad A hasta Ciudad B',
    tipo: 'interno',
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",
    },
    {
    ciudadOrigen: 'Ciudad X',
    ciudadDestino: 'Ciudad Y',
    precio: 250,
    descripcion: 'Ruta desde Ciudad X hasta Ciudad Y',
    tipo: 'externo',
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
    ciudadOrigen: 'Ciudad Q',
    ciudadDestino: 'Ciudad W',
    precio: 100,
    descripcion: 'Ruta desde Ciudad Q hasta Ciudad W',
    tipo: 'interno',
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad R',
      ciudadDestino: 'Ciudad T',
      precio: 150,
      descripcion: 'Ruta desde Ciudad R hasta Ciudad T',
      tipo: 'externo',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad I',
      ciudadDestino: 'Ciudad O',
      precio: 150,
      descripcion: 'Ruta desde Ciudad I hasta Ciudad O',
      tipo: 'interno',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad G',
      ciudadDestino: 'Ciudad H',
      precio: 300,
      descripcion: 'Ruta desde Ciudad G hasta Ciudad H',
      tipo: 'externo',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad B',
      ciudadDestino: 'Ciudad N',
      precio: 100,
      descripcion: 'Ruta desde Ciudad B hasta Ciudad N',
      tipo: 'interno',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad Z',
      ciudadDestino: 'Ciudad P',
      precio: 150,
      descripcion: 'Ruta desde Ciudad Z hasta Ciudad P',
      tipo: 'interno',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad D',
      ciudadDestino: 'Ciudad L',
      precio: 250,
      descripcion: 'Ruta desde Ciudad B hasta Ciudad N',
      tipo: 'externo',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    },
    {
      ciudadOrigen: 'Ciudad L',
      ciudadDestino: 'Ciudad N',
      precio: 200,
      descripcion: 'Ruta desde Ciudad L hasta Ciudad N',
      tipo: 'externo',
      img: "https://upload.wikimedia.org/wikipedia/commons/0/01/COP8MOP3_2006_Curitiba_bus_2.jpg",

    }
  ];
  filtro:string='';


  getHeroes()
  {
    return this.transportes;
  }
  
  constructor() { 
    console.log("Servicio listo para usar...");
  
  }

  getHeroe(idx: number):Transporte{
    return this.transportes[idx];
  }
  
}

export interface Transporte{
  ciudadOrigen: string;
  ciudadDestino: string;
  precio: number;
  descripcion: string;
  tipo: string;
  img: string;


}
