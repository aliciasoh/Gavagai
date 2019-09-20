import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LexiconService {

  constructor(
    private http: HttpClient,
    ) { }

  getLexicon(lang, word){
    return this.http.get(environment.baseURL + "/lexicon/" + lang + "/" + word, {
      params: {
        apiKey: environment.apiKey,
        language: lang,
        word: word,
        additionalFields: "SEMANTICALLY_SIMILAR_WORDS"
      }
    })
  }
}
