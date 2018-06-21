import { Component, OnInit } from '@angular/core';
import { PontoService, Ponto } from '../ponto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapaService } from '../../mapa/mapa.service';

@Component({
  selector: 'app-ponto-form',
  templateUrl: './ponto-form.component.html',
  styleUrls: ['./ponto-form.component.css'],
  providers: [PontoService, MapaService]
})
export class PontoFormComponent implements OnInit {

  public ponto: Ponto = new Ponto();
  public mapas: any = [];

  constructor(
    private ps: PontoService,
    private cs: MapaService,
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
            (dados: Ponto) => this.ponto = dados,
            erro => console.error(erro)
          );
        }
      }
    );

    this.cs.listar().subscribe(
      dados => this.mapas = dados,
      erro => console.error(erro)
    );

  }

  enviar(form) {
    if (form.valid) {
      this.ps.salvar(this.ponto).subscribe(
        dados => alert('Dados salvos com sucesso.'),
        erro => {
          alert('Ocorreu um erro:\n ' + erro);
          console.log(erro);
        }
      );
    }
  }

}
