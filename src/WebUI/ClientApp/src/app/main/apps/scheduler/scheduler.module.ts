import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { DayService, WeekService, WorkWeekService, MonthService,
  AgendaService,
  DragAndDropService, ResizeService
} from '@syncfusion/ej2-angular-schedule';
import { AuthGuardPlatinum } from 'app/main/pages/authentication/services/auth.guard.Platinum';

const routes: Routes = [
  {
      path     : '**',
      canActivate: [AuthGuardPlatinum],
      component: SchedulerComponent,
      children : []
  }
];

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule, ScheduleModule, RecurrenceEditorModule,
    RouterModule.forChild(routes),
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService]
})
export class SchedulerModule { }
