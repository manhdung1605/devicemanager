import { Component } from '@angular/core';
import {ApiService} from './services/api.service';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  isLogedin = true;
  showSider = true;
  username = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.jwtUserToken.subscribe(token => {
      if (token) {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username;
      }

      if (!this.username) {
        this.showSider = false;
      } else {
        this.showSider = true;
      }
    });
    
  }
  logout() {
    this.username = '';
    this.username = this.apiService.logout();
    console.log('logout success');
  }
}
