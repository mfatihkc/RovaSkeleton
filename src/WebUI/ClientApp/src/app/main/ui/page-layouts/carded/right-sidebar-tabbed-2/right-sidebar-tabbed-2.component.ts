import { Component } from '@angular/core';

import { RovaSidebarService } from '@rova/components/sidebar/sidebar.service';

@Component({
    selector   : 'carded-right-sidebar-tabbed-2',
    templateUrl: './right-sidebar-tabbed-2.component.html',
    styleUrls  : ['./right-sidebar-tabbed-2.component.scss']
})
export class CardedRightSidebarTabbed2Component
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
