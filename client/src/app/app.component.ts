import {Component, OnInit} from "@angular/core";
import {ApiService} from "../services/api.service";
import {IUser} from "../interfaces/users";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ApiService]
})
export class AppComponent implements OnInit {
  _usersArray: IUser[];

    constructor(private apiService: ApiService) {
    }

    getUsers(): void {
        this.apiService.getUsers()
            .subscribe(
                resultArray => this._usersArray = resultArray,
                error => console.log("Error :: " + error)
            )
    }

    ngOnInit(): void {
        this.getUsers();
    }
}
