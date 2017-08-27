[![Build Status](https://travis-ci.org/yc-angular/api.svg?branch=master)](https://travis-ci.org/yc-angular/api.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-angular/api/badge.svg?branch=master)](https://coveralls.io/github/yc-angular/api?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# @yca/api

## Installation

1. Install the Ionic plugin
```
 npm i -S @yca/api
```

2. Add it to your app’s NgModule.

```typescript
// Import your library
import { ApiModule } from '@yca/api';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    ApiModule.forRoot('http://localhost')
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its service in your Angular application:

```ts
import { Api } from '@yca/api';

constructor(public api: Api) {
  api.root // get the root url
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)

