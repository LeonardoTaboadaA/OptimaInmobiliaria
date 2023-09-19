import { Injectable } from '@angular/core';
//Importar HttpClient
import {HttpClient} from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
}
