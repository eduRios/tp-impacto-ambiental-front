import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newDireccion } from 'src/app/models/direccion.model';
import { Espacio, newEspacio } from 'src/app/models/espacio.model';
import { IdTextPair, newIdTextPair } from 'src/app/models/idtextpair.model';
import { ToastrService } from 'ngx-toastr';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-crear-sector',
  templateUrl: './crear-sector.component.html',
  styleUrls: ['./crear-sector.component.css']
})
export class CrearSectorComponent implements OnInit {
  request: CrearSectorRequest = {} as CrearSectorRequest;
  organizacion!: IdTextPair;
  localidad!: IdTextPair;
  espacio!: Espacio;

  constructor(private sectorService: SectorService, private router: Router, private toastr: ToastrService) {
    this.espacio = newEspacio();
    this.espacio.direccion = newDireccion();
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.request.idOrganizacion = this.organizacion.id;
    this.request.espacio = this.espacio;
    this.request.espacio.direccion!.localidad = this.localidad;
    this.sectorService.crear(this.request).subscribe(() => {
      this.toastr.success('Sector creado correctamente');
      this.router.navigate(['/sector']);
    });
  }

}

export interface CrearSectorRequest {
  nombre: string;
  idOrganizacion: number;
  espacio: Espacio;
}
