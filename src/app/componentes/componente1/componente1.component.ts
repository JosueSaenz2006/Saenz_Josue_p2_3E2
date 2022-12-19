import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit {
  
  constructor(private router: Router){}
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



  register()
  {
    this.router.navigate(['web2'])
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('correo', this.correo);
    localStorage.setItem('contrasena', this.contrasena);
    localStorage.setItem('confirmarc', this.confirmarc);
    localStorage.setItem('numero', this.numero);
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
