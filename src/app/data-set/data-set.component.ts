import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styles: ['.noPadding { padding: 0px 2px 0px 0px;}']
})
export class DataSetComponent implements OnInit {
  @Input() data;
  @Input() name;
  isCollapsed: boolean;
  constructor() { }

  ngOnInit() {
  }

  public addNewEntry() {
    this.data.push({
      key: '',
      value: '',
      description : '',
    });
  }

}
