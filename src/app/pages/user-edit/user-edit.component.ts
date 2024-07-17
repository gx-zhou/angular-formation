import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user.interface';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private userService = inject(UserService)
  user: User = {} as User

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'] 
    // const users = this.route.parent?.snapshot.data['usersList']
    // console.log(users)
    this.userService.get(id).subscribe((user) => {
      this.user = user
    })
  }
}
