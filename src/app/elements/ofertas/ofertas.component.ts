import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      img: 'assets/product/Imagen 57@2x.png',
      preoferta: 1.740,
      precio: 1234,
      desct: 40,
      descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...'
    },
    {
      img: 'assets/product/Imagen 57@2x.png',
      preoferta: 1.740,
      precio: 1234,
      desct: 40,
      descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...'
    },
    {
      img: 'assets/product/Imagen 57@2x.png',
      preoferta: 1.740,
      precio: 1234,
      desct: 40,
      descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...'
    },
    {
      img: 'assets/product/Imagen 57@2x.png',
      preoferta: 1.740,
      precio: 1234,
      desct: 40,
      descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...'
    },
    {
      img: 'assets/product/Imagen 57@2x.png',
      preoferta: 1.740,
      precio: 1234,
      desct: 40,
      descripcion: 'Refrigeradora Samsung Top Freezer Con Twin Cooling...'
    }
  ]

}
