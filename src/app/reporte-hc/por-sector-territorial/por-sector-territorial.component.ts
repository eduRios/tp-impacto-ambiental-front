import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectorTerritorial } from 'src/app/models/sector-territorial.model';
import { BaseIndexComponent } from 'src/app/templates/base-index/base-index.component';
import { ReporteHcService } from '../reporte-hc.service';

@Component({
  selector: 'app-por-sector-territorial',
  templateUrl: './por-sector-territorial.component.html',
  styleUrls: ['./por-sector-territorial.component.css']
})
export class PorSectorTerritorialComponent extends BaseIndexComponent<SectorTerritorial>implements OnInit {

  constructor(router: Router, service: ReporteHcService) {
    super(router, 'reportehc/hc-por-sector-territorial', service);
}

  ngOnInit(): void {
    super.onInit();
  }

}
