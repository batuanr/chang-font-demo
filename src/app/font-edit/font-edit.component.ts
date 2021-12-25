import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-edit',
  templateUrl: './font-edit.component.html',
  styleUrls: ['./font-edit.component.scss']
})
export class FontEditComponent implements OnInit {
  fontSize = 14;
  constructor() { }


  ngOnInit(): void {
  }

  // @ts-ignore
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}
