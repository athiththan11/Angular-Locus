import { Component, OnInit } from '@angular/core';

// Site model
import { Site } from '../models/site.model';
import { LocationService } from './location.service';

// Angular Material Bottom Sheet component
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Locus';

  lat: number;
  lng: number;
  zoom = 16;

  constructor(private locationService: LocationService, private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    // sets the current position of user
    this.setCurrentPosition();
  }

  /**
   * sets current position of the user
   * if location service is enabled and
   * allowed to access user's geo location
   */
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  /**
   * displays angular bottom sheet
   */
  public displayBottomSheet() {
    this.bottomSheet.open(BottomSheetComponent, { data: 'pass data here' });
  }
}
