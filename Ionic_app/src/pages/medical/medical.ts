import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TrackingPage } from '../tracking/tracking'

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
      message: 'Have you contacted a medical provider about your symptoms today?',
      inputs: [
        {
          name: 'yes',
          label: 'Yes, by phone.',
          type: 'radio',
          value: 'phone'
        },
        {
          name: 'yes',
          label: 'Yes, in person.',
          type: 'radio',
          value: 'in person'
        },
        {
          name: 'no',
          label: 'No',
          type: 'radio',
          value: 'no'
        }
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            this.testingQuestion();
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

  async testingQuestion() {
    const alert = await this.alertCtrl.create({
      // title: 'Prompt!',
      message: 'Have you had a positive COVID-19 test result since your last report?',
      inputs: [
        {
          name: 'yes',
          label: 'Yes',
          type: 'radio',
          value: 'yes'
        },
        {
          name: 'no',
          label: 'No',
          type: 'radio',
          value: 'no'
        },
        {
          name: 'waiting',
          label: 'I had a test but I have not gotten the results yet.',
          type: 'radio',
          value: 'waiting'
        }
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            this.familyQuestion();
          }
        },
        {
          text: 'Back',
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
      message: 'Is anyone in your household sick today?',
      inputs: [
        {
          name: 'yes',
          label: 'Yes',
          type: 'radio',
          value: 'no'
        },
        {
          name: 'no',
          label: 'No',
          type: 'radio',
          value: 'no'
        },
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            // TODO pull up final info
            //Ask for Zip Code
            this.nav2Tracking();
          }
        },
        {
          text: 'Back',
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
