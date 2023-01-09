import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router: Router) { }
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  f: any;
  g: any;
  nombre:any;
  
  ngOnInit():void{
    this.nombre;
    this.a="1,400";
    this.b="1,700";
    this.c="170";
    this.d="1,200";
    this.e="980";
    this.f="980";
    this.g="2,000";
    //localStorage.clear()
    
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

  recuperar()
  {
    this.nombre = localStorage.getItem('nombre');
  
  }

  Comprar()
  {
    this.router.navigate(['web3'])
    localStorage.setItem('a', this.a);
    localStorage.setItem('b', this.b);
    localStorage.setItem('c', this.c);
    localStorage.setItem('d', this.d);
    localStorage.setItem('e', this.e);
    localStorage.setItem('f', this.f);
    localStorage.setItem('g', this.g);
  }

}
