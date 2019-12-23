import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/Users'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  //OBTENER TODOS LOS USUARIOS
  getUsers(){
    return  this.http.get(`${this.API_URI}/tasks`);
  }

  //OBTENER UN USUARIOS RECIBIENDO UN ID ESPECIFICO
  getUser(id: string|number) :Observable<User>{
    return  this.http.get(`${this.API_URI}/tasks/${id}`);
  }

   //OBTENER UN USUARIOS RECIBIENDO UNA CEDULA ESPECIFICO
  getUserCed(ced: string|number) :Observable<any>{
    return  this.http.get(`${this.API_URI}/tasks/cedula/${ced}`);
  }

   //OBTENER UN USUARIOS RECIBIENDO UNA CEDULA Y CORREO ESPECIFICO
   getUserCedOrEmail(cedula: string|number, email:string) :Observable<any>{
    return  this.http.get(`${this.API_URI}/tasks/validar/${cedula}/${email}`);
  }

   //OBTENER UN USUARIOS RECIBIENDO UN EMAIL ESPECIFICO
   getUserEmail(email: string) :Observable<any>{
    return  this.http.get(`${this.API_URI}/tasks/email/${email}`);
  }

   //GUARDAR UN USUARIOS
   saveUser(user: User){
    return  this.http.post(`${this.API_URI}/tasks`,user);
  }

   //ELIMINAR UN USUARIOS RECIBIENDO UN ID ESPECIFICO
   deleteUser(id: string){
    return  this.http.delete(`${this.API_URI}/tasks/${id}`);
  }

  //ACTUALIZAR UN USUARIOS RECIBIENDO UN ID ESPECIFICO
  updateUser(id: string|number, updateuser: User): Observable<User> {
    return  this.http.put(`${this.API_URI}/tasks/${id}`,updateuser);
  }
}
