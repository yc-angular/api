import { inject, TestBed } from '@angular/core/testing';

import { ApiModule, Api } from '../src/';

describe('SampleComponent', () => {
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
