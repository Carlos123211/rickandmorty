import { Component, OnInit  } from '@angular/core';
import {AppService} from './app.service';
import { character,results } from './app.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rickandmorty';
  characters:character[];
  constructor(private service:AppService){

  }

  getCharacters(){
    this.service.getCaracters(1).subscribe((data:results)=>{
      this.characters = data.results;
      console.log(this.characters)
    })
  }

  ngOnInit(){
      this.getCharacters();
  }


}
