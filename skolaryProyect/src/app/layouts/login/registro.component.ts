import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        // this.toastr.success('Cuenta Creada', 'OK', {
        //   timeOut: 3000, positionClass: 'toast-top-center'
        // });

        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        // this.toastr.error(this.errMsj, 'Fail', {
        //   timeOut: 3000,  positionClass: 'toast-top-center',
        // });
        // console.log(err.error.message);
      }
    );
  }

}
