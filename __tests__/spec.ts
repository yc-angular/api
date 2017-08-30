import { inject, TestBed } from '@angular/core/testing';

import { ApiModule, Api, ROOT } from '../src/';

describe('default', () => {
  let api: Api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiModule.forRoot()
      ]
    });
  });
  
  beforeEach(inject([Api], _api => {
    api = _api;
  }));

  it('Should be initialised', () => {
    expect(api).toBeDefined();
    expect(api.root).toBe(ROOT);
  });
});

describe('custom', () => {
  let api: Api;
  const host = 'http://localhost';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiModule.forRoot(host)
      ]
    });
  });
  
  beforeEach(inject([Api], _api => {
    api = _api;
  }));

  it('Should be initialised', () => {
    expect(api).toBeDefined();
    expect(api.root).toBe(host);
  });
});
