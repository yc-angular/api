import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from './service';

export * from './service';

export function ApiFactory(root: string) {
  return new Api(root);
}

export const ROOT = "http://localhost:9000";

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ApiModule {
  static forRoot(root: string = ROOT): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        { provide: ROOT, useValue: root },
        { provide: Api, useFactory: ApiFactory, deps: [ROOT] }
      ]
    };
  }
}
