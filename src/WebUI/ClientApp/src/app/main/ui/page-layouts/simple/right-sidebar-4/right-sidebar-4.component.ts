import { Component } from '@angular/core';

import { RovaSidebarService } from '@rova/components/sidebar/sidebar.service';

@Component({
    selector   : 'simple-right-sidebar-4',
    templateUrl: './right-sidebar-4.component.html',
    styleUrls  : ['./right-sidebar-4.component.scss']
})
export class SimpleRightSidebar4Component
{
    /**
     * Constructor
     *
     * @param {RovaSidebarService} _rovaSidebarService
     */
    constructor(
        private _rovaSidebarService: RovaSidebarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._rovaSidebarService.getSidebar(name).toggleOpen();
    }
}
