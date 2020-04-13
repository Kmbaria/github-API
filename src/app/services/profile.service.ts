import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';


@Injectable()
export class ProfileService {

  private  username:string;
  private clientid = 'c9efe03ec420135763e3';
  private clientsecret = 'e14bec4afe07b454e248c3e309d2c0b85cf289db';
  
  constructor(private http:HttpClient) {
    console.log("Your service is ready");
    this.username = 'Kmbaria';
   }
  
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientid + "&client_secret=" + this.clientsecret)
    
   }
   updateProfile(username:string){
    this.username = username;
    }

}
