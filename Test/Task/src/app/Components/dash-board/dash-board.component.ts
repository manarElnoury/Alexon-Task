import { Component } from '@angular/core';

import { IcomplaintInfo } from 'src/app/models/icomplaintinfo';
import { ComplaintInformationList } from 'src/app/models/complaintsInfoList';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  complaints:IcomplaintInfo[]=ComplaintInformationList

  
}
