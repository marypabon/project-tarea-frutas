import { BoundElementProperty } from '@angular/compiler';
import { Component, Input} from '@angular/core';
import { Iproduct } from '../componente-padre/interfaces/products.interface';


@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
  // @Input() products!:Iproduct;

  //arreglo (array) de elementos
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
  ];
  Manzana= this.products[0];
  Platano= this.products[1];
  Fresa= this.products[2];
  Uvas= this.products[3];
  Naranja= this.products[4];
  Sandia= this.products[5];

  precio!:number; //condicion para cada contenedor al dar click
  product="";
  agregar=false;

  selectProduct(fruta:string){
    this.agregar= true;

    if (fruta == 'Fresa') {
      this.product= fruta;
      this.precio=this.Fresa.costByGram
    }
    if (fruta == 'Manzanas'){
      this.product= fruta;
      this.precio=this.Manzana.costByGram

    }
    if (fruta == 'Naranja'){
      this.product= fruta;
      this.precio=this.Naranja.costByGram

    }
    if (fruta == 'Platano'){
      this.product= fruta;
      this.precio=this.Platano.costByGram

    }
    if (fruta == 'Sandia'){
      this.product= fruta;
      this.precio=this.Sandia.costByGram


    }
    if (fruta == 'Uvas'){
      this.product= fruta;
      this.precio=this.Uvas.costByGram
    }

  };

  //funcion boton guardar
  // guardar(){


  //   }
}
