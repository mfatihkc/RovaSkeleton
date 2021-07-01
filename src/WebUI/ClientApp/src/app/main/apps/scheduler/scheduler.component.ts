import { Component } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { JwtInterceptorService } from 'app/main/pages/authentication/services/jwt-interceptor.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent  {

  constructor(private jwtService: JwtInterceptorService) {
    
  }

  public selectedDate: Date = new Date();
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
  private eventData: DataManager = new DataManager({
    url: `${environment.apiUrl}/api/Schedules/LoadData`,
    crudUrl : `${environment.apiUrl}/api/Schedules/UpdateData`,
    adaptor: new UrlAdaptor(),
    crossDomain: true,
    headers: [{ Authorization: `Bearer ${this.jwtService.getJwtToken()}` }] 
  });

  
  public eventSettings: EventSettingsModel = {
      dataSource: this.eventData
  };
}
