import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-filabio',
  templateUrl: './filabio.component.html',
  styleUrls: ['./filabio.component.scss']
})
export class FilabioComponent implements OnInit {
  miPorfolio:any;
  constructor(private PorfolioServicio:PorfolioService) { }

  ngOnInit(): void {
    this.PorfolioServicio.obtenerDatos().subscribe(datos =>{
      this.miPorfolio=datos;
    })
  }

}
