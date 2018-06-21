import { Component, OnInit } from '@angular/core';
import { MapaService, Mapa } from '../mapa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PontointeresseService } from '../../pontointeresse/pontointeresse.service';

@Component({
  selector: 'app-mapa-form',
  templateUrl: './mapa-form.component.html',
  styleUrls: ['./mapa-form.component.css'],
  providers: [MapaService, PontointeresseService]
})
export class MapaFormComponent implements OnInit {

  public mapa: Mapa = new Mapa();
  public pontointeresses: any = [];

  constructor(
    private ps: MapaService,
    private cs: PontointeresseService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    // Acessa os parâmetros da url
    this.ar.params.subscribe(
      params => { // params = coleção de parâmetros passados
        // Se existir um parâmetro chamado id, envia-o para o serviço
        // para obter os dados referentes a esse id
        if (params['id']) {
          this.ps.obterUm(params['id']).subscribe(
            (dados: Mapa) => this.mapa = dados,
            erro => console.error(erro)
          );
        }
      }
    );

    this.cs.listar().subscribe(
      dados => this.pontointeresses = dados,
      erro => console.error(erro)
    );

  }

  enviar(form) {
    if (form.valid) {
      this.ps.salvar(this.mapa).subscribe(
        dados => alert('Dados salvos com sucesso.'),
        erro => {
          alert('Ocorreu um erro:\n ' + erro);
          console.log(erro);
        }
      );
    }
  }

}
