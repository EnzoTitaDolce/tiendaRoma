import { Component, OnInit } from '@angular/core';
import { ScrollModule } from 'src/app/modules/scroll/scroll.module';

@Component({
  selector: 'app-llaveros',
  templateUrl: './llaveros.component.html',
  styleUrls: ['./llaveros.component.css']
})
export class LlaverosComponent implements OnInit {

  
  constructor(private scroll:ScrollModule) { }

  baseUrl:string="../../../assets/llaveros/llaveros_(";
  i=1;
  max:number=20;
  endUrl:string=').jpg'
  ngOnInit(): void {
  }
  avanzar(){
  this.i=(this.scroll.avanzar(this.max));
}
  retroceder(){
    this.i=(this.scroll.retroceder(this.max));
  }

}
