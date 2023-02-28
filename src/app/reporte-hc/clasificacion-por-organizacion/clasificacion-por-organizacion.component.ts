import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectorTerritorial } from 'src/app/models/sector-territorial.model';
import { OrganizacionJsonService } from 'src/app/organizacion/organizacion-json.service';
import { BaseIndexComponent } from 'src/app/templates/base-index/base-index.component';
import { ReporteHcService } from '../reporte-hc.service';
import { Observable} from 'rxjs';
import { ClasificacionPorOrganizacionService } from './clasificacion-por-organizacion.service';

@Component({
  selector: 'app-clasificacion-por-organizacion',
  templateUrl: './clasificacion-por-organizacion.component.html',
  styleUrls: ['./clasificacion-por-organizacion.component.css']
})
export class ClasificacionPorOrganizacionComponent extends BaseIndexComponent<SectorTerritorial> implements OnInit {

  constructor(router: Router, service: ClasificacionPorOrganizacionService) {
      super(router, 'reportehc/hc-por-clasificacion-organizacion', service);
  }

  ngOnInit(): void {
    this.onInit();
  }
}
