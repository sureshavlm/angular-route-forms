import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {

	constructor(public router: Router, public userService: UserService) {

	}

	onFormSubmit(formData) {
	  	if(formData.username != "" && formData.password != ""){

	  		this.userService.username = formData.username;
	  		this.userService.email = "";

	  		this.router.navigate(['/dashboard', formData.username]); 
	  	}

	  	else {
	  		alert('Invalid credentials');
	  	}
  }
}