import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retratos',
  templateUrl: './retratos.component.html',
  styleUrls: ['./retratos.component.css']
})
export class RetratosComponent implements OnInit {

   baseUrl:string="../../../assets/retratos/retrato_(";
   endUrl:string=").jpg";
   i:number=1;
  constructor() { 
    
  }
  
  ngOnInit(): void {   
    
  }

  avanzar() {
    if(this.i<7){
      this.i++
    }else{
      this.i=1
    }
  }
  retroceder(){
    if(this.i>1){
      this.i--
    }else{
      this.i=7;
    }
  }

}
