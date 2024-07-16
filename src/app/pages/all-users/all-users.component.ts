import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {

  users: any[] = [];

  authServices = inject(AuthService)

  ngOnInit():void{
    this.authServices.getAllUsers().subscribe((res:any)=>{
      console.log(res)
      this.users=res.users;
      console.log(this.users)
    },(err)=>{
      console.log(err)
    })
  }

}
