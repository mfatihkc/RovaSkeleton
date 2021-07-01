import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[rovaWidgetToggle]'
})
export class RovaWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
