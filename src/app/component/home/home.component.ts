import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { UserInterface } from 'src/app/services/models/user-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataApi: DataApiService) { }
  private users: UserInterface;

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(){
    this.dataApi.getUsers()
    .subscribe((users: UserInterface) => (this.users = users));
  }

}
