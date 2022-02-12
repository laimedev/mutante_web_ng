import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      img: 'assets/pay/Grupo 1810.png',
      title: 'Visa'
    },
    {
      img: 'assets/pay/Grupo 1812.png',
      title: 'MasterCard'
    },
    {
      img: 'assets/pay/Grupo 1815.png',
      title: 'Pagosnet'
    },
    {
      img: 'assets/pay/Grupo 1814.png',
      title: 'Redelance'
    }
  ]

}
