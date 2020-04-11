import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = '65ca9444df3c970ab25b';
  private clientsecret = 'e47794a370bf47f4c32926c2c237d02fe3bf923b';

  constructor(private http:HttpClient) {
    console.log("service is now ready!")
    this.username = 'kmbaria';
   }
 getProfileInfo(){
   return this.http.get(" https://api.github.com/users/" +this.username +"?client_id=" + this.
   clientid + "&client_secret=" + this.clientsecret)
   ;
 }

 getProfileRepos(){
  return this.http.get(" https://api.github.com/users/" +this.username +"/repos?client_id=" + this.
  clientid + "&client_secret=" + this.clientsecret)
  ;
 }
 updateProfile(username: string){
   this.username = username;
 }
}
