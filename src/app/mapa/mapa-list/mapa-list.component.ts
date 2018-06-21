import { Component, OnInit } from '@angular/core';
import { MapaService } from '../mapa.service';

@Component({
  selector: 'app-mapa-list',
  templateUrl: './mapa-list.component.html',
  styleUrls: ['./mapa-list.component.css'],
  providers: [ MapaService ]
})
export class MapaListComponent implements OnInit {

  mapas: any = {};

  constructor(private mapaService: MapaService) { }

  ngOnInit() {
    this.mapaService.listar().subscribe(
      dados => this.mapas = dados,
      erro => console.log(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este mapa?')) {
      this.mapaService.excluir(id).subscribe(
        () => {
          this.ngOnInit(); // Atualiza a listagem
          alert('Mapa excluído com sucesso');
        },
        erro => {
          alert('Não foi possível excluir este mapa');
          console.error(erro);
        }
      );
    }
  }

}
