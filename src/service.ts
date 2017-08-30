import { Injectable, Inject } from '@angular/core';
import { ROOT } from './index';

@Injectable()
export class Api {
  public readonly root: string;
  constructor(@Inject(ROOT) root: string) {
    this.root = root;
  }
}
