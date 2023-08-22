import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {deleteProductApi, getSpecificProductApi} from "../api/product-service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number | undefined;
  productId: number | undefined;
  productName: string | undefined;
  manDate: string | undefined;
  expDate: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  message: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("in")
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
        getSpecificProductApi(this.id).then(response => {
            const data = response.data;
            console.log(data)
            this.productId = data.productId;
            this.productName = data.productName;
            this.manDate = data.manDate;
            this.expDate = data.expDate;
            this.price = data.price;
            this.quantity = data.quantity;
          }, error => {
            this.message = error.response.data.message;
            console.error('Error fetching specific product data:', error);
          });

    });
  }

  deleteProduct(id: number | undefined): void {
    deleteProductApi(id)
      .then(
        () => {
          console.log('Product deleted');
          this.router.navigate(['/specific']);
        },
        (error: any) => console.error(error)
      );
  }

  updateProduct(id: number | undefined): void {
    this.router.navigate([`/product/${id}`]);
  }

  postNewProduct(): void {
    this.router.navigate(['/product/-1']);
  }
}
