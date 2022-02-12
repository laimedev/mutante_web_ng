import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data = [
    {
      portada: 'assets/store/ucLv0r.png',
      icon: 'assets/store/North-Face-Logo-1966.png',
      products: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      products1: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      text: 'Ver tienda'
    },
    {
      portada: 'assets/store/ucLv0r.png',
      icon: 'assets/store/North-Face-Logo-1966.png',
      products: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      products1: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      text: 'Ver tienda'
    },
    {
      portada: 'assets/store/ucLv0r.png',
      icon: 'assets/store/North-Face-Logo-1966.png',
      products: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      products1: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      text: 'Ver tienda'
    },
    {
      portada: 'assets/store/ucLv0r.png',
      icon: 'assets/store/North-Face-Logo-1966.png',
      products: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      products1: 'assets/store/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png',
      text: 'Ver tienda'
    }
  ]

}
