import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { character, episode } from '../app.interface';
import { AppService} from './../app.service';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnChanges {


  @Input() episode : number;
  episodeData: episode;
  characters:character[] = []
  @Output() backScreen = new EventEmitter<boolean>();
  constructor(private api:AppService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges): void{
    if(changes){
      this.api.getEpisode(changes.episode.currentValue).subscribe((data:episode)=>{
        if(data){
          this.episodeData = data
          this.loadCharacter(this.episodeData.characters)
        }
      })
    }
  }


  loadCharacter(characters){
    if(characters.length > 0){
      characters.forEach((id)=>{
        console.log(id)
        this.api.getCharacter(id).then((data:character)=>{
          if(data){
            this.characters.push(data)
          }
        })
      })
    }
  }



  back(){
    this.characters = []
    this.backScreen.emit(true);
  }

}
