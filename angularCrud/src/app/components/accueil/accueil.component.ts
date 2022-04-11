import { Component, OnInit } from '@angular/core';
import { UsersService, User} from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  ListUser!: User[];

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this.usersService.getUsers().subscribe(
      data => {
        // console.log(data);
        this.ListUser =<any> data;
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(id: string) {
    this.usersService.deleteUser(id).subscribe(
      data => {
        // console.log(data);
        this.userList();
      },
      error => {
        console.log(error);
      }
    );
  }

  update(id: string) {
    this.router.navigate(['/edit/' + id]);
  }

  deleteAll() {
    this.usersService.deleteAllUsers().subscribe(
      data => {
        // console.log(data);
        this.userList();
      },
      error => {
        console.log(error);
      }
    );
  }

}
