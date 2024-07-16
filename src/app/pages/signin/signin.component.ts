import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  signinObj:any={
    "email":"",
    "password":""
  }

  http=inject(HttpClient)

  router = inject(Router)
  authServices = inject(AuthService)

  getAllUsers(){
    this.authServices.getAllUsers().subscribe((res:any)=>{
      console.log(res)
    })
  }

  

  signIn(){
    this.authServices.signIn(this.signinObj).subscribe({
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

  // signIn(){
  //   // debugger;
  //   this.http.post('http://localhost:4000/api/auth/dummylogin',this.signinObj).subscribe((res:any)=>{
  //     // debugger;
  //     if(res){
  //       console.log(res.user)
  //       alert(res.message);
  //       localStorage.setItem('token',res.user.email)
  //       this.router.navigateByUrl("dashboard")
  //     }else{
  //       alert("error")
  //     }
  //   },(err)=>{
  //     alert(err.error.message)
  //   })
  // }

}
