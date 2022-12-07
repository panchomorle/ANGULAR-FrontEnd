import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FilabioComponent } from './componentes/filabio/filabio.component';
import { FilaexpComponent } from './componentes/filaexp/filaexp.component';
import { FilaskillsComponent } from './componentes/filaskills/filaskills.component';
import { FilaproyectosComponent } from './componentes/filaproyectos/filaproyectos.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilabioComponent,
    FilaexpComponent,
    FilaskillsComponent,
    FilaproyectosComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
