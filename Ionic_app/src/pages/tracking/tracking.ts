import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SymptomsPage } from '../symptoms/symptoms'
import { MedicalPage } from '../medical/medical'


/**
 * Generated class for the TemperaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-tracking',
   templateUrl: 'tracking.html',
 })
 export class TrackingPage {

   // symptoms = [];

   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
   }

   ionViewWillEnter() {
     console.log('ionViewDidLoad TrackingPage');
     this.presentAlertPrompt();
   }

   async presentAlertPrompt() {
     const alert = await this.alertCtrl.create({
       // title: 'Prompt!',
       message: 'What is your Zip Code?',
       inputs: [
         {
           name: 'zipcode',
           type: 'text',
         }
       ],
       buttons: [
         {
           text: 'Back',
           handler: data => {
             this.navCtrl.pop();
           }
         },
         {
           text: 'Continue',
           handler: data => {
             //submit the data
             this.addPhoneNumber();
             // this.symptoms = data;
             // console.log(data);
             // var temp = this.navParams.get('user_temp');
             // this.navCtrl.push(MedicalPage, {user_temp: temp, symptoms: data});
           }
         }
       ]
     });
     await alert.present();
   }
   async addPhoneNumber(){
     const alert = await this.alertCtrl.create({
       //Ask for phone number
       message: 'What is your phone number?',
       inputs:[
         {
           name:'phonenumber',
           type: 'text',
         }
       ],
       buttons: [
         {
           text: 'Submit',
           handler: data => {
             // TODO: Finished with the form
           }
         }
       ]
     });
     await alert.present();
   }

 }
