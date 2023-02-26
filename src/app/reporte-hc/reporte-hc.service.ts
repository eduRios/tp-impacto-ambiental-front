import { Injectable } from '@angular/core';
import { ApiJsonHelperService } from '../api/api-json-helper.service';
import { BaseJsonService } from '../base/base-json.service';
import { SectorTerritorial } from '../models/sector-territorial.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteHcService extends BaseJsonService<SectorTerritorial>{

  constructor(apiHelperService: ApiJsonHelperService) {
    super(apiHelperService, 'reportehc/hc-por-sector-territorial');
  }
}
