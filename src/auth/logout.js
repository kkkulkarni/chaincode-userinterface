import {
  AuthService
} from 'aurelia-authentication';
import {
  inject
} from 'aurelia-framework';

@inject(AuthService)

export class Logout {
  constructor(authService) {
    this.authService = authService;
  };

  activate() {
    this.authService.logout("/index.html")
      .then(response => {
        console.log("ok logged out on  logout.js");
      })
      .catch(err => {
        console.log("error logged out  logout.js");

      });
  }
}
