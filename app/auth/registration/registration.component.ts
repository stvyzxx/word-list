import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

import { RegisterData } from "../services/user";

@Component({
    selector: 'WlRegistration',
    moduleId: module.id,
    styleUrls: ['../auth.component.css'],
    templateUrl: './registration.component.html'
})
export class WlRegistrationComponent{
    user: RegisterData;
    personMetadata: any;

    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.personMetadata = {
            "isReadOnly": false,
            "commitMode": "immediate",
            "validationMode": "immediate",
            "propertyAnnotations":
            [
                {
                    "name": "email",
                    "displayName": "E-Mail",
                    "index": 0,
                    "editor": "Email",
                    'required': true,
                    "validators": [
                        { "name": "Email" },
                        {
                            "name": "MinimumLength",
                            "params": {
                                "length": 6
                            }, 
                        },
                        { "name": "NonEmpty" }
                    ]
                },
                {
                    "name": "password",
                    "displayName": "Password",
                    "index": 1,
                    "editor": "Password",
                    'required': true,
                    "validators": [
                        {
                            "name": "MinimumLength",
                            "params": {
                                "length": 6
                            }, 
                        },
                        { "name": "NonEmpty" }
                    ]
                },
                {
                    "name": "password2",
                    "displayName": "Repeat password",
                    "index": 1,
                    "editor": "Password",
                    'required': true,
                    "validators": [
                        {
                            "name": "MinimumLength",
                            "params": {
                                "length": 6
                            }, 
                        },
                        { "name": "NonEmpty" }
                    ]
                }
            ]
        }
        this.user = new RegisterData();
    }

    register() {
        this.apiService.register(this.user)
            .then(
              result => {
                alert({
                  title: "User created",
                  message: "userid: " + result.key,
                  okButtonText: "Nice!"
                })
              },
              errorMessage => {
                alert({
                  title: "No user created",
                  message: errorMessage,
                  okButtonText: "OK, got it"
                })
              }
            );
    }

    onPropertyValidate(args) {
        let validationResult = true;
    
        if (args.propertyName == "password2") {
            let dataForm = args.object;
            let password1 = dataForm.getPropertyByName("password");
            let password2 = args.entityProperty;
            if (password1.valueCandidate != password2.valueCandidate) {
                password2.errorMessage = "Passwords do not match.";
                validationResult = false;
            }
        }
    
        args.returnValue = validationResult;
    }
}