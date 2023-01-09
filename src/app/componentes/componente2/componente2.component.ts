import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router: Router) { }

  celular: any;
  computadora: any;
  audifonos: any;
  d:any;
  e: any;
  f: any;
  g: any;
  nombre: any;
  correo: any;
  contrasena: any;
  numero: any;
  confirmarc:any;
 
  ngOnInit():void{
    this.rcomprar()
    this.recuperar()
    this.recuperar()
  }

  rcomprar()
  {
    this.celular = localStorage.getItem('a');
    this.computadora = localStorage.getItem('b');
    this.audifonos = localStorage.getItem('c');
    this.d = localStorage.getItem('d');
    this.e = localStorage.getItem('e');
    this.f = localStorage.getItem('f');
    this.g = localStorage.getItem('g');    
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
    this.router.navigate(['tienda'])
  }
  navegacion3(){
    this.router.navigate(['web4'])
  }
  navegacion4(){
    this.router.navigate(['web5'])
  }
  navegacion5(){
    this.router.navigate(['web6'])
  }
}
