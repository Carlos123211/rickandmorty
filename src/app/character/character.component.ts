import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { character, episode } from '../app.interface';
import { Location } from "@angular/common";
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnChanges {
  /** 
   * Componente que muestra los personajes de rick y morty y sus espicificaciones.
  */
  @Input() character:character;
  @Output() backScreen = new EventEmitter<boolean>();
    selectedEpisode: number;
  constructor(
    private _location: Location,) { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    console.log(this.character)
  }

  ngOnInit(): void {
    console.log(this.character)
  }

  back(){
    this.backScreen.emit(true);
  }
  /**Método para seleccionar el episodio */
  selectEpisode(i){
    this.selectedEpisode = i
  }
  /**Método para retornar a la página anterior, esto es debido a que se emite un valor. */
  return(e){
    if(e){
      this.selectedEpisode = null
    }
  }

}
