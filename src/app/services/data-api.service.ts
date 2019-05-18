import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import { bloomHasToken } from '@angular/core/src/render3/di';
import { map } from 'rxjs/operators'
import { AuthService } from './auth.service';
import { UserInterface} from './models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  users: Observable<any>;
  user: Observable<any>;

constructor(private http:HttpClient, private authService: AuthService) { }


headers : HttpHeaders =  new HttpHeaders({
   "Content-Type": "application/json",
   Authorization: this.authService.getToken()
});

getUsers(){
  const url_api = "http://localhost:3000/user/list";
  return this.http.get(url_api);
}

getUserById(id : string){
  const url_api = `http://localhost:3000/user/${id}`;// template literals
  return (this.user = this.http.get(url_api));
}

getOffers(){
  const url_api = `http://localhost:3000/`;
  return this.user = this.http.get(url_api);
}

saveUser(user: UserInterface){
  //TODO: obtener token
  //TODO: not null
  let token = this.authService.getToken();
  const url_api = `http://localhost:3000/users?access_token=${token}`;
  return this.http.post(url_api,{headers: this.headers})
  .pipe(map(data => data));
}

updateUser(user){
  let token = this.authService.getToken();
  const url_api = `http://localhost:3000/user?access_token=${token}`;
  return this.http
    .put<UserInterface>(url_api, user, {headers: this.headers})
    .pipe(map(data => data));

}

deleteUser(id: string){
  let token = this.authService.getToken();
  const url_api = `http://localhost:3000/user?access_token=${token}`;
  return this.http
    .delete<UserInterface>(url_api, {headers: this.headers})
    .pipe(map(data => data));
}



}
