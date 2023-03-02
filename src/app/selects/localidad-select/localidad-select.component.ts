import { Component, OnInit } from '@angular/core';
import { BaseSelectComponent } from '../base-select/base-select.component';
import { LocalidadSelectService } from './localidad-select.service';

@Component({
  selector: 'app-localidad-select',
  templateUrl: '../base-select/base-select.component.html',
  styleUrls: ['./localidad-select.component.css']
})
export class LocalidadSelectComponent extends BaseSelectComponent implements OnInit {

  constructor(private sectorTerritorialService: LocalidadSelectService) {
    super();
  }

  ngOnInit(): void {
    this.loadItems(this.sectorTerritorialService.getAll());
  }

}
