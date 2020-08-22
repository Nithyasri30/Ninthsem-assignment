import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  showForm:boolean=true;
  
  constructor() { }

  Submitform(obj: NgForm)
  {
   
    obj:obj.value;
    //console.log(obj.value);

  
    document.getElementById('f1').innerHTML=(obj.value.first);
    document.getElementById('f2').innerHTML=(obj.value.exampleFormControlSelect1);
    document.getElementById('f3').innerHTML=(obj.value.exampleRadios);
    
    
  }




  ngOnInit(): void {
  }

}
