import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RovaSharedModule } from '@rova/shared.module';

import { KnowledgeBaseService } from 'app/main/pages/knowledge-base/knowledge-base.service';
import { KnowledgeBaseComponent } from 'app/main/pages/knowledge-base/knowledge-base.component';
import { KnowledgeBaseArticleComponent } from 'app/main/pages/knowledge-base/dialogs/article/article.component';

const routes = [
    {
        path     : 'knowledge-base',
        component: KnowledgeBaseComponent,
        resolve  : {
            knowledgeBase: KnowledgeBaseService
        }
    }
];

@NgModule({
    declarations   : [
        KnowledgeBaseComponent,
        KnowledgeBaseArticleComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,

        RovaSharedModule
    ],
    providers      : [
        KnowledgeBaseService
    ],
    entryComponents: [
        KnowledgeBaseArticleComponent
    ]
})
export class KnowledgeBaseModule
{
}
