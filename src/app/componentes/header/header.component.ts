import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  miPorfolio:any;
  constructor(private PorfolioServicio:PorfolioService) { }

  ngOnInit(): void {
    this.PorfolioServicio.obtenerDatos().subscribe(datos => {
      console.log(datos);
      this.miPorfolio=datos;
    })
  }

}
