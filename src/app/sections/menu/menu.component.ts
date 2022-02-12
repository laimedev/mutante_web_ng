import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data = [
    {
      icon: 'assets/menu/MDI - sale.png',
      text: 'Ofertas'
    },
    {
      icon: 'assets/menu/MDI - tag.png',
      text: 'Vender'
    },
    {
      icon: 'assets/menu/MDI - store.png',
      text: 'Tienda Oficiales'
    },
    {
      icon: 'assets/menu/Grupo 1302.png',
      text: 'Favoritos'
    },
    {
      icon: 'assets/menu/Icon material-history.png',
      text: 'Historial'
    }
  ]

}
