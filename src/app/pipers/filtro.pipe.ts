import { Pipe, PipeTransform } from '@angular/core';
import { Transporte } from '../services/service.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(transporte: Transporte[], searchText: string): Transporte[] {
    if (!transporte) {
      return [];
    }
    if (!searchText) {
      return transporte;
    }
    searchText = searchText.toLowerCase();
    return transporte.filter(transporte => {
      return (
        transporte.ciudadOrigen.toLowerCase().startsWith(searchText) 
      );
    });
  }

  
}