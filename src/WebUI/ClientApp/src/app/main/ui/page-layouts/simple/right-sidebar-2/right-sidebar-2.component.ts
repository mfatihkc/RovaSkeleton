import { Component } from '@angular/core';

import { RovaSidebarService } from '@rova/components/sidebar/sidebar.service';

@Component({
    selector   : 'simple-right-sidebar-2',
    templateUrl: './right-sidebar-2.component.html',
    styleUrls  : ['./right-sidebar-2.component.scss']
})
export class SimpleRightSidebar2Component
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
