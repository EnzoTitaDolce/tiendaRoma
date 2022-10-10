import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("listaMenu")!.style.display='none'
  }

  showHide(){
    if(document.getElementById('listaMenu')!.style.display=='none'){
      document.getElementById('listaMenu')!.style.display='block';
    }else{
      document.getElementById('listaMenu')!.style.display='none';
    }
    
  }

}
