import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectorTerritorial } from 'src/app/models/sector-territorial.model';
import { BaseIndexComponent } from 'src/app/templates/base-index/base-index.component';
import { ReporteHcService } from '../reporte-hc.service';

@Component({
  selector: 'app-sector-territorial-por-organizacion',
  templateUrl: './sector-territorial-por-organizacion.component.html',
  styleUrls: ['./sector-territorial-por-organizacion.component.css']
})
export class SectorTerritorialPorOrganizacionComponent extends BaseIndexComponent<SectorTerritorial> implements OnInit {

  constructor(router: Router, service: ReporteHcService) {
    super(router, 'reportehc/composicion-de-sector-territorial', service);
  }

  ngOnInit(): void {
  }

}
