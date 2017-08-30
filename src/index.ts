import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from './service';

export * from './service';

export function ApiFactory(root: string) {
  return new Api(root);
}

export const DEFAULT_ROOT = 'http://localhost:9000';
export const ROOT = new InjectionToken<string>(DEFAULT_ROOT);

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ApiModule {
  static forRoot(root: string = DEFAULT_ROOT): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        { provide: ROOT, useValue: root },
        { provide: Api, useFactory: ApiFactory, deps: [ROOT] }
      ]
    };
  }
}
