import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'rova-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class RovaConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<RovaConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<RovaConfirmDialogComponent>
    )
    {
    }

}
