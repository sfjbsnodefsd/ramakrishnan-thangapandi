import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title = "Fill out the form below";
  name="";
  age=0;
  gender="male";
  constructor() { }
  save(){
    console.log(this.name + " "+ this.age + " "+ this.gender);
  }

  ngOnInit(): void {
  }

}
