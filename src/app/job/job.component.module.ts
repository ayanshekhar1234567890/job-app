import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobComponent } from './job.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule, BrowserModule, HttpClientModule],
})
export class JobModule { }