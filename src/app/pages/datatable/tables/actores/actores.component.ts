import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, ViewChild, AfterViewInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfoApi } from '../../../../../environments/infoApi.environmemnts';
import { DataService } from '../../../../services/data.service';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
    selector: 'app-actores',
    standalone: true,
    imports: [CommonModule, FormsModule, MatPaginatorModule, MatTableModule],
    templateUrl: './actores.component.html',
})

export class ActoresComponent { 
    actores: InfoApi[] = [];
    dataSource = new MatTableDataSource<InfoApi>(this.actores);
    displayedColumns: string[] = ['cod_act', 'nom_act', 'nom_rea_act', 'fec_nac_act', 'fec_mue_act', 'naciona_act', 'acciones'];

    totalLength: number = 0; // Inicializa totalLength

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private entriesServices: DataService) {}

    ngOnInit(): void {
        this.listar();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    listar(): void {
        this.entriesServices.getEntries().subscribe(
            (data: InfoApi[]) => {
                this.actores = data;
                this.dataSource.data = this.actores;
                this.totalLength = this.actores.length; // Actualiza totalLength
            },
            error => {
                console.error('Error al obtener datos: ', error);
            }
        );
    }

}
