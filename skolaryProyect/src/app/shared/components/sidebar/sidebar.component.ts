import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nombre = sessionStorage.getItem("AuthUserName");

  constructor() {
    this.nombre;
   }

  ngOnInit(): void {
  }

}
