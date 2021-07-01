import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticateService } from '../../authentication/services/authenticate.service';
import { Role } from '../../authentication/services/Role';
import { UsersClient, UpdateUserCommand } from 'app/Rova-api';

@Component({
    selector     : 'pricing-style-2',
    templateUrl  : './style-2.component.html',
    styleUrls    : ['./style-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PricingStyle2Component
{

    
    /**
     * Constructor
     */
    constructor(
        private authenticateService: AuthenticateService, 
        private snackBar: MatSnackBar,
        private userClient: UsersClient
        )
    {}

    public openSnackBar(message: string, action: string): void {
        this.snackBar.open(message, action, {
          duration: 5000,
        });
      }

    public goldPackage(): void {
        const currentUserMail = this.authenticateService.getUserMail();        
        this.authenticateService.addRole(currentUserMail, Role.Gold);

        const command = new UpdateUserCommand();
        command.userId = this.authenticateService.getUserId();
        command.role = Role.Gold;
        this.userClient.update(command).subscribe();       
        this.openSnackBar('Role Updated as Gold', 'DONE');
        
    }

    public platinumPackage(): void {
        const currentUserMail = this.authenticateService.getUserMail();        
        this.authenticateService.addRole(currentUserMail, Role.Platinum);

        const command = new UpdateUserCommand();
        command.userId = this.authenticateService.getUserId();
        command.role = Role.Platinum;
        this.userClient.update(command).subscribe();       
        this.openSnackBar('Role Updated as Platinum', 'DONE');

    }

}
