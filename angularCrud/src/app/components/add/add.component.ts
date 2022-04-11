import { Component, OnInit } from '@angular/core';
import { UsersService, User} from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  users: User = {
    id: '',
    name: '',
    identifiant: '',
  };

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveUser() {
    // delete this.users.id;

    this.usersService.createUser(this.users).subscribe();
    this.router.navigate(['/accueil']);

    // console.log(this.users);
  }

}
