import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiJsonHelperService, BaseResponse } from '../api/api-json-helper.service';
import { BaseJsonService } from '../base/base-json.service';
import { Sector } from '../models/sector.model';
import { CrearSectorRequest } from './crear-sector/crear-sector.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SectorService extends BaseJsonService<Sector> {
    constructor(apiHelperService: ApiJsonHelperService) {
        super(apiHelperService, 'sector');
    }

    crear( request: CrearSectorRequest) : Observable<HttpResponse<BaseResponse>> {
        return this.apiHelperService.post(
            'sector',
            request
        );
    }
}
