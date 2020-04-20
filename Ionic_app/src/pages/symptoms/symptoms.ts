import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { MedicalPage } from '../medical/medical'
import { QUESTIONS } from '../../assets/json/jsonEnglish'


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
      message: QUESTIONS[1]["questions"][0]["question"],
      inputs: [
        {
          name: 'trouble breathing',
          label: QUESTIONS[1]["questions"][0]["answers"][0],
          type: 'checkbox',
          value: 'trouble breathing'
        },
        {
          name: 'chest pain',
          label:  QUESTIONS[1]["questions"][0]["answers"][1],
          type: 'checkbox',
          value: 'chest pain'
        },
        {
          name: 'confusion',
          label: QUESTIONS[1]["questions"][0]["answers"][2],
          type: 'checkbox',
          value: 'confusion'
        },
        {
          name: 'blue lips',
          label: QUESTIONS[1]["questions"][0]["answers"][3],
          type: 'checkbox',
          value: 'blue lips'
        },
        {
          name: 'fever',
          label: QUESTIONS[1]["questions"][0]["answers"][4],
          type: 'checkbox',
          value: 'fever'
        },
        {
          name: 'cough',
          label: QUESTIONS[1]["questions"][0]["answers"][5],
          type: 'checkbox',
          value: 'cough'
        },
        {
          name: 'shortness of breath',
          label: QUESTIONS[1]["questions"][0]["answers"][6],
          type: 'checkbox',
          value: 'shortness of breath'
        },
        {
          name: 'headache',
          label: QUESTIONS[1]["questions"][0]["answers"][7],
          type: 'checkbox',
          value: 'headache'
        },
        {
          name: 'fatigue',
          label: QUESTIONS[1]["questions"][0]["answers"][8],
          type: 'checkbox',
          value: 'fatigue'
        },
        {
          name: 'diarrhea',
          label: QUESTIONS[1]["questions"][0]["answers"][9],
          type: 'checkbox',
          value: 'diarrhea'
        },
        {
          name: 'nausea',
          label: QUESTIONS[1]["questions"][0]["answers"][10],
          type: 'checkbox',
          value: 'nausea'
        },
        {
          name: 'loss of taste/smell',
          label: QUESTIONS[1]["questions"][0]["answers"][11],
          type: 'checkbox',
          value: 'loss of taste/smell'
        }
      ],
      buttons: [
        {
          text: QUESTIONS[1]["questions"][0]["answers"][12],
          handler: data => {
            // this.symptoms = data;
            console.log(data);
            var temp = this.navParams.get('user_temp');
            this.navCtrl.push(MedicalPage, {user_temp: temp, symptoms: data});
          }
        },
        {
          text: QUESTIONS[1]["questions"][0]["answers"][13],
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    await alert.present();
  }


}
