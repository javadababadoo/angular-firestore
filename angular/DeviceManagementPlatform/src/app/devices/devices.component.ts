import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
  }




  test() {

    this.keycloakService.isLoggedIn().then(val => {
      console.log('is logged => ' + val);
    });

    this.keycloakService.getToken().then(val => {
      console.log('Token => ' + val);
    });

    console.log('Name: ' + this.keycloakService.getUsername());

    console.log('token expired => ' + this.keycloakService.isTokenExpired());
  }

  async logout() {
    await this.keycloakService.logout();
  }

}
