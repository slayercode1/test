import { Component, OnInit } from '@angular/core';
import { UsersService, User} from '../../services/users.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Users } from 'src/app/model/users';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  users: User = {
    id: '',
    name: '',
    identifiant: '',
  };

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activeRoute:ActivatedRoute
    
  ) {
    this.users.id = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {


    const id =<string> this.activeRoute.snapshot.params['id'];
    console.log('id : '+ id);
    if(id){
      this.usersService.getUser(id).subscribe(
        data => {
          this.users = data[0];
          console.log(data);
        }
      );
    }

  }


  update() {
    this.usersService.updateUser(this.users.id , this.users).subscribe();
    this.router.navigate(['/accueil']);
  }

}
