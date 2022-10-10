import { Component, OnInit } from '@angular/core';
import { ScrollModule } from 'src/app/modules/scroll/scroll.module';

@Component({
  selector: 'app-imanes',
  templateUrl: './imanes.component.html',
  styleUrls: ['./imanes.component.css']
})
export class ImanesComponent implements OnInit {

  
  constructor(private scroll:ScrollModule) { }

  baseUrl:string="../../../assets/imanes/imanes_(";
  i=1;
  max:number=3;
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
