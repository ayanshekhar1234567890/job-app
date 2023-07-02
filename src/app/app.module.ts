import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router, RouterModule, Routes } from '@angular/router'; // added router

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
import * as Sentry from "@sentry/angular-ivy";
import { BasicComponent } from './basic/basic.component';
import { EverythingComponent } from './everything/everything.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'localjobs', component: LocalJobsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'everything', component: EverythingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HomeComponent,
    NavbarComponent,
    LocalJobsComponent,
    SignupComponent,
    BasicComponent,
    EverythingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // added router
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => { },
      deps: [Sentry.TraceService],
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
