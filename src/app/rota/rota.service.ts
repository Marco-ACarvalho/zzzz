import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Rota {
  public rua: String;
  public cidade: String;
  public bairro: String;
  public numero: Number;
  public comandovoz: String;
  public ponto: String;
}

@Injectable()
export class RotaService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/rota');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/rota/' + id);
  }

  salvar(rota) {
    console.log(rota);
    if (rota._id) {
      return this.http.post('http://localhost:3000/rota/' + rota._id, rota);
    } else {
      console.log('entrou aqui');
      return this.http.put('http://localhost:3000/rota', rota);
    }
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/rota/' + id);
  }

}
