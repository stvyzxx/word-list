import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../shared/services/api.service';
import { List } from '../models/list/list';

@Component({
  selector: 'WlLearning',
  moduleId: module.id,
  templateUrl: './learning.component.html'
})
export class WlLearningComponent implements OnInit {
  list: List;
  listId: number;
  busyState: boolean;
  pair: any;
  pairsAmount: number;
  currentNumber: number;
  answer: string;
  successfulAnswer: boolean;
  isChecked: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.currentNumber = 1;
    this.isChecked = false;
    this.setList();
  }

  get wordsEquality(): boolean {
    return this.answer.trim().toLowerCase() === this.pair.translation.toLowerCase();
  }

  get successfulAnswers(): any[] {
    return this.list.words.filter(pair => pair.success);
  }

  get listEnded(): boolean {
    return (this.currentNumber - 1) >= this.list.words.length;
  }

  setList(): void {

    this.route.params
      .forEach(params => { this.listId = params.id; });

    this.busyState = true;
    this.apiService.getUserData({
      path: '/lists/' + this.listId
    }).then(response => {
      this.list = response.value;

      this.pair = this.list.words[0];
      this.pairsAmount = this.list.words.length;

      this.busyState = false;
    }).catch(e => {
      this.busyState = false;
      console.log(e);
    });
  }

  checkWord(): void {
    if (!this.answer || this.listEnded || this.isChecked) return;

    this.successfulAnswer = this.pair.success = this.wordsEquality;

    this.isChecked = true;
  }

  nextWord(): void {
    if (!this.isChecked) return;

    this.answer = '';
    if (this.currentNumber <= this.list.words.length - 1) {
      this.pair = this.list.words[this.currentNumber];
    }
    
    this.currentNumber += 1;
    this.isChecked = false;
  }

  learnAgain(): void {
    this.currentNumber = 1;
    this.list.words.forEach(pair => pair.success = false);
    this.pair = this.list.words[0];
  }
}
