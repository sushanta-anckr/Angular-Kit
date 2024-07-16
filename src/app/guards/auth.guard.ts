import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)

  const localdata = localStorage.getItem('token')

  if(state.url==='/sign-in' || state.url==='/sign-up'){
    // router.navigateByUrl('dashboard')
    router.navigateByUrl('dashboard');
    return false;
  }


  if(localdata !=null){
    // router.navigateByUrl('dashboard')
    return true
  }else{
    router.navigateByUrl('sign-in');
    return false;
  }

};
