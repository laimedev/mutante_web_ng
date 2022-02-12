import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    { 
      img: 'assets/news/Enmascarar grupo 89.png',
      title: 'ÚLITMOS DÍAS',
      description: 'Calzado adidas con 20% de dcto. en running',
      button: 'Ver mas >',
      color: '#4938A2'
    },
    { 
      img: 'assets/news/happy-family-cooking-together-on-home-kitchen-picture-id1216418636.png',
      title: 'ÚLITMOS DÍAS',
      description: 'Grandes ofertas en artículos para cocina',
      button: 'Ver mas >',
      color: '#1A9844'

    }
  ]

}
