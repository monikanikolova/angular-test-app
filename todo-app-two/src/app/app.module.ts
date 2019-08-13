import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('app-two-root', el);
  }
 }
