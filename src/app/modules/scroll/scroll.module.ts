import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ScrollModule {

  i:number=1;
  
  avanzar(max:number){
    if(this.i<max){
      this.i++
      }else{
      this.i=1
    }
    return this.i;
  }
  retroceder(max:number){
    if(this.i>1){
      this.i--
    }else{
      this.i=max;
    }
    return this.i;
  }
 }
