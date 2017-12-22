export class List {
  public name: string;
  public id: string;
  public words: any[];

  constructor(options = {}) {
    Object.assign(this, {
      name : null,
      id : null,
      words : [],
    }, options);
  }
}
