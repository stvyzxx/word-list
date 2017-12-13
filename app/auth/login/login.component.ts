import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

import { ApiService } from '../../shared/services/api.service';

import { LoginData } from '../services/user';

@Component({
  selector: 'WlLogin',
  moduleId: module.id,
  styleUrls: ['../auth.component.css'],
  templateUrl: './login.component.html'
})
export class WlLoginComponent {
  user: LoginData;
  personMetadata: any;

  constructor(
    private routerExtensions: RouterExtensions,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.personMetadata = {
      isReadOnly: false,
      commitMode: 'immediate',
      validationMode: 'immediate',
      propertyAnnotations:
      [
        {
          name: 'email',
          displayName: 'E-Mail',
          index: 0,
          editor: 'Email',
          required: true,
          validators: [
            { name: 'Email' },
            {
              name: 'MinimumLength',
              params: {
                length: 6
              },
            },
            { name: 'NonEmpty' }
          ]
        },
        {
          name: 'password',
          displayName: 'Password',
          index: 1,
          editor: 'Password',
          required: true,
          validators: [
            {
              name: 'MinimumLength',
              params: {
                length: 6
              },
            },
            { name: 'NonEmpty' }
          ]
        },
      ]
    };
    this.user = new LoginData();
  }

  login() {
    this.apiService.logIn(this.user)
      .then(
        result => {
        console.log(JSON.stringify(result));
        this.routerExtensions.navigate(['home/dashboard'], {
          transition: {
            name: 'flip',
            duration: 300,
            curve: 'linear'
          }
        });
      },
      errorMessage => {
        alert('Wrong email or password');
      }
    );
  }
}
