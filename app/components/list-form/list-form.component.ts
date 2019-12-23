import { Component, OnInit, HostBinding } from '@angular/core';
import {ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
  @HostBinding('class') classes ='row';

  users: any= [];

  constructor(private usersService: ServicesService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){

    this.usersService.getUsers().subscribe(
      res => {
        this.users=res;
        //console.log(this.users);
      },
      err => console.log(err)

    );
  }

  deleteUsers(id:string){
    this.usersService.deleteUser(id).subscribe(
      res => {console.log(res)
      this.getUser();
    },
    err => console.log(err)

    )
  }

  

}
