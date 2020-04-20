import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TrackingPage } from '../tracking/tracking'
import { QUESTIONS } from '../../assets/json/jsonEnglish'


/**
 * Generated class for the MedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
})
export class MedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad MedicalPage');
    if(this.navParams.get('symptoms').length != 0){
      this.contactAlertPrompt();
    } else{
      this.testingQuestion();
    }
  }

  async contactAlertPrompt() {
    const alert = await this.alertCtrl.create({
      // title: 'Prompt!',
      message: QUESTIONS[2]["questions"][0]["question"],
      inputs: [
        {
          name: 'yes',
          label: QUESTIONS[2]["questions"][0]["answers"][0],
          type: 'radio',
          value: 'phone'
        },
        {
          name: 'yes',
          label: QUESTIONS[2]["questions"][0]["answers"][1],
          type: 'radio',
          value: 'in person'
        },
        {
          name: 'no',
          label: QUESTIONS[2]["questions"][0]["answers"][2],
          type: 'radio',
          value: 'no'
        }
      ],
      buttons: [
        {
          text: QUESTIONS[2]["questions"][0]["answers"][3],
          handler: data => {
            this.testingQuestion();
          }
        },
        {
          text: QUESTIONS[2]["questions"][0]["answers"][4],
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    await alert.present();
  }

  async testingQuestion() {
    const alert = await this.alertCtrl.create({
      // title: 'Prompt!',
      message: QUESTIONS[2]["questions"][1]["question"],
      inputs: [
        {
          name: 'yes',
          label: QUESTIONS[2]["questions"][1]["answers"][0],
          type: 'radio',
          value: 'yes'
        },
        {
          name: 'no',
          label: QUESTIONS[2]["questions"][1]["answers"][1],
          type: 'radio',
          value: 'no'
        },
        {
          name: 'waiting',
          label: QUESTIONS[2]["questions"][1]["answers"][2],
          type: 'radio',
          value: 'waiting'
        }
      ],
      buttons: [
        {
          text: QUESTIONS[2]["questions"][1]["answers"][3],
          handler: data => {
            this.familyQuestion();
          }
        },
        {
          text: QUESTIONS[2]["questions"][1]["answers"][4],
          handler: data => {
            if(this.navParams.get('symptoms').length != 0){
              this.contactAlertPrompt();
            } else{
              this.navCtrl.pop();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async familyQuestion() {
    const alert = await this.alertCtrl.create({
      // title: 'Prompt!',
      message: QUESTIONS[2]["questions"][2]["question"],
      inputs: [
        {
          name: 'yes',
          label: QUESTIONS[2]["questions"][2]["answers"][0],
          type: 'radio',
          value: 'no'
        },
        {
          name: 'no',
          label: QUESTIONS[2]["questions"][2]["answers"][1],
          type: 'radio',
          value: 'no'
        },
      ],
      buttons: [
        {
          text: QUESTIONS[2]["questions"][2]["answers"][2],
          handler: data => {
            // TODO pull up final info
            //Ask for Zip Code
            this.nav2Tracking();
          }
        },
        {
          text: QUESTIONS[2]["questions"][2]["answers"][3],
          handler: data => {
            this.testingQuestion();
          }
        }
      ]
    });
    await alert.present();
  }
  // Navigate to the Tracking Page
  nav2Tracking(){
    this.navCtrl.push(TrackingPage);
  }

}
