import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IUser } from '../interfaces/users'
import "rxjs/Rx";

@Injectable()
export class ApiService {
 
    private _usersURL = "http://localhost:3002/api/users/all";
    private _userID = "http://localhost:3002/api/users/:id";

    constructor(private http: Http) {
       
    }

    getUsers(): Observable<IUser[]> {
        return this.http
            .get(this._usersURL)
            .map((response: Response) => {
               console.log('response.json()',response.json());
                return <IUser[]>response.json();
            })
            .catch(this.handleError);
    }

    updateUser(user: IUser[]): Observable<IUser[]> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
        .put(this._userID, JSON.stringify(user))
        .map((response: Response) => {
            return <IUser[]>response.json();
        })
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}