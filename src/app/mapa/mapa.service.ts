import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Mapa {
  public pais: String;
  public estado: String; // ? == opcional
  public obstaculo: String;
  public pontointeresse: String;
}

@Injectable()
export class MapaService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/mapa');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/mapa/' + id);
  }

  salvar(mapa) {
    console.log(mapa);
    if (mapa._id) {
      return this.http.post('http://localhost:3000/mapa/' + mapa._id, mapa);
    } else {
      console.log('entrou aqui');
      return this.http.put('http://localhost:3000/mapa', mapa);
    }
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/mapa/' + id);
  }

}
