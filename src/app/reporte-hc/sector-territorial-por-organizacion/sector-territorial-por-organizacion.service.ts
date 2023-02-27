import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { BaseResponse, ResponseWithResults } from "src/app/api/api-json-helper.service";
import { SectorTerritorial } from "src/app/models/sector-territorial.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SectorTerritorialPorOrganizacionService{

    Url ='http://localhost:8080/api/reportehc/composicion-de-sector-territorial';

    constructor(private httpClient:HttpClient) { }
    getSectorTerritorialPorOrganizacion(id: number){
        const o = this.get<ResponseWithResults<SectorTerritorial>>(this.Url+`/${id}`);
        console.log(o);
        return o;
      }

      get<TResponse extends BaseResponse>(
        url: string,
        headers?: HttpHeaders
    ): Observable<HttpResponse<TResponse>> {
        const apiUrl = url;
        const options: {
            headers?: HttpHeaders;
            observe: 'response';
        } = { headers, observe: 'response' };
        return this.httpClient.get<TResponse>(apiUrl, options);
    }
}