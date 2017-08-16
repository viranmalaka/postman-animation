import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {TreeModel} from 'angular-tree-component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: ['']
})
export class SideBarComponent implements OnInit, OnChanges {

  @ViewChild('tree') tree;
  @Input() data;
  @Input() simple;

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  nodes = [];

  constructor() {
  }

  ngOnChanges() {
    const func = (item) => {
      const arr = [];
      item.forEach((x) => {
        if (x.item) {
          arr.push({
            name: x.name,
            children: func(x.item)
          });
        } else {
          arr.push({
            name: x.name,
          });
        }
      });
      return arr;
    };

    this.nodes[0] = {
      name: this.data.info.name,
      children: func(this.data.item)
    };
    this.tree.treeModel.update();
  }

  ngOnInit() {
  }

  public onAdd() {
    const IdArr = this.tree.treeModel.getActiveNode().path;
    const indexList = [];
    IdArr.forEach((x) => {
      const index = this.tree.treeModel.getNodeById(x).index;
      indexList.push(index);
    });
    this.add.emit(indexList);
  }

  public onRemove() {
    if (this.tree.treeModel.getActiveNode()) {
      const IdArr = this.tree.treeModel.getActiveNode().path;
      const indexList = [];
      IdArr.forEach((x) => {
        indexList.push(this.tree.treeModel.getNodeById(x).index);
      });
      this.remove.emit(indexList);
    }
  }

  public changeSelection($event) {
    const IdArr = this.tree.treeModel.getNodeById(Object.keys($event.treeModel.activeNodeIds)[0]).path;
    const indexList = [];
    IdArr.forEach(x => {
      indexList.push(this.tree.treeModel.getNodeById(x).index);
    });
    this.select.emit(indexList);
  }
}
