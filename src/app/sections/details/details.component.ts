import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data = [
    {
      img: 'assets/details/delivery-truck (2).png',
      title: 'ENVÍO GRATIS',
      description: 'Envío gratis en toda La Paz. O pedidos superiores a los $125 Bo.'
    },
    {
      img: 'assets/details/support.png',
      title: 'SOPORTE 24/7',
      description: 'Contáctenos las 24 horas del día los 7 días de la semana.'
    },
    {
      img: 'assets/details/return.png',
      title: 'REGRESO 30 DÍAS',
      description: 'Simplemente devuélvalo dentro de los 30 días para un cambio de artículo.'
    },
    {
      img: 'assets/details/credit-card (1).png',
      title: 'PAGO 100% SEGURO',
      description: 'Garantizamos un pago seguro con IGV.'
    }
  ]
}
