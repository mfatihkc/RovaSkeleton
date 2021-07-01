import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { RovaUtils } from '@rova/utils';

import { Contact } from 'app/main/apps/contacts/contact.model';

import {ContactsClient, CreateContactCommand, UpdateContactCommand, UpdateContactStarCommand} from '../../../Rova-api';

@Injectable()
export class ContactsService implements Resolve<any>
{
    onContactsChanged: BehaviorSubject<any>;
    onSelectedContactsChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    contacts: Contact[];
    selectedContacts: string[] = [];

    searchText: string;
    filterBy: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private contactsClient: ContactsClient
    )
    {
        // Set the defaults
        this.onContactsChanged = new BehaviorSubject([]);
        this.onSelectedContactsChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getContacts()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getContacts();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getContacts();
                    });

                    resolve();

                },
                reject
            );
        });
    }

    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    getContacts(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.contactsClient.get()
                    .subscribe((response: any) => {

                        this.contacts = response;

                        if ( this.filterBy === 'starred' )
                        {
                            this.contacts = this.contacts.filter(_contact => {
                                return _contact.star === true;
                            });
                        }

                        if ( this.filterBy === 'frequent' )
                        {
                            const thisMonth = new Date();
                            thisMonth.setDate(thisMonth.getDate() - 30);

                            this.contacts = this.contacts
                            .sort((a, b) => {
                                if (a.created < b.created) {
                                    return 1;
                                }
                                else if (a.created > b.created) {
                                    return -1;
                                }
                                else{
                                    return 0;
                                }                            
                                
                            })
                            .filter(_contact => {
                                return _contact.created > thisMonth;
                            });
                        }

                        if ( this.searchText && this.searchText !== '' )
                        {
                            this.contacts = RovaUtils.filterArrayByString(this.contacts, this.searchText);
                        }

                        this.contacts = this.contacts.map(contact => {
                            return new Contact(contact);
                        });

                        this.onContactsChanged.next(this.contacts);
                        resolve(this.contacts);
                    }, reject);
            }
        );
    }

    

    /**
     * Toggle selected contact by id
     *
     * @param id
     */
    toggleSelectedContact(id): void
    {
        // First, check if we already have that contact as selected...
        if ( this.selectedContacts.length > 0 )
        {
            const index = this.selectedContacts.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedContacts.splice(index, 1);

                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedContacts.push(id);

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedContacts.length > 0 )
        {
            this.deselectContacts();
        }
        else
        {
            this.selectContacts();
        }
    }

    /**
     * Select contacts
     *
     * @param filterParameter
     * @param filterValue
     */
    selectContacts(filterParameter?, filterValue?): void
    {
        this.selectedContacts = [];

        // If there is no filter, select all contacts
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedContacts = [];
            this.contacts.map(contact => {
                this.selectedContacts.push(contact.id);
            });
        }

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Update contact
     *
     * @param contact
     * @returns {Promise<any>}
     */
    updateContact(contact): Promise<any>
    {
        let updateContact = new UpdateContactCommand();
        updateContact = contact;
        return new Promise((resolve, reject) => {
            this.contactsClient.update(updateContact)
                .subscribe(response => {
                    this.getContacts();
                    resolve(response);
                });
            });
    }

    createContact(contact): Promise<any>
    {
        let createContact = new CreateContactCommand();
        createContact = contact;
        return new Promise((resolve, reject) => {
            this.contactsClient.create(createContact)
            .subscribe(response => {
                this.getContacts();
                resolve(response);
            });
        });
    }


    /**
     * Update star data
     *
     * @param updateStarData
     * @returns {Promise<any>}
     */
    updateStarData(contactId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            const updateStar = new UpdateContactStarCommand();
            updateStar.id = contactId;
            this.contactsClient.star(updateStar)
                .subscribe(response => {
                    this.getContacts();
                    resolve(response);
                });
        });
    }



    /**
     * Deselect contacts
     */
    deselectContacts(): void
    {
        this.selectedContacts = [];

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Delete contact
     *
     * @param contact
     */
    deleteContact(contact): void
    {
        this.contactsClient.delete(contact.id)
        .subscribe(r => {
            const contactIndex = this.contacts.indexOf(contact);
            this.contacts.splice(contactIndex, 1);
            this.onContactsChanged.next(this.contacts);
        });
        
    }

    /**
     * Delete selected contacts
     */
    deleteSelectedContacts(): void
    {
        for ( const contactId of this.selectedContacts )
        {
            const contact = this.contacts.find(_contact => {
                return _contact.id === contactId;
            });
            this.contactsClient.delete(contact.id)
            .subscribe(r => {
                const contactIndex = this.contacts.indexOf(contact);
                this.contacts.splice(contactIndex, 1);
                this.onContactsChanged.next(this.contacts);
            });
        }
        
        this.deselectContacts();
    }

}
