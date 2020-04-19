import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { MedicalPage } from '../medical/medical'

/**
 * Generated class for the SymptomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html',
})
export class SymptomsPage {

  // symptoms = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SymptomsPage');
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      // title: 'Prompt!',
      message: '** If you are experiencing any of the following emergency symptoms associated with COVID-19, please get medical attention immediately **',
      inputs: [
        {
          name: 'trouble breathing',
          label: '* Trouble Breathing',
          type: 'checkbox',
          value: 'trouble breathing'
        },
        {
          name: 'chest pain',
          label: '* Persistent chest pain or pressure',
          type: 'checkbox',
          value: 'chest pain'
        },
        {
          name: 'confusion',
          label: '* New confusion or inability to arouse (“wake up”)',
          type: 'checkbox',
          value: 'confusion'
        },
        {
          name: 'blue lips',
          label: '* Blue-ish lips or face',
          type: 'checkbox',
          value: 'blue lips'
        },
        {
          name: 'fever',
          label: 'Fever',
          type: 'checkbox',
          value: 'fever'
        },
        {
          name: 'cough',
          label: 'Cough',
          type: 'checkbox',
          value: 'cough'
        },
        {
          name: 'shortness of breath',
          label: 'Shortness of breath',
          type: 'checkbox',
          value: 'shortness of breath'
        },
        {
          name: 'headache',
          label: 'Headache',
          type: 'checkbox',
          value: 'headache'
        },
        {
          name: 'fatigue',
          label: 'Fatigue',
          type: 'checkbox',
          value: 'fatigue'
        },
        {
          name: 'diarrhea',
          label: 'Diarrhea',
          type: 'checkbox',
          value: 'diarrhea'
        },
        {
          name: 'nausea',
          label: 'Nausea',
          type: 'checkbox',
          value: 'nausea'
        },
        {
          name: 'loss of taste/smell',
          label: 'Loss of taste/smell',
          type: 'checkbox',
          value: 'loss of taste/smell'
        }
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            // this.symptoms = data;
            console.log(data);
            var temp = this.navParams.get('user_temp');
            this.navCtrl.push(MedicalPage, {user_temp: temp, symptoms: data});
          }
        },
        {
          text: 'Back',
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    await alert.present();
  }


}
