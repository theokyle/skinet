import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sever-error',
  imports: [],
  templateUrl: './server-error.html',
  styleUrl: './server-error.scss',
})
export class ServerError {
  protected error?: HttpErrorResponse;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras.state?.['error'];
  }
}
