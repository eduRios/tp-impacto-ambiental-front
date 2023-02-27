import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newSectorTerritorial, SectorTerritorial } from 'src/app/models/sector-territorial.model';
import { map, Observable } from 'rxjs';
import { SectorTerritorialPorOrganizacionService } from './sector-territorial-por-organizacion.service';

@Component({
  selector: 'app-sector-territorial-por-organizacion',
  templateUrl: './sector-territorial-por-organizacion.component.html',
  styleUrls: ['./sector-territorial-por-organizacion.component.css']
})
export class SectorTerritorialPorOrganizacionComponent implements OnInit {

  sectorTerritorial: SectorTerritorial;
  sectorTerritorial2!: SectorTerritorial;
  results$!: Observable<SectorTerritorial[]>;
  sectoresT!: SectorTerritorial[];
  
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected sectorTerritorialPorOrganizacionService: SectorTerritorialPorOrganizacionService,
) {
    this.sectorTerritorial = newSectorTerritorial();
    this.sectorTerritorial2 = newSectorTerritorial();
  }

  ngOnInit(): void {
    
  }

  navigateEntidad(id: number) {
    this.sectorTerritorialPorOrganizacionService.getSectorTerritorialPorOrganizacion(id)
    .subscribe(data =>{
      this.sectoresT= data.body!.results;
      console.log(this.sectoresT);
    });
}

}
