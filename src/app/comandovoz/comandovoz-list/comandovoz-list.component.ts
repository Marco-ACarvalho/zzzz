import { Component, OnInit } from '@angular/core';
import { ComandovozService } from '../comandovoz.service';

@Component({
  selector: 'app-comandovoz-list',
  templateUrl: './comandovoz-list.component.html',
  styleUrls: ['./comandovoz-list.component.css'],
  providers: [ ComandovozService ]
})
export class ComandovozListComponent implements OnInit {

  comandovozes: any = {};

  constructor(private comandovozService: ComandovozService) { }

  ngOnInit() {
    this.comandovozService.listar().subscribe(
      dados => this.comandovozes = dados,
      erro => console.log(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este comando de voz?')) {
      this.comandovozService.excluir(id).subscribe(
        () => {
          this.ngOnInit(); // Atualiza a listagem
          alert('Comando de voz excluído com sucesso');
        },
        erro => {
          alert('Não foi possível excluir este comando de voz');
          console.error(erro);
        }
      );
    }
  }

}
