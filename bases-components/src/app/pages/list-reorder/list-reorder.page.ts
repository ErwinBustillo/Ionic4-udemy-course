import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heroes = ['Aquaman','Batman','Superman'];
  constructor() { }

  ngOnInit() {

  }

  reorder(event){
    const item = this.heroes.splice(event.detail.from,1)[0];
    this.heroes.splice(event.detail.to,0,item);
    event.detail.complete();
  }

  save(){
    console.log(this.heroes);
  }

}
