import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewLessonPage } from '../new-lesson/new-lesson';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lessons: {przedmiot: string, sala: string,lekcjaStart: string,lekcjaKoniec: string}[] =[];

  constructor(public navCtrl: NavController, public lessonsServices: LessonsService) {

    }
    //pokazuje lekcje
    ionViewWillEnter(){
      
      this.lessons = this.lessonsServices.getLessons();
      
    }
  //przenosi do strony gdzie dodaje sie lekcje
  onLoadNewLesson(){
    this.navCtrl.push(NewLessonPage);
  }

}
