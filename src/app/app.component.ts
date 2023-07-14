import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchBox';
constructor(private router:Router){}

/**
 * function for view all product list
 */
  clickHere(){
this.router.navigate(['/product'])
  }
}
