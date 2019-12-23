import { Component, OnInit,HostBinding } from '@angular/core';
import { User } from 'src/app/models/Users';
import { ServicesService } from '../../services/services.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  
  @HostBinding('class') classes= 'row';

  user: User = { 
    id:0,  
    nombres: '',
    apellidos: '',
    cedula:'',
    email:'',
    telefono:'',    
    create_at: new Date()
  };

  edit: boolean = false;
  

 
  constructor(private userService :ServicesService, private router: Router, private activedroute: ActivatedRoute ) {}

  ngOnInit() {
    const params= this.activedroute.snapshot.params;
    if(params.id) {
      this.userService.getUser(params.id)
      .subscribe (
        res =>{
          console.log(res);         
          this.user= res;
          this.edit=true;
        },
        err => console.error(err)
      )

    }
    
  }

  saveUser(){
    delete this.user.id;
    delete this.user.create_at;

    this.userService.getUserCedOrEmail(this.user.cedula,this.user.email)
    .subscribe (
     
      res =>{
        console.log(res);

        if (res.length == 0) {

          
          this.userService.saveUser(this.user)
         .subscribe(
          res => {
          console.log(res);
          this.router.navigate(['/users']);
  
        },
        err => console.error(err)
  
      )
     
         

          
        }else{
          console.log('Existe');
        }         
        //this.user= res;
        //this.edit=true;
      },
      err => console.error(err)


    )



  }

  updateUser(){
    this.userService.updateUser(this.user.id,this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users']);

      },
      err => console.error(err)

    )
    //console.log(this.user)
  }

  

  onSearchChange(searchValue: string){ 
    
    this.userService.getUserCed(searchValue)
      .subscribe (
       
        res =>{
          console.log(res);
          if (res.length == 0) {
            console.log('No Existe');

            
          }else{
            console.log('Existe');
          }         
          //this.user= res;
          //this.edit=true;
        },
        err => console.error(err)


      )
    //console.log(searchValue);
  }


  onSearchChangeEmail(searchValue: string){ 
    
    this.userService.getUserEmail(searchValue)
      .subscribe (
       
        res =>{
          console.log(res);
          if (res.length == 0) {
            console.log('No Existe');

            
          }else{
            console.log('Existe');
          }         
          //this.user= res;
          //this.edit=true;
        },
        err => console.error(err)


      )
    //console.log(searchValue);
  }


  getUserCedOrEmail(cedula: string,email:string){ 
    
    this.userService.getUserCedOrEmail(cedula,email)
      .subscribe (
       
        res =>{
          console.log(res);
          if (res.length == 0) {
            console.log('No Existe');

            
          }else{
            console.log('Existe');
          }         
          //this.user= res;
          //this.edit=true;
        },
        err => console.error(err)


      )
    //console.log(searchValue);
  }
  

}
