import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {
  
  objectToArray(obj) {
    return Object.entries(obj)
    .map(entry => Object.assign({value: entry[1]}, { key: entry[0] })); 
  }
}