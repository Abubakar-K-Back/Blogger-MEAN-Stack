import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { LoginService } from "../app/login/login.services";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import{
 
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalFullstack';
constructor(

  private cookie:CookieService,
  private loginserve:LoginService,
  private loadingBar: SlimLoadingBarService,
  private router: Router

)
{
  this.router.events.subscribe((event:Event)=>{
    this.navigationInterceptor(event);
   });
}

private navigationInterceptor(event: Event): void
{
  if(event instanceof NavigationStart)
  {
    this.loadingBar.start();
  }
  if(event instanceof NavigationEnd)
  {
    this.loadingBar.complete();
  }
  if(event instanceof NavigationCancel)
  {
    this.loadingBar.stop();
  }
  if(event instanceof NavigationError)
  {
    this.loadingBar.stop();
  }
}




msgs=""
showme:boolean=false


  getcookie(){
    if(!this.cookie.getAll()){

      this.showme=true
      this.msgs="You are Already Logged Out"
      return
    }
    else
    {


      this.showme=true
      this.msgs="Log Out Successfully Please Clear Your Cookies"
      this.cookie.deleteAll()


    }
  }

  getUsername()
  {
    return this.loginserve.getUsername()
  }


}

