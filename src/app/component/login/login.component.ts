import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario [] = [];

  constructor(  ) { }

  ngOnInit(): void {
  }
}
