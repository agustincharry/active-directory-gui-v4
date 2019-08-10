import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../../../environments/environment';
import { ActiveDirectoryService } from './active-directory.service';

@Component({
  selector: 'app-active-directory',
  templateUrl: './active-directory.component.html',
  styleUrls: ['./active-directory.component.css']
})
export class ActiveDirectoryComponent implements OnInit {

  constructor(private adalService: AdalService, private activeDirectoryService: ActiveDirectoryService) {
  }

  ngOnInit() {
    this.loadAdalModule();
  }

  /**
   * Used to load AdalModule
   */
  private loadAdalModule() {
    this.adalService.init(environment.config);
    this.adalService.handleWindowCallback();
    this.activeDirectoryService.setIsloadedModule(true);
  }

  /**
   * Used to launch the view to login
   */
  login() {
    this.adalService.login();
  }

  /**
   * Used to launch the view to logout
   */
  logout() {
    this.adalService.logOut();
  }

  /**
   * Used to know if user is authenticated
   */
  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }

}
