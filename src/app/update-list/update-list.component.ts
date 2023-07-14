import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { ProductListModel } from '../productListModel';
import { UserFetch } from '../userFetch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent {

  // constructor(private route: ActivatedRoute,
  //   private router: Router,
  //   private api: ProductListService) { }

  // val: any;

  // users: ProductListModel[] = [];

  // user: UserFetch = {};
  
  // ngOnInit() {
  //   let sub = this.route.params.subscribe((params) => {
  //     this.val = params['id']
  //   });
  //   console.log("id: " + this.val);
  //   this.api.getUpdateUser(this.val).subscribe((data) => {
  //     this.user = data;
  //   })
  // }

  // /**
  //  * Function for update the details
  //  */
  // update() {
  //   this.api.updateUser(this.user).subscribe((data) => {
  //   this.getUsers();
  //   });
  //   this.router.navigate(['/product'])
  // }

  // /**
  //  * 
  //  */
  // getUsers() {
  //   this.api.getProductListApi().subscribe((data) => {
  //     this.users = data;
  //   })
  // }

}
