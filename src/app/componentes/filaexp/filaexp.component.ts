import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-filaexp',
  templateUrl: './filaexp.component.html',
  styleUrls: ['./filaexp.component.scss']
})
export class FilaexpComponent implements OnInit {
  listaedu:any;
  listaexp:any;
  constructor(private PorfolioServicio:PorfolioService) { }

  ngOnInit(): void {
    this.PorfolioServicio.obtenerDatos().subscribe(datos=>{
      this.listaedu = datos.education;
      this.listaexp = datos.exp;
    })
  }

}
