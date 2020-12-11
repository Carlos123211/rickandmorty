import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { episode } from '../app.interface';
import { AppService} from './../app.service';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnChanges {


  @Input() episode : number;
  episodeData: episode;
  @Output() backScreen = new EventEmitter<boolean>();
  constructor(private api:AppService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges): void{
    if(changes){
      this.api.getEpisode(changes.episode.currentValue).subscribe((data:episode)=>{
        if(data){
          this.episodeData = data
        }
      })
    }
  }


  back(){
    this.backScreen.emit(true);
  }

}
