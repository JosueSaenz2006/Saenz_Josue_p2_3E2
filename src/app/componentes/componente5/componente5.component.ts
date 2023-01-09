import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {

  constructor(private router: Router){}
  nombre: any;
  contrasena: any;

 
  ngOnInit():void{
    this.contrasena;
    this.nombre;
    //localStorage.clear()
    
  }

  

  register()
  {
    this.router.navigate(['tienda'])
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('contrasena', this.contrasena);
   
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
