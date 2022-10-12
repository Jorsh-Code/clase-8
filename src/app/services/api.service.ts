import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StorageHelper from '../lib/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  login(username: string, password:string){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login',{ 
        username,
        password
    })
  }

  searchPokemon(name: string):Observable<any>{
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/pokemon',{
      endpoint: "pokemon/"+name
    })
   /* return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name,{
      headers: {
        Authorization: "Bearer "+this.getToken()
      }
    });*/
    //return this.http.get('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/chech')
  }

 /* getSession(option: string){
    let session: any = JSON.parse(localStorage.getItem('session')!)
    if(option === 'username') return session.username;
    return session.token
  }

  checkStatus(): Observable<any>{
    return this.http.get('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/check',{
      headers: {
        Authorization: "Bearer "+this.getSession('token')
      }
    })
  }*/

  refreshToken(){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh',{
      session: StorageHelper.getItem('session')
    });
  }
}
