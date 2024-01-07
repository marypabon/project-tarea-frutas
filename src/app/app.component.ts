import { Component } from '@angular/core';
import { Iproduct } from './componente-padre/interfaces/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

  // products!:Iproduct[]
  // constructor(){};
  // ngOnInit() {
  //   this.products=[
  //     {
  //       'nombre': 'manzanas',
  //       'costByGram': 0.05
  //     },
  //     {
  //       'nombre': 'Platanos',
  //       'costByGram': 0.03
  //     },
  //     {
  //       'nombre': 'Fresas',
  //       'costByGram': 0.08
  //     },
  //     {
  //       'nombre': 'Uvas',
  //       'costByGram': 0.06
  //     },
  //     {
  //       'nombre': 'Naranjas',
  //       'costByGram': 0.04
  //     },
  //     {
  //       'nombre': 'Sandia',
  //       'costByGram': 0.09
  //     }
  //   ]
  // };




}
