import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

import { RovaConfigService } from '@rova/services/config.service';
import { rovaAnimations } from '@rova/animations';
import { UsersClient, CreateUserCommand, ICreateUserCommand } from 'app/Rova-api';
import { AuthenticateService } from '../services/authenticate.service';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

@Component({
    selector     : 'register',
    templateUrl  : './register.component.html',
    styleUrls    : ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : rovaAnimations
})
export class RegisterComponent implements OnInit, OnDestroy
{
    registerForm: FormGroup;

    createSuccess = true;
    errorMessage = '';
    // Private
    private _unsubscribeAll: Subject<any>;
    

    constructor(
        private _rovaConfigService: RovaConfigService,
        private _formBuilder: FormBuilder,
        private _usersClient: UsersClient,
        private _authenticateService: AuthenticateService,
        private router: Router
    )
    {
        // Configure the layout
        this._rovaConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

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
        this.registerForm = this._formBuilder.group({
            fullName           : ['', Validators.required],
            lastName           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
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


    Register(): void{

        const email = this.registerForm.get('email').value;
        const passsord = this.registerForm.get('password').value;

        this._authenticateService.createUserWithEmailAndPassword(email, passsord)
        .then(errorCheck => {
            if (errorCheck === 'auth/email-already-in-use') {
                this.createSuccess = false;
                this.errorMessage = 'Thrown if there already exists an account with the given email address.';
                throw new Error('there already exists an account with the given email address.'); 
            }          
        })
        .then(() => {
            const newUser = new CreateUserCommand();
            newUser.userId = this._authenticateService.getUserId();
            newUser.email = email;
            newUser.fullName = this.registerForm.get('fullName').value;
            newUser.lastName = this.registerForm.get('lastName').value;

            this._usersClient.create(newUser)
            .subscribe(error => console.error(error)
            );
        })
        .then(() => {
            this.createSuccess = true;
            this.router.navigateByUrl(environment.mainPage);
        })
        .catch(e => {
            this.createSuccess = false;
            this.errorMessage = e.message;
        });

        
    }


   
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {passwordsNotMatching: true};
};
