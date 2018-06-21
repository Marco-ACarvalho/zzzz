import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { MapaListComponent } from './mapa/mapa-list/mapa-list.component';
import { PontoListComponent } from './ponto/ponto-list/ponto-list.component';
import { comandovozListComponent } from './comandovoz/comandovoz-list/comandovoz-list.component';
import { PontointeresseListComponent } from './pontointeresse/pontointeresse-list/pontointeresse-list.component';
import { RotaListComponent } from './rota/rota-list/rota-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    CategoriaListComponent,
    MapaListComponent,
    PontoListComponent,
    comandovozListComponent,
    PontointeresseListComponent,
    RotaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
