import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router)

  ngOnInit():void{
    const menuButton = document.getElementById('menu-button')
    const mobileMenu = document.getElementById('mobile-menu')

    menuButton?.addEventListener('click',()=>{
      mobileMenu?.classList.toggle('hidden')
    })

  }

signOut(){
  localStorage.removeItem('token')
  this.router.navigateByUrl('/sign-in')
}

}
