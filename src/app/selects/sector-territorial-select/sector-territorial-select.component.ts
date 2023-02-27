import { Component, OnInit } from '@angular/core';
import { SectorTerritorial } from 'src/app/models/sector-territorial.model';
import { BaseSelectComponent } from '../base-select/base-select.component';
import { SectorTerritorialService } from './sector-territorial.service';

@Component({
  selector: 'app-sector-territorial-select',
  templateUrl: '../base-select/base-select.component.html',
  styleUrls: ['./sector-territorial-select.component.css']
})
export class SectorTerritorialSelectComponent extends BaseSelectComponent implements OnInit {

  constructor(private sectorTerritorialService: SectorTerritorialService) {
    super();
  }

  ngOnInit(): void {
    this.loadItems(this.sectorTerritorialService.getAll());
  }

}
