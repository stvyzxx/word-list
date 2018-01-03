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
  busyState: boolean;
  pair: any;
  pairsAmount: number;
  currentNumber: number;
  answer: string;
  successfulAnswer: boolean;
  checkShown: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.setList();
  }

  get wordsEquality(): boolean {
    return this.answer.trim().toLowerCase() === this.pair.translation;
  }

  setList(): any {
    let id;

    this.route.params
      .forEach(params => { id = params.id; });

    this.busyState = true;
    this.apiService.getUserData({
      path: '/lists/' + id
    }).then(response => {
      this.list = response.value;

      this.pair = this.list.words[0];
      this.pairsAmount = this.list.words.length;
      this.currentNumber = this.list.words.indexOf(this.pair) + 1;

      this.busyState = false;
    }).catch(e => {
      this.busyState = false;
      console.log(e);
    });
  }

  checkWord(): void {
    if (!this.answer) return;

    if (this.currentNumber - 1 === this.list.words.length) {
      return;
    }
    if (this.wordsEquality) {
      this.successfulAnswer = this.pair.success = true;
    } else {
      this.successfulAnswer = this.pair.success = false;
    }
    
    this.checkShown = true;
    this.answer = '';
    this.pair = this.list.words[this.currentNumber];
    this.currentNumber = this.list.words.indexOf(this.pair) + 1;

    setTimeout(() => {
      this.checkShown = false;
    }, 2000);
  }
}
