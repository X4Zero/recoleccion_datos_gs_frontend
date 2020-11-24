import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WsApiService {

  constructor( private http: HttpClient) { 
    console.log("ws service listo");
  }

  buscarInvestigadores(termino: string) {
    let formdata = new FormData();
    // formdata.append("nombres", "david mauricio");
    formdata.append("nombres", termino);

    // console.log("constructor - home")
    return this.http.post("http://127.0.0.1:5000/busqueda",formdata)
              .pipe( map( data=> {
                return data['respuesta'];
              }));
  }

  obtenerInvestigadores() {
    // console.log("constructor - home")
    return this.http.get("http://127.0.0.1:5000/investigadores")
              .pipe( map( data => {
                return data['investigadores'];
              }));
  }

  obtenerInvestigador(id: string) {
    return this.http.get(`http://127.0.0.1:5000/investigador/${id}`)
              .pipe( map( (data: any) => {
                return data.investigador;
              }));
  }

  agregarInvestigador( url_perfil: string) {
    let formdata = new FormData();
    formdata.append("url", url_perfil);

    // console.log("constructor - home")
    return this.http.post("http://127.0.0.1:5000/investigador",formdata)
              .pipe( map( data => {
                return data;
              }));
  }


}
