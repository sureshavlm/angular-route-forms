import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

	username: string;
	email: string;

	constructor(username: string, email: string) {
		this.username = username;
		this.email = email;
	}
}