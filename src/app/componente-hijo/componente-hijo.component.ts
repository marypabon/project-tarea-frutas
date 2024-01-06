import { BoundElementProperty } from '@angular/compiler';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {

  products=[
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
  manzana= this.products[0];
  platano=this.products[1];
  fresa=this.products[2];
  uva=this.products[3];
  naranja=this.products[4];
  sandia=this.products[5]


}





