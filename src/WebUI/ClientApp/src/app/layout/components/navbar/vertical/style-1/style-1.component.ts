import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { RovaConfigService } from '@rova/services/config.service';
import { RovaNavigationService } from '@rova/components/navigation/navigation.service';
import { RovaPerfectScrollbarDirective } from '@rova/directives/rova-perfect-scrollbar/rova-perfect-scrollbar.directive';
import { RovaSidebarService } from '@rova/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy
{
    rovaConfig: any;
    navigation: any;

    // Private
    private _rovaPerfectScrollbar: RovaPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {RovaConfigService} _rovaConfigService
     * @param {RovaNavigationService} _rovaNavigationService
     * @param {RovaSidebarService} _rovaSidebarService
     * @param {Router} _router
     */
    constructor(
        private _rovaConfigService: RovaConfigService,
        private _rovaNavigationService: RovaNavigationService,
        private _rovaSidebarService: RovaSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(RovaPerfectScrollbarDirective, {static: true})
    set directive(theDirective: RovaPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._rovaPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._rovaNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._rovaPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this._rovaPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._rovaSidebarService.getSidebar('navbar') )
                    {
                        this._rovaSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._rovaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.rovaConfig = config;
            });

        // Get current navigation
        this._rovaNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._rovaNavigationService.getCurrentNavigation();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._rovaSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._rovaSidebarService.getSidebar('navbar').toggleFold();
    }
}
