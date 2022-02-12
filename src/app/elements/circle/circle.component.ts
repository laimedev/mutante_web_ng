import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data = [
    {
      img: 'assets/interes/Grupo 1913.png',
      title: 'Celulares'
    },
    {
      img: 'assets/interes/Grupo 1111.png',
      title: 'Celulares'
    },
    {
      img: 'assets/interes/Grupo 1150.png',
      title: 'Videojuegos'
    },
    {
      img: 'assets/interes/Grupo 1110.png',
      title: 'Moda'
    },
    {
      img: 'assets/interes/Grupo 1108.png',
      title: 'Computacion'
    },
    {
      img: 'assets/interes/Grupo 1107.png',
      title: 'Audio'
    },
    {
      img: 'assets/interes/Grupo 1106.png',
      title: 'Televisores'
    },
  ]

}
