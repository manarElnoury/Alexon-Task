import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { ComplaintList } from 'src/app/models/complaintsList';
import { Icomplaint } from 'src/app/models/icomplaint';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint-type',
  templateUrl: './complaint-type.component.html',
  styleUrls: ['./complaint-type.component.css']
})
export class ComplaintTypeComponent  {
  
  constructor(private router: Router) {
    console.log(this.selectedComplaint)
  }
  fabell = faBell;
 
  selectedComplaint = '';
  complaints: Icomplaint[] = ComplaintList
  confirm() {
  console.log(this.selectedComplaint)
    this.router.navigate(['/dashboard'])
  }

 
}
