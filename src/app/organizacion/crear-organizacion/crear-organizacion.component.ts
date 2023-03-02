import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdTextPair, newIdTextPair } from 'src/app/models/idtextpair.model';
import {
    newOrganizacion,
    Organizacion,
} from 'src/app/models/organizacion.model';
import { OrganizacionJsonService } from '../organizacion-json.service';

@Component({
    selector: 'app-crear-organizacion',
    templateUrl: '../crear-organizacion-details.html',
    styleUrls: ['./crear-organizacion.component.css'],
})
export class CrearOrganizacionComponent implements OnInit {
    organizacion: Organizacion;
    sectorTerritorial!: IdTextPair | null;

    constructor(
        private organizacionService: OrganizacionJsonService,
        private router: Router
    ) {
        this.organizacion = newOrganizacion();
        //this.sectorTerritorial = newIdTextPair();
    }

    ngOnInit(): void {}

    onSubmit() {
        this.organizacion.sectorTerritorial = this.sectorTerritorial;
        this.organizacionService.create(this.organizacion).subscribe(() => {
            this.router.navigate(['/organizacion']);
        });
    }
}
