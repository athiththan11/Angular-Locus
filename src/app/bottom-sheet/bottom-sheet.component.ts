import { Component, OnInit, Inject } from '@angular/core';

// Angular Material Bottom Sheet Data
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

// Site model
import { Site } from '../../models/site.model';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public site: Site) {}

  ngOnInit() {}
}
