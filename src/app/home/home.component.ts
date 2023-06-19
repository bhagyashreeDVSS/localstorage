import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): any {


    let data: any = localStorage.getItem('session');
    // alert(data)
    this.session = JSON.parse(data)
  }

  home = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactno: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^(1[89]|[2-9]\d)$/gm)]),
  })
  entries: any = []
  entry: any = [];
  session: any = []
  tempArray: any
  get() {

    this.entries = []
    this.entry = this.home.value
    console.log(this.entries);

    if (localStorage.getItem('session') != undefined || localStorage.getItem('session') != null) {
      // var tempArray =[]
      this.tempArray = JSON.parse(localStorage.getItem('session') || '{}')
      console.log(this.tempArray);
      for (var i = 0; i < this.tempArray.length; i++) {
        this.entries.push(this.tempArray[i])
      }
      console.log(this.entries)
      this.entries.push(this.entry)
    }
    else {
      this.entries.push(this.entry)
    }
    localStorage.setItem('session', JSON.stringify(this.entries))
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data)
  }


  Delete(index : number ) {
    if (this.entries.length >= 0) {
    this.session.splice(index , 1);
    }
    localStorage.setItem('session', JSON.stringify(this.session))
  }
  clear(){

  }

  // get name() {
  //   return this.home.get('name')
  // }
  // get email() {
  //   return this.home.get('email')
  // }
  // get contactno() {
  //   return this.home.get('contactno')
  // }
  // get age() {
  //   return this.home.get('age')
  // }
}
