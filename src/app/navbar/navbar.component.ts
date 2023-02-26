import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    authService: AuthService;
    navbarOpen= false;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    ngOnInit(): void {}

    toggleNavbar(){
        this.navbarOpen = ! this.navbarOpen;
    }
}
