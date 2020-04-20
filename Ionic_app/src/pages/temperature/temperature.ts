import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SymptomsPage } from '../symptoms/symptoms'
import { QUESTIONS } from '../../assets/json/jsonEnglish'


/**
 * Generated class for the TemperaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html',
})
export class TemperaturePage {

  user_temp = 0;

  constructor(public alertController: AlertController, public navCtrl: NavController, public navParams: NavParams) {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      // title: 'Prompt!',
      message: QUESTIONS[0]["questions"][0]["question"],
      inputs: [
        {
          name: 'Temperature',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: QUESTIONS[0]["questions"][0]["answers"][0],
          handler: data => {
            var temp = +data.Temperature // convert to int
            this.user_temp = temp;
            if (temp > 100.4){
              console.log('nav to symptoms')
              this.nav2Symptoms();
            }
            else{
              console.log('nav somewhere else')
              this.presentFeelingsForm();
            }
          }
        },
        {
          text: QUESTIONS[0]["questions"][0]["answers"][1],
          handler: () => {
            console.log('Confirm no temp');
            this.presentFeelingsForm();
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillEnter() {
    this.presentAlertPrompt();
    console.log('ionViewDidLoad TemperaturePage');
  }

  async presentFeelingsForm(){
    const alert = await this.alertController.create({
      message: QUESTIONS[0]["questions"][1]["question"],
      inputs: [
        {
          name: 'fine',
          type: 'radio',
          label: QUESTIONS[0]["questions"][1]["answers"][0],
          value: 'fine',
        },
        {
          name: 'not well',
          type: 'radio',
          label: QUESTIONS[0]["questions"][1]["answers"][1],
          value: 'not well',
        },
      ],
      buttons: [
        {
          text: QUESTIONS[0]["questions"][1]["answers"][2],
          handler: data => {
            if(data == 'fine'){
              // push to final resources page
            } else{
              this.nav2Symptoms();
            }
          }
        },
        {
          text: QUESTIONS[0]["questions"][1]["answers"][3],
          handler: data => {
            this.presentAlertPrompt()
          }
        }
      ],
    });
    await alert.present();
  }

  nav2Symptoms(){
    this.navCtrl.push(SymptomsPage, {user_temp: this.user_temp});
  }

}
