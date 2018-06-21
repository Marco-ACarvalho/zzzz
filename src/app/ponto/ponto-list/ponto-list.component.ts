import { Component, OnInit } from '@angular/core';
import { PontoService } from '../ponto.service';

@Component({
  selector: 'app-ponto-list',
  templateUrl: './ponto-list.component.html',
  styleUrls: ['./ponto-list.component.css'],
  providers: [ PontoService ]
})
export class PontoListComponent implements OnInit {

  pontos: any = {};

  constructor(private pontoService: PontoService) { }

  ngOnInit() {
    this.pontoService.listar().subscribe(
      dados => this.pontos = dados,
      erro => console.log(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este ponto?')) {
      this.pontoService.excluir(id).subscribe(
        () => {
          this.ngOnInit(); // Atualiza a listagem
          alert('Ponto excluído com sucesso');
        },
        erro => {
          alert('Não foi possível excluir este ponto');
          console.error(erro);
        }
      );
    }
  }

}
