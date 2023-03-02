import { Injectable } from '@angular/core';
import { ApiJsonHelperService } from 'src/app/api/api-json-helper.service';
import { BaseJsonService } from 'src/app/base/base-json.service';
import { IdTextPair } from 'src/app/models/idtextpair.model';

@Injectable({
    providedIn: 'root',
})
export class LocalidadSelectService extends BaseJsonService<IdTextPair> {
    constructor(apiHelperService: ApiJsonHelperService) {
        super(apiHelperService, 'localidad');
    }
}
