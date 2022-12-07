import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-filaskills',
  templateUrl: './filaskills.component.html',
  styleUrls: ['./filaskills.component.scss']
})
export class FilaskillsComponent implements OnInit {

  skills:any;
  
  constructor(private servicioPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.servicioPorfolio.obtenerDatos().subscribe(datos=>
      {
        this.skills=datos.skills;
        
      })
    
    
    
  }

}
