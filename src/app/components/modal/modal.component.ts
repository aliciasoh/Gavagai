import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
  ) { }

  ngOnInit() {
  }

  openModal(data){
    const obj: Object = {
      word: data.wordInformation.word,
      vocabularySize: data.wordInformation.vocabularySize,
      frequency: data.wordInformation.frequency,
      relativeRank: data.wordInformation.relativeRank,
      additionalInformation: data.wordInformation.additionalInformation,
    };

    this.ngxSmartModalService.setModalData(obj, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }

}
