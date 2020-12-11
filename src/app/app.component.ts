import { Component, OnInit  } from '@angular/core';
import {AppService} from './app.service';
import { character,results,info } from './app.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rickandmorty';
  characters:character[];
  page = 1;
  info:info;
  characterSelected:character;
  constructor(private service:AppService){

  }

  selectCharacter(e){
    this.characterSelected = e
  }

  changeCharacters(e){
    console.log(e)
    this.page = e
    this.getCharacters();

  }

  getCharacters(){
    this.service.getCaracters(this.page).subscribe((data:results)=>{
      this.characters = data.results;
      this.info = data.info
    })
  }

  ngOnInit(){
      this.getCharacters();
  }


}
