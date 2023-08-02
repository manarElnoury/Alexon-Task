import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintTypeComponent } from './Components/complaint-type/complaint-type.component';
import {DashBoardComponent  } from './Components/dash-board/dash-board.component';


const routes: Routes = [
  {path: '', component: ComplaintTypeComponent},
  {path: 'dashboard', component: DashBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
