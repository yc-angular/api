import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from './service';

export * from './service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ApiModule {
  static forRoot(root: string): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        { provide: Api, useValue: new Api(root) }
      ]
    };
  }
}
