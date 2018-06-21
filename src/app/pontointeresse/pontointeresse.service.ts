import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Pontointeresse {
  public restaurantes: String;
  public postos?: String; // ? == opcional
  public banheiro?: String;
  public hotel?: String;
}

@Injectable()
export class PontointeresseService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/pontointeresse');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/pontointeresse/' + id);
  }

  salvar(pontointeresse) {
    console.log(pontointeresse);
    if (pontointeresse._id) {
      return this.http.post('http://localhost:3000/pontointeresse/' + pontointeresse._id, pontointeresse);
    } else { // Produto sem _id -> Produto novo
      console.log('entrou aqui');
      return this.http.put('http://localhost:3000/pontointeresse', pontointeresse);
    }
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/pontointeresse/' + id);
  }

}
