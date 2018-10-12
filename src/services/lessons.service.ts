import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUser() {
    return this.http.get('/api/user')
      .map((res: Response) => res.json().response);
  }
}

//zarzadzanie lekcjami
export class LessonsService{
    //ponizej to tablica z lekcjami i salami
    public lessons: { przedmiot: string,sala: string, lekcjaStart: string, lekcjaKoniec: string}[] = [];
    //ta funkcja dodaje do tablicy
    addLesson(lesson:{przedmiot: string, sala: string, lekcjaStart: string, lekcjaKoniec: string}){
        
        this.lessons.push(lesson);
        
    }
    //pokazuej lekcje
    getLessons(){
        
        //console.log(this.lessons.slice())
        return this.lessons.slice();
    }
    
}