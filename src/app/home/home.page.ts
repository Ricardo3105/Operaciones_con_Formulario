import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1:any;
  numero2:any;
  suma:number;

  constructor() {}




  sumarNumero() {
    var N1=parseInt(this.numero1);
    var N2=parseInt(this.numero2);

    this.suma=N1+N2;

    this.numero1="";
    this.numero2="";


  }

}
