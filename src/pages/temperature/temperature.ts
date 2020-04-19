import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SymptomsPage } from '../symptoms/symptoms'

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
      message: 'What is your temperature today?',
      inputs: [
        {
          name: 'Temperature',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Submit',
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
          text: 'I didn\'t take my temperature today',
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
      message: 'How do you feel today?',
      inputs: [
        {
          name: 'fine',
          type: 'radio',
          label: 'Fine',
          value: 'fine',
        },
        {
          name: 'not well',
          type: 'radio',
          label: 'Not Well',
          value: 'not well',
        },
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            if(data == 'fine'){
              // push to final resources page
            } else{
              this.nav2Symptoms();
            }
          }
        },
        {
          text: 'Back',
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
