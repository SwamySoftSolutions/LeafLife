import { Component, OnInit } from '@angular/core';

import { InstituteService } from '../../service/institute.service';

@Component({
  selector: 'institute-footer',
  templateUrl: './view-footer.component.html',
  styleUrls: ['./view-footer.component.css']
})
export class InstituteViewFooterComponent implements OnInit {

  constructor(
    public instiServObj: InstituteService 
  ) { }

  ngOnInit() {
  }

}
