import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styles: ['']
})
export class CodeComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor;
  @Input() code = '';
  @Input() name;
  public isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.editor.setTheme('chrome');

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });
  }

}
