import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { SeatingComponent } from './seating/seating.component';
import { AddSeatingComponent } from './add-seating/add-seating.component';
import { LiveScoresComponent } from './live-scores/live-scores.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ListTasksComponent,
    PopupComponent,
    HeaderComponent,
    VideosComponent,
    AddTaskComponent,
    WeatherWidgetComponent,
    SeatingComponent,
    AddSeatingComponent,
    LiveScoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
