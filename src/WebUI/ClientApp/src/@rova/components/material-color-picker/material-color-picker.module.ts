import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RovaPipesModule } from '@rova/pipes/pipes.module';

import { RovaMaterialColorPickerComponent } from '@rova/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        RovaMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        RovaPipesModule
    ],
    exports: [
        RovaMaterialColorPickerComponent
    ],
})
export class RovaMaterialColorPickerModule
{
}
