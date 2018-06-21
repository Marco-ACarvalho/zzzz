import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Comandovoz {
  public tipo_voz: String;
  public volume?: Number;
  public distanci_aviso?: Number;
}

@Injectable()
export class ComandovozService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/comandovoz');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/comandovoz/' + id);
  }

  salvar(comandovoz) {
    console.log(comandovoz);
    if (comandovoz._id) {
      return this.http.post('http://localhost:3000/comandovoz/' + comandovoz._id, comandovoz);
    } else { // Comandovoz sem _id -> Comandovoz novo
      console.log('entrou aqui');
      return this.http.put('http://localhost:3000/comandovoz', comandovoz);
    }
  }

  excluir(id: String) {
    return this.http.delete('http://localhost:3000/comandovoz/' + id);
  }

}
