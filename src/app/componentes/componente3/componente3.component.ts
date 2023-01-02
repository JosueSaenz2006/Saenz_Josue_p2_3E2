import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router: Router) { }
  nombre: any;
  correo: any;
  contrasena: any;
  numero: any;
  confirmarc:any;

  ngOnInit():void{
    this.contrasena;
    this.correo;
    this.nombre;
    this.numero;
    this.confirmarc;
    //localStorage.clear()
    
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

  Comprar()
  {
    this.router.navigate(['web3'])
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('correo', this.correo);
    localStorage.setItem('contrasena', this.contrasena);
    localStorage.setItem('confirmarc', this.confirmarc);
    localStorage.setItem('numero', this.numero);
  }

  
}
