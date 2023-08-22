import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {deleteProductApi, getAllProductApi} from "../api/product-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.refreshProducts();
  }
  refreshProducts(): void {
    getAllProductApi().then(
      (response:any) => {
        this.products = response.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteProduct(id: any) {
    deleteProductApi(id).then(
      () => {
        this.refreshProducts();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateProduct(id: number) {
    this.router.navigateByUrl(`/product/${id}`);
  }

  postNewProduct() {
    this.router.navigateByUrl('/product/-1');
  }
}
