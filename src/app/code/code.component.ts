import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styles: ['']
})
export class CodeComponent implements OnInit, AfterViewInit, OnChanges {


  @ViewChild('editor') editor;
  @Input() code = [];
  codeStr = '';
  @Input() name;
  public isCollapsed: boolean;

  ngOnChanges(): void {
    this.codeStr = this.code.join('\n');
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.editor.setTheme('chrome');

    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });


  }

  refresh() {
    for (let i = 0; i < this.code.length; i++) {
      this.code.pop();
    }
    const newCode = this.codeStr.split('\n');
    newCode.forEach((x) => {
      this.code.push(x);
    });
  }
}
