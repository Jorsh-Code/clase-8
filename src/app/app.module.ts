import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { AuthInterceptor } from './lib/interceptors/auth.interceptor';
import { TwoComponent } from './components/two/two.component';
import { ValidatorInterceptor } from './lib/interceptors/validator.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass: ValidatorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
