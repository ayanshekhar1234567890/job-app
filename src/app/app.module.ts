import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router'; // added router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocalJobsComponent } from './local-jobs/local-jobs.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SignupComponent
} from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'localjobs', component: LocalJobsComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HomeComponent,
    NavbarComponent,
    LocalJobsComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // added router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
