import { Component, OnInit } from '@angular/core';
import { WsApiService } from '../../services/ws-api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  investigadores: any[] = [];
  loading: boolean;


  constructor( private ws: WsApiService, private router: Router ) {

    this.loading = true;
    this.ws.obtenerInvestigadores()
        .subscribe( (data: any) => {
          // this.investigadores = data.respuesta;
          this.investigadores = data;
          this.loading= false;
          console.log(data);
        });
  }

  ngOnInit() {
  }

  verInvestigador(investigador: any) {

    let investigadorid = investigador.idinvestigador;
    console.log(investigadorid);

    this.router.navigate(['/investigador', investigadorid]);
  }


}
