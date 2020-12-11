import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { character } from '../app.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnChanges {

  @Input() character:character;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    console.log(this.character)
  }

  ngOnInit(): void {
    console.log(this.character)
  }

}
