import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductListModel } from '../productListModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { UserFetch } from '../userFetch';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    /**
   * Variable for binding the data
   */
    searchText? : any = '' ;

    /**
     * Variable for page size
     */
    pageSize = 5;
  
    /**
     * variable for current page
     */
    currentPage = 1;
  
    /**
     * variable for total pages
     */
    totalPages  =1;

    /**
     * Variable for store response of api
     */
  product: ProductListModel[] =[];

  /**
   * Variable for stores filtered api
   */
  filteredProduct: ProductListModel[] = [];

  editingProductId: number | null = null;
  editedProduct: ProductListModel = new ProductListModel();
  val: any;
  user: UserFetch = {};
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(
    private router: Router,
    private api:ProductListService,
    private route: ActivatedRoute){

  }

  ngOnInit(){
    this.getProducts();
    this.filterProducts();
    // let sub = this.route.params.subscribe((params) => {
    //   this.val = params['id']
    // });
    // console.log("id: " + this.val);
    // this.api.getUpdateUser(this.val).subscribe((data) => {
    //   this.user = data;
    // })
  }
  /**
   * URL link
   */
 // apiUrl ='https://fakestoreapi.com/products'

  /**
   * function for get api list
   */
  getProducts(){
    this.api.getProductListApi().subscribe((res:ProductListModel[])=>{
         this.product = res;
         this.filteredProduct = res;
         this.categories = this.getUniqueCategories();
    })
  }

  /**
   * Function showing filtered list on UI
   */
  
  filterProducts() {
    this.filteredProduct = this.product.filter((p) => {
      const isTitleMatch = p.title?.toLowerCase().includes(this.searchText.toLowerCase());
      const isCategoryMatch = this.selectedCategory ? p.category === this.selectedCategory : true;
      return isTitleMatch && isCategoryMatch;
    });
    this.totalPages = Math.ceil(this.filteredProduct.length / this.pageSize);
  }

  getUniqueCategories(): string[] {
    const categoriesSet = new Set<string>();
    this.product.forEach((p) => {
      if (p.category) {
        categoriesSet.add(p.category);
      }
    });
    return Array.from(categoriesSet);
  }

  resetFilter() {
    this.selectedCategory = '';
    this.searchText = '';
    this.filterProducts();
  }

  /**
   * Function for update the list
   */
update(id:any){
this.router.navigate(['./update', id]);
}

/**
 * Function for navigate to add product page;
 */
insertProduct(){
  this.router.navigate(['/add']);
}

/**Function for delete the row */
delete(event:any , id:number){
  let deleteRow = this.filteredProduct.findIndex((i)=>i.id == id);
  if (deleteRow !== -1) {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.filteredProduct.splice(deleteRow, 1);
    }
  }
}

/**
 * Function for get into next page
 */
goToPage(pageNumber:number){
  this.currentPage = pageNumber;
}

/**
 * Function get into pervious page
 */
goToPreviousPage(pageNumber:number){
  this.currentPage = pageNumber;
}

/**
 * Funnction edit the product details
 */
editProduct(productId: number) {
  this.editingProductId = productId;
  this.editedProduct = { ...this.filteredProduct.find((product) => product.id === productId) };
}

/**
 * Funnction cancle the product details
 */
cancelEdit() {
  this.editingProductId = null;
  this.editedProduct = new ProductListModel();
}

/**
 * Funnction save the product details
 */
saveProduct(product: ProductListModel) {
  // Save the updated product logic
  const index = this.filteredProduct.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    this.filteredProduct[index] = { ...product };
  }
  this.cancelEdit();
}
}
