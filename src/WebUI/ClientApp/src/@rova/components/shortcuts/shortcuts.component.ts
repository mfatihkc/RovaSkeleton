import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RovaMatchMediaService } from '@rova/services/match-media.service';
import { RovaNavigationService } from '@rova/components/navigation/navigation.service';

@Component({
    selector   : 'rova-shortcuts',
    templateUrl: './shortcuts.component.html',
    styleUrls  : ['./shortcuts.component.scss']
})
export class RovaShortcutsComponent implements OnInit, AfterViewInit, OnDestroy
{
    shortcutItems: any[];
    navigationItems: any[];
    filteredNavigationItems: any[];
    searching: boolean;
    mobileShortcutsPanelActive: boolean;

    @Input()
    navigation: any;

    @ViewChild('searchInput')
    searchInputField;

    @ViewChild('shortcuts')
    shortcutsEl: ElementRef;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {CookieService} _cookieService
     * @param {RovaMatchMediaService} _rovaMatchMediaService
     * @param {RovaNavigationService} _rovaNavigationService
     * @param {MediaObserver} _mediaObserver
     * @param {Renderer2} _renderer
     */
    constructor(
        private _cookieService: CookieService,
        private _rovaMatchMediaService: RovaMatchMediaService,
        private _rovaNavigationService: RovaNavigationService,
        private _mediaObserver: MediaObserver,
        private _renderer: Renderer2
    )
    {
        // Set the defaults
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the navigation items and flatten them
        this.filteredNavigationItems = this.navigationItems = this._rovaNavigationService.getFlatNavigation(this.navigation);

        if ( this._cookieService.check('FUSE2.shortcuts') )
        {
            this.shortcutItems = JSON.parse(this._cookieService.get('FUSE2.shortcuts'));
        }
        else
        {
            // User's shortcut items
            this.shortcutItems = [
                {
                    title: 'Scheduler',
                    type : 'item',
                    icon : 'today',
                    url  : '/apps/scheduler'
                },
                {
                    title: 'Mail',
                    type : 'item',
                    icon : 'email',
                    url  : '/apps/mail'
                },
                {
                    title: 'Contacts',
                    type : 'item',
                    icon : 'account_box',
                    url  : '/apps/contacts'
                },
                {
                    title: 'To-Do',
                    type : 'item',
                    icon : 'check_box',
                    url  : '/apps/todo'
                }
            ];
        }

    }

    ngAfterViewInit(): void
    {
        // Subscribe to media changes
        this._rovaMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this._mediaObserver.isActive('gt-sm') )
                {
                    this.hideMobileShortcutsPanel();
                }
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
     * Search
     *
     * @param event
     */
    search(event): void
    {
        const value = event.target.value.toLowerCase();

        if ( value === '' )
        {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;

            return;
        }

        this.searching = true;

        this.filteredNavigationItems = this.navigationItems.filter((navigationItem) => {
            return navigationItem.title.toLowerCase().includes(value);
        });
    }

    /**
     * Toggle shortcut
     *
     * @param event
     * @param itemToToggle
     */
    toggleShortcut(event, itemToToggle): void
    {
        event.stopPropagation();

        for ( let i = 0; i < this.shortcutItems.length; i++ )
        {
            if ( this.shortcutItems[i].url === itemToToggle.url )
            {
                this.shortcutItems.splice(i, 1);

                // Save to the cookies
                this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));

                return;
            }
        }

        this.shortcutItems.push(itemToToggle);

        // Save to the cookies
        this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    }

    /**
     * Is in shortcuts?
     *
     * @param navigationItem
     * @returns {any}
     */
    isInShortcuts(navigationItem): any
    {
        return this.shortcutItems.find(item => {
            return item.url === navigationItem.url;
        });
    }

    /**
     * On menu open
     */
    onMenuOpen(): void
    {
        setTimeout(() => {
            this.searchInputField.nativeElement.focus();
        });
    }

    /**
     * Show mobile shortcuts
     */
    showMobileShortcutsPanel(): void
    {
        this.mobileShortcutsPanelActive = true;
        this._renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }

    /**
     * Hide mobile shortcuts
     */
    hideMobileShortcutsPanel(): void
    {
        this.mobileShortcutsPanelActive = false;
        this._renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }
}
