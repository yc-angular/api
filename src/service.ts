import { Injectable } from '@angular/core';

@Injectable()
export class Api {
  public readonly root: string;
  constructor(root: string) {
    this.root = root;
  }
}
