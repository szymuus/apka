import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LessonsService } from '../../services/lessons.service';
import {NavController} from 'ionic-angular';
import { getLocaleTimeFormat } from '@angular/common';



@IonicPage()
@Component({
  selector: 'page-new-lesson',
  templateUrl: 'new-lesson.html',
})
export class NewLessonPage {

  constructor(private lessonsService: LessonsService, private navCtrl: NavController) {
  }

  onAddLesson(value:{przedmiot: string,sala: string,lekcjaStart: string,lekcjaKoniec: string}){
    this.lessonsService.addLesson(value);
    this.navCtrl.pop();

  }
  

}
