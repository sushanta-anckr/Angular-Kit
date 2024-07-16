import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signipObj:any={
    "username":"",
    "email":"",
    "password":""
  }

  http=inject(HttpClient)
  router = inject(Router)


  authServices = inject(AuthService)



  signUp(){
    this.authServices.signUp(this.signipObj).subscribe({
      next: (res: any) => {
        if (res) {
          console.log(res.user);
          alert(res.message);
          localStorage.setItem('token', res.user.email);
          this.router.navigateByUrl('dashboard');
        } else {
          alert('Error');
        }
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }

  // signUp(){
  //   // debugger;
  //   this.http.post("http://localhost:4000/api/auth/register",this.signipObj).subscribe((res:any)=>{
  //    if(res){
  //     console.log(res)
  //     alert(res.message)
  //     localStorage.setItem('token',res.user.email)
  //     this.router.navigateByUrl('dashboard')
  //    }
  //   },(err)=>{
  //     console.log(err);
  //     alert(err.error.message)
  //   })
  // }


}
