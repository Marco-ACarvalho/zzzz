import { Component, OnInit } from '@angular/core';
import { PontointeresseService } from '../pontointeresse.service';

@Component({
  selector: 'app-pontointeresse-list',
  templateUrl: './pontointeresse-list.component.html',
  styleUrls: ['./pontointeresse-list.component.css'],
  providers: [ PontointeresseService ]
})
export class PontointeresseListComponent implements OnInit {

  pontointeresses: any = {};

  constructor(private pontointeresseService: PontointeresseService) { }

  ngOnInit() {
    this.pontointeresseService.listar().subscribe(
      dados => this.pontointeresses = dados,
      erro => console.log(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este ponto de interesse?')) {
      this.pontointeresseService.excluir(id).subscribe(
        () => {
          this.ngOnInit(); // Atualiza a listagem
          alert('Ponto de interesse excluído com sucesso');
        },
        erro => {
          alert('Não foi possível excluir este ponto de interesse');
          console.error(erro);
        }
      );
    }
  }

}
