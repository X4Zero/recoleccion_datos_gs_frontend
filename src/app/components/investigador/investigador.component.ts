import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsApiService } from '../../services/ws-api.service';
import { ReportesServiceService } from '../../services/reportes-service.service';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.css']
})
export class InvestigadorComponent implements OnInit {

  investigador: any = {};
  loadingInvestigador: boolean=false;
  file_excel:any = {};

  constructor(private router: ActivatedRoute, private ws: WsApiService, private rep:ReportesServiceService, private sanitizer:DomSanitizer) { 
    this.loadingInvestigador = true;

    this.router.params.subscribe( params => {
      this.getInvestigador( params['id']);
      this.getReporte(params['id']);
    });
  }

  ngOnInit() {
  }

  getInvestigador(id: string) {

    this.ws.obtenerInvestigador(id)
        .subscribe( investigador => {
          console.log(investigador);
          this.investigador = investigador;
          this.loadingInvestigador = false;
        })
  }

  getReporte(id:string) {
    this.rep.obtenerReporteInvestigador(id)
        .subscribe( (data) => {
          console.log(data)
          this.downloadFile(data);
        })
  }

  private downloadFile(data: Blob) {
    console.log('downloading...');
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url)
    
    this.file_excel = sanitizedUrl;
    // console.log(url);
    // console.log(typeof url);
    // window.open(url);//esto lo descarga sin presionar boton
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}


}
