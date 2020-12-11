import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { character, episode } from '../app.interface';
import { Location } from "@angular/common";
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnChanges {

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

  selectEpisode(i){
    this.selectedEpisode = i
  }

  return(e){
    if(e){
      this.selectedEpisode = null
    }
  }

}
