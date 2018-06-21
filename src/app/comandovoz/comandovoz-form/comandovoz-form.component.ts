import { Component, OnInit } from '@angular/core';
import { ComandovozService, Comandovoz } from '../comandovoz.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comandovoz-form',
  templateUrl: './comandovoz-form.component.html',
  styleUrls: ['./comandovoz-form.component.css'],
  providers: [ComandovozService]
})
export class ComandovozFormComponent implements OnInit {

  public comandovoz: Comandovoz = new Comandovoz();

  constructor(
    private ps: ComandovozService,
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
            (dados: Comandovoz) => this.comandovoz = dados,
            erro => console.error(erro)
          );
        }
      }
    );

  }

  enviar(form) {
    if (form.valid) {
      this.ps.salvar(this.comandovoz).subscribe(
        erro => {
          alert('Ocorreu um erro:\n ' + erro);
          console.log(erro);
        }
      );
    }
  }

}
