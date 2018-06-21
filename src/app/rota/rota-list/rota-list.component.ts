import { Component, OnInit } from '@angular/core';
import { RotaService } from '../rota.service';

@Component({
  selector: 'app-rota-list',
  templateUrl: './rota-list.component.html',
  styleUrls: ['./rota-list.component.css'],
  providers: [ RotaService ]
})
export class RotaListComponent implements OnInit {

  rotas: any = {};

  constructor(private rotaService: RotaService) { }

  ngOnInit() {
    this.rotaService.listar().subscribe(
      dados => this.rotas = dados,
      erro => console.log(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este prota?')) {
      this.rotaService.excluir(id).subscribe(
        () => {
          this.ngOnInit(); // Atualiza a listagem
          alert('Rota excluído com sucesso');
        },
        erro => {
          alert('Não foi possível excluir este rota');
          console.error(erro);
        }
      );
    }
  }

}
