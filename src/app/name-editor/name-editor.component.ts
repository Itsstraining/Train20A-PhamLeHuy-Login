import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    postalCode: new FormControl(''),
    telephone: new FormControl(''),
    users: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  hide = true;
}
