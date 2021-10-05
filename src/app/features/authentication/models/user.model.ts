import {Time} from '@angular/common';

export interface UserModel {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  phone: string;
  uuid: string;
}

export interface LoginUserType {
  userName: string;
  password: string;
}
