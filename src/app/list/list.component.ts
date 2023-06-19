import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  session:any =[]
  entries: any = [];
  ngOnInit(): any {

  {
  let data:any = localStorage.getItem('session');
  // alert(data)
  this.session = JSON.parse(data)
  console.log(this.session);

}

}

clear(){
  localStorage.clear();
}


remove(){

localStorage.setItem('session',JSON.stringify(this.entries) )

}
}
