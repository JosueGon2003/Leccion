import { Pipe, PipeTransform } from '@angular/core';
import { Transporte } from '../services/service.service';

@Pipe({
  name: 'filtroT'
})
export class FiltroTPipe implements PipeTransform {

  transform(transportes: Transporte[], filtro: string): Transporte[] {
    if (!filtro || filtro === 'Todos') {
      return transportes;
    }

    return transportes.filter((transporte: Transporte) => transporte.tipo === filtro);
  }

}
