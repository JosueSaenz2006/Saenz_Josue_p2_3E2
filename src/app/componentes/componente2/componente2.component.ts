import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router: Router) { }

  nombre: any;
  correo: any;
  contrasena: any;
  numero: any;
  confirmarc:any;
 
  ngOnInit():void{
    this.recuperar()
  }

  recuperar()
  {
    this.nombre = localStorage.getItem('nombre');
    this.correo = localStorage.getItem('correo');
    this.contrasena = localStorage.getItem('contrasena');
    this.confirmarc = localStorage.getItem('confirmarc');
    this.numero = localStorage.getItem('numero');
  }
  navegacion(){
    this.router.navigate([''])
  }
  navegacion1(){
    this.router.navigate(['web2'])
  }
  navegacion2(){
    this.router.navigate(['web3'])
  }
}
