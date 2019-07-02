import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  public termo: string = ''

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  limpar = () => {
    this.termo = ''
   
    this.sendToPersonagens(this.termo)
  }

  buscar() {
    this.sendToPersonagens(this.termo)
  }

  sendToPersonagens(termo) {
    this.messageEvent.emit(termo);

  }

}
