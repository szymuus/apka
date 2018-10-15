import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { NewLessonPage } from '../new-lesson/new-lesson';
import { LessonsService } from '../../services/lessons.service';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lessons: {przedmiot: string, sala: string,lekcjaStart: string,lekcjaKoniec: string}[] =[];

  constructor(public navCtrl: NavController, public lessonsServices: LessonsService,private alertCtrl: AlertController,public localNotification: PhonegapLocalNotification) {
     
    }
    //pokazuje lekcje
    ionViewWillEnter(){
      
      this.lessons = this.lessonsServices.getLessons();
      
    }
  //przenosi do strony gdzie dodaje sie lekcje
  onLoadNewLesson(){
    this.navCtrl.push(NewLessonPage);
  }
  //pokazanie pierwszego alertu przycisk cos
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: this.lessons.map(n=>n.przedmiot).join(''),
      message:'Klasa: ' + this.lessons.map(n=>n.sala).join(''),
      buttons: ['Dismiss']
    });
    alert.present();
  }
    
  
      
    }
  
 


