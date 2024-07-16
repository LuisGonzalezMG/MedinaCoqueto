import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AgregaractorService } from '../../../../../services/compuesto/agregaractor.service';

@Component({
    selector: 'app-addactor',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './addactor.component.html',
    styleUrls: ['./addactor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddactorComponent {
    actorData = {
        cod_act: "",
        nom_act: "",
        nom_rea_act: "",
        fec_nac_act: new Date,
        fec_mue_act: new Date,
        naciona_act: ""
    };
    actorForm: FormGroup;

    constructor(private fb: FormBuilder, private registroService: AgregaractorService ) {
        this.actorForm = this.fb.group({
            cod_act: ['', [Validators.required, Validators.maxLength(4)]],
            nom_act: ['', [Validators.required, Validators.maxLength(50)]],
            nom_rea_act: ['', [Validators.required, Validators.maxLength(50)]],
            fec_nac_act: ['', Validators.required],
            fec_mue_act: [''],
            naciona_act: ['', [Validators.required, Validators.maxLength(50)]]
        });
    }



    onSubmit(): void {
        if (this.actorForm.valid) {
            console.log('Form Submitted!', this.actorForm.value);
        }
    }

    get formControls() {
        return this.actorForm.controls;
    }

    enviarRegistro() {
        this.registroService.agregarActor(this.actorData).subscribe(
          (response) => {
            console.log('Actor agregado:', response);
          },
          (error) => {
            console.error('Error al agregar el actor:', error);
          }
        );
      }

}
