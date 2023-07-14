import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { ProductListModel } from '../productListModel';
import { UserFetch } from '../userFetch';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ProductListService) { }

  users: ProductListModel[] = [];

  user: UserFetch = {};

  newProducts: ProductListModel = {

    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''

  }
/**
 * Function for submitting new products
 */
  submit() {
    this.api.addProduct(this.newProducts).subscribe((p) => {
      this.users.push(p);
      this.newProducts = {

        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''

      }
    })
    this.router.navigate(['/product']);
  }

}
