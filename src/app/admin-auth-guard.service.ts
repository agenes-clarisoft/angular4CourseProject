import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
