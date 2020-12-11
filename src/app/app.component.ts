import { Component, OnInit  } from '@angular/core';
import {AppService} from './app.service';
import { character,results,info } from './app.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Página principal.
   */
  title = 'rickandmorty';
  characters:character[];
  page = 1;
  info:info;
  characterSelected:character;
  constructor(private service:AppService){

  }

  /**Método para selccionar un personaje */
  selectCharacter(e){
    this.characterSelected = e
  }
  /**Método para cambiar de página (realiza una nueva llamada) */
  changeCharacters(e){
    console.log(e)
    this.page = e
    this.getCharacters();

  }
  /**Método para obtener la lista de personajes */
  getCharacters(){
    this.service.getCaracters(this.page).subscribe((data:results)=>{
      this.characters = data.results;
      this.info = data.info
    })
  }

  ngOnInit(){
      this.getCharacters();
  }
  /**Método que recibe el cambio al momento de retroceder de página.*/
  return(e){
    let character:character
    if(e){
      this.characterSelected = character
    }
  }


}
