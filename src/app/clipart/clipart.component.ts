import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClipartApiService } from '../services/clipart-api.service';

@Component({
  selector: 'app-clipart',
  templateUrl: './clipart.component.html',
  styleUrls: ['./clipart.component.css'],
  providers: [ClipartApiService]
})
export class ClipartComponent implements OnInit {

  @Input() clipartsData: IOpenClipArt;
  @Output() removeClipart: EventEmitter<any> = new EventEmitter();

  constructor(private clipartApiService: ClipartApiService) { }

  removeFromPossibilities(){
    this.removeClipart.emit(this.clipartsData);
    // stops page reload
    return false;
  }

  saveToCloud(clip:IOpenClipArt){
    this.clipartApiService.saveToCloud(clip);
  }

  ngOnInit() {
  }

}
