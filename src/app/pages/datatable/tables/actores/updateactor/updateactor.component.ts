import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-updateactor',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './updateactor.component.html',
    styleUrl: './updateactor.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateactorComponent { }
