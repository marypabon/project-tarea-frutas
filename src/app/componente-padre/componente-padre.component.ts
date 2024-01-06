import { Component,} from '@angular/core';
import { Iproduct } from './interfaces/products.interface';


@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css',
})
export class ComponentePadreComponent {
  product: Iproduct[];

  constructor(){
    this.product=[
      {
        'nombre': 'manzanas',
        'costByGram': 0.05
      },
      {
        'nombre': 'Platanos',
        'costByGram': 0.03
      },
      {
        'nombre': 'Fresas',
        'costByGram': 0.08
      },
      {
        'nombre': 'Uvas',
        'costByGram': 0.06
      },
      {
        'nombre': 'Naranjas',
        'costByGram': 0.04
      },
      {
        'nombre': 'Sandia',
        'costByGram': 0.09
      }

    ]
  }
};

