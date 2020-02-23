import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../service/user.service';


@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

	username: string;

	constructor(public router: ActivatedRoute, public userService: UserService) {
	
	}

	ngOnInit() {

		this.username = this.userService.username;
		
		this.router.params.subscribe(params => {
			console.log(params);
			this.username = params['username'];
		});
	}
}