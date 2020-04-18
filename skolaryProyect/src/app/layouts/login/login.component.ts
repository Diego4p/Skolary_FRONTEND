import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private r: Router) { }

  ngOnInit(): void {
  }
  
  /** funcion para abrir el dashboard con el boton */
  /**es bueno comentar xd */
  abrir()
  {
     this.r.navigate(['/default']);
  }
  btnClick() {
    this.r.navigateByUrl('/default');
};

}
