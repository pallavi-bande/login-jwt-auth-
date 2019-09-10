import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CustomerService} from './customer.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/router';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService: CustomerService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.customerService.isLogged()) {
      return true;
    }
  }
}