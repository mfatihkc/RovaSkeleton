import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RovaConfigService } from '@rova/services/config.service';
import { rovaAnimations } from '@rova/animations';
import { AuthenticateService } from '../services/authenticate.service';

import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import {  } from '@angular/compiler/src/core';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : rovaAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;
    loginSuccess = true;
    /**
     * Constructor
     *
     * @param {RovaConfigService} _rovaConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _rovaConfigService: RovaConfigService,
        private _formBuilder: FormBuilder,
        private authenticateService: AuthenticateService,
        private router: Router,
        private route: ActivatedRoute
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
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(): void {
       const email = this.loginForm.get('email').value;
       const password = this.loginForm.get('password').value;
       const em = this.loginForm['email'];


       this.authenticateService.signInEmailAndPassword(email, password)
       .then((result) => {
           if (result.user){
            this.loginSuccess = true;
            const returnUrl = this.route.snapshot.queryParams['returnUrl'];

            if (returnUrl){
                this.router.navigateByUrl(returnUrl);
            }
            else{
                this.router.navigateByUrl(environment.mainPage);
            }
           }
           else{
            this.loginSuccess = false;
           }
           
       })
       .catch(e => {
           console.warn(e.message);
       });
    }
}
