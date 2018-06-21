import { Component, OnInit } from '@angular/core';
import { RotaService, Rota } from '../rota.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ComandovozService } from '../../comandovoz/comandovoz.service';
import { PontoService } from '../../ponto/ponto.service';

@Component({
  selector: 'app-rota-form',
  templateUrl: './rota-form.component.html',
  styleUrls: ['./rota-form.component.css'],
  providers: [RotaService, ComandovozService, PontoService]
})
export class RotaFormComponent implements OnInit {

  public rota: Rota = new Rota();
  public comandovozes: any = [];
  public pontos: any = [];

  constructor(
    private rs: RotaService,
    private cvs: ComandovozService,
    private ps: PontoService,
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
          this.rs.obterUm(params['id']).subscribe(
            (dados: Rota) => this.rota = dados,
            erro => console.error(erro)
          );
        }
      }
    );

    this.cvs.listar().subscribe(
      dados => this.comandovozes = dados,
      erro => console.error(erro)
    );

    this.ps.listar().subscribe(
      dados => this.pontos = dados,
      erro => console.error(erro)
    );

  }

  enviar(form) {
    if (form.valid) {
      this.rs.salvar(this.rota).subscribe(
        dados => alert('Dados salvos com sucesso.'),
        erro => {
          alert('Ocorreu um erro:\n ' + erro);
          console.log(erro);
        }
      );
    }
  }

}
