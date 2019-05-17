import { Component, OnInit } from '@angular/core';
import { ClipartApiService } from '../services/clipart-api.service';

@Component({
  selector: 'app-cliparts-list',
  templateUrl: './cliparts-list.component.html',
  styleUrls: ['./cliparts-list.component.css'],
  providers: [ClipartApiService]
})
export class ClipartsListComponent implements OnInit {

  clipartPossibilities: IOpenClipArt[];
  clipartData: IOpenClipArt;
  imageHeight: number = 170;

  constructor(private clipartApiService: ClipartApiService) { 
    this.clipartPossibilities = new Array();
  }

  getCliparts(clipartSearchTerm: string){
    this.clipartApiService.getClipartData(clipartSearchTerm).subscribe(
      clipartData => {this.clipartData = clipartData});
    return false;
  }

  addToPossibilities(){
    this.clipartPossibilities.push(this.clipartData);
  }

  cancel(){
    this.clipartData = null;
  }

  removeFromPossibilities(event){
    for(var i = 0; i < this.clipartPossibilities.length; i++){
      if(event = this.clipartPossibilities[i]){
        this.clipartPossibilities.splice(i, 1);
        break; // in case there are duplicate values
      }
  }
  }

  ngOnInit() {
  }

}
