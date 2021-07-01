import { Component, ViewEncapsulation } from '@angular/core';

import { rovaAnimations } from '@rova/animations';

@Component({
    selector     : 'chat-start',
    templateUrl  : './chat-start.component.html',
    styleUrls    : ['./chat-start.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : rovaAnimations
})
export class ChatStartComponent
{
    constructor()
    {
    }
}
