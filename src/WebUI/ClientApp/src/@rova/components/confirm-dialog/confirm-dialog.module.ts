import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { RovaConfirmDialogComponent } from '@rova/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        RovaConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        RovaConfirmDialogComponent
    ],
})
export class RovaConfirmDialogModule
{
}
