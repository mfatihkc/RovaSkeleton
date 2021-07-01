import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { RovaDirectivesModule } from '@rova/directives/directives';
import { RovaPipesModule } from '@rova/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        RovaDirectivesModule,
        RovaPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        RovaDirectivesModule,
        RovaPipesModule
    ]
})
export class RovaSharedModule
{
}
