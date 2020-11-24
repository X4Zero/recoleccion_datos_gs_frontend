import { Component, OnInit } from '@angular/core';
import { WsApiService } from '../../services/ws-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import { ReportesServiceService } from '../../services/reportes-service.service';
@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.css']
})
export class ExportarComponent implements OnInit {
  investigadores: any[] = [];
  loading: boolean;

  investigadores_seleccionados: any=[];
  lista_ids: any = [];
  file_excel_todos:any = {};
  file_excel_seleccionados:any = {};

  constructor(private ws: WsApiService, private rep:ReportesServiceService, private sanitizer:DomSanitizer) { 
    this.loading = true;
    this.ws.obtenerInvestigadores()
        .subscribe( (data: any) => {
          // this.investigadores = data.respuesta;
          this.investigadores = data;
          this.loading= false;
          console.log(data);
        });

    this.getReporteInvestigadores([],1);
  }

  ngOnInit() {

  }

  getReporteInvestigadores(ids,opcion) {
    this.rep.obtenerReporteInvestigadores(ids)
        .subscribe( (data:Blob) => {
          console.log("getReporteInvestigadores");
          console.log(data);
          this.downloadFile(data,opcion);
        }, err => {
          console.log("error");
          console.log(err);
        });
  }

  ExportarSeleccionados() {
    console.log("ExportarSeleccionados")
    this.getReporteInvestigadores(this.lista_ids,0);
  }

  seleccionarInvestigador(investigador: any) {
    if ( this.lista_ids.indexOf( investigador.idinvestigador ) === -1 ) {
      this.investigadores_seleccionados.push(investigador);
      this.lista_ids.push(investigador.idinvestigador);
    }
  }

  removerInvestigador(investigador: any) {

    let posicion = this.lista_ids.indexOf( investigador.idinvestigador );
    if (  posicion > -1 ) {
      this.lista_ids.splice(posicion,1);
      this.investigadores_seleccionados.splice(posicion,1);
    }
  }

  private downloadFile(data: Blob,which:number) {
    console.log('downloading...');
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(url)

    if ( which === 1) {
      this.file_excel_todos = sanitizedUrl;
    } else {
      console.log("seleccionados");
      this.file_excel_seleccionados = sanitizedUrl;
      // window.open(url);//esto lo descarga sin presionar boton
    }

  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
