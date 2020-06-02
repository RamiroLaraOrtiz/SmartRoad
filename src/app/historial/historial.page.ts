import { Component, OnInit } from '@angular/core';
import data from '../../assets/icon/warnings.json'
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  private insfracciones = data;
  tableStyle = 'boostrap';
  constructor() { 
    console.log(this.insfracciones);
  }

  async open(row){
    console.log(row);
  }

  ngOnInit() {
  }

}
