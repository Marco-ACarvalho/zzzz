import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Ponto {
  public inicial: String;
  public final?: String; // ? == opcional
  public mapa: String;
}

@Injectable()
export class PontoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/ponto');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/ponto/' + id);
  }

  salvar(ponto) {
    console.log(ponto);
    if (ponto._id) {
      return this.http.post('http://localhost:3000/ponto/' + ponto._id, ponto);
    } else { // Produto sem _id -> Produto novo
      console.log('entrou aqui');
      return this.http.put('http://localhost:3000/ponto', ponto);
    }
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/ponto/' + id);
  }

}
