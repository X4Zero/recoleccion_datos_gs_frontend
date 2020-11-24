import { Component, OnInit } from '@angular/core';
import { WsApiService } from '../../services/ws-api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  loading: boolean;

  constructor(private ws:WsApiService) { }

  ngOnInit() {
  }

  agregar(url: string) {
    this.loading = true;

    Swal.fire({
      title: 'Espere',
      text: 'Agregando Investigador a la Base de Datos',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    console.log(url);
    this.ws.agregarInvestigador(url)
        .subscribe( (data: any) => {
          // this.investigadores = data.respuesta;
          // this.investigadores = data;
          console.log(data);
          this.loading = false;

          if (typeof data.respuesta == 'string'){
            Swal.fire({
              title:'Agregar Investigador',
              text: data.respuesta

            });
          } else {
            Swal.fire({
              title:'Agregar Investigador',
              text: 'Se agregó al Investigador satisfactoriamente'
            });
          }
        });

  }
  

}
