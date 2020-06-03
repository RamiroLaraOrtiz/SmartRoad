import { Component, OnInit } from '@angular/core';
import data from '../../assets/icon/warnings.json';
import { AlertController } from "@ionic/angular";
import { groupRowsByParents } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  private insfracciones = data;
  tableStyle = 'boostrap';
  constructor(private AlertController: AlertController) { 
    console.log(this.insfracciones);
  }

  async open(fecha, speedlimit, yourspeedlimit, coordinates, lugar){
    const alertElement =await this.AlertController.create({
      header:'Fecha: '+fecha,
      message: 'Lugar: '+lugar+'<br><br>'+'Limite de velocidad: '+speedlimit+'<br><br>'+'Velocidad a la que ibas: '+yourspeedlimit+'<br><br>'+'En las coordenadas: '+coordinates,
      buttons:[
        {
          text:'Ok!',
          role:'cancel'
        }
      ]
    })

    await alertElement.present();
  }

  async deletePlace(){
    

  }
  ngOnInit() {
  }

}
