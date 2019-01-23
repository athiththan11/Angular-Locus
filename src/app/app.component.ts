import { Component, OnInit } from '@angular/core';

// Site model
import { Site } from '../models/site.model';

// Angular Material Bottom Sheet component
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

// Location Service
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Locus';

  lat: number;
  lng: number;
  zoom = 3;

  // sites
  sites: Site[];

  constructor(private locationService: LocationService, private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    // sets the current position of user
    this.setCurrentPosition();

    // load sites from firestore using location service
    this.locationService.getSites().subscribe((data) => {
      this.sites = data.map((s) => {
        return {
          ...s.payload.doc.data()
        } as Site;
      });
    });
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
  public displayBottomSheet(site: Site) {
    this.bottomSheet.open(BottomSheetComponent, { data: site });
  }
}
