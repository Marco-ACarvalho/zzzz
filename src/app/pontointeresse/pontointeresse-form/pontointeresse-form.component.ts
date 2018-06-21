import { Component, OnInit } from '@angular/core';
import { PontointeresseService, Pontointeresse } from '../pontointeresse.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pontointeresse-form',
  templateUrl: './pontointeresse-form.component.html',
  styleUrls: ['./pontointeresse-form.component.css'],
  providers: [PontointeresseService]
})
export class PontointeresseFormComponent implements OnInit {

  public pontointeresse: Pontointeresse = new Pontointeresse();

  constructor(
    private ps: PontointeresseService,
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
            (dados: Pontointeresse) => this.pontointeresse = dados,
            erro => console.error(erro)
          );
        }
      }
    );

  }

  enviar(form) {
    if (form.valid) {
      this.ps.salvar(this.pontointeresse).subscribe(
        dados => alert('Dados salvos com sucesso.'),
        erro => {
          alert('Ocorreu um erro:\n ' + erro);
          console.log(erro);
        }
      );
    }
  }

}
