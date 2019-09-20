import { Component, OnInit } from '@angular/core';
import { LexiconService } from 'src/app/services/lexicon.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ModalComponent]
})
export class SearchComponent implements OnInit {

  searchForm;
  isNight;
  response;

  constructor(
    private lexiconService: LexiconService,
    private formBuilder: FormBuilder,
    public modalComponent: ModalComponent,
    private loadingService: LoadingService
    ) {
      this.isNight = (new Date()).getHours() >= 6 && (new Date()).getHours() <= 17 ? false : true;
   }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      word: ['', Validators.compose([Validators.required])],
      lang: ['en', Validators.compose([Validators.required])]
    });
  }

  getListOfWords(){
    if(this.searchForm.valid){
      this.loadingService.showLoading();
      this.lexiconService.getLexicon(this.searchForm.value.lang, this.searchForm.value.word).toPromise().then(response =>{
        this.response = response;
        this.loadingService.hideLoading();
      }).catch(error =>{
        this.loadingService.hideLoading();
        alert("Error, please try a different word or language");
      })
    }
    else{
      alert("Please make sure the search input box is not empty and a language is selected!");
    }
  }

  viewMore(wordObj){
    this.loadingService.showLoading();
    this.lexiconService.getLexicon(this.searchForm.value.lang, wordObj.word).toPromise().then(response =>{
      this.modalComponent.openModal(response);
      this.loadingService.hideLoading();
    }).catch(error =>{
      this.loadingService.hideLoading();
      alert("Error, please try a different word or language");
    })
  }

}
