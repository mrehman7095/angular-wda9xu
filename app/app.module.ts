import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NguiMapModule} from '@ngui/map';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    NguiMapModule.forRoot({
        apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
        '&libraries=visualization,places,drawing',
    }), 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
