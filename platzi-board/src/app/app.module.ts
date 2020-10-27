import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { BoardModule } from "./board/board.module";
import { HomeModule } from "./home/home.module";
import { NotFoundModule} from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    BoardModule,
    HomeModule,
    HttpClientModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
