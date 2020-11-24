import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ReportesServiceService {

  constructor(private http: HttpClient) { 
    console.log("reportes service listo");
  }

  obtenerReporteInvestigador(id: string) {
    const headers = new HttpHeaders({
      'content-type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    });
    return this.http.get(`http://127.0.0.1:4000/reporte_investigador/${id}`,{headers, responseType:'blob'});
  }

obtenerReporteInvestigadores(ids:any) {
  const headers = new HttpHeaders({
    'content-type' : 'application/json',
    'Access-Control-Allow-Origin' : '*'
  });
  
  let raw = JSON.stringify({"ids":ids});

  let requestOptions = {
    headers: headers,
    body: raw,
    responseType:'blob'
  }
  return this.http.post(`http://127.0.0.1:4000/reporte_investigadores`,requestOptions,{headers, responseType:'blob'});
}

}
