import { Injectable } from "@angular/core";
import { ApiJsonHelperService } from "src/app/api/api-json-helper.service";
import { BaseJsonService } from "src/app/base/base-json.service";
import { SectorTerritorial } from "src/app/models/sector-territorial.model";

@Injectable({
    providedIn: 'root',
})

export class ClasificacionPorOrganizacionService extends BaseJsonService<SectorTerritorial>{

    constructor(apiHelperService: ApiJsonHelperService) {
        super(apiHelperService, 'reportehc/hc-por-clasificacion-organizacion');
      }
}