import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './../shared/shared.module';
import { MaterialCdkModule } from './../material-cdk/material-cdk.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialCdkModule
  ]
})
export class HomeModule { }
