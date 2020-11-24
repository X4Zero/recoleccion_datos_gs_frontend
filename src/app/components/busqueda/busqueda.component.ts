import { Component, OnInit } from '@angular/core';
import { WsApiService } from '../../services/ws-api.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  investigadores: any[] = [];
  loading: boolean;

  constructor(private ws: WsApiService, private router: Router) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);

    this.ws.buscarInvestigadores(termino)
        .subscribe( (data: any) => {
          // this.investigadores = data.respuesta;
          this.loading = false;
          this.investigadores = data;
          console.log(data);
        });
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

          // let investigadorid = data.investigador.id;
          // console.log(investigadorid);
      
          // this.router.navigate(['/investigador', investigadorid]);
        });

  }

}
