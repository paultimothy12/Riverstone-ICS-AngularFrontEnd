import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getSpecificProductApi, postNewProductApi, putUpdateProductApi} from "../api/product-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: number | undefined;
  productName: string | undefined;
  manDate: string | undefined;
  expDate: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  message: string | null = null;
  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      manDate: ['', Validators.required],
      expDate: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      if (this.productId != -1) {
        getSpecificProductApi(this.productId)
          .then(response => {
            const data = response.data;
            this.productId = data.productId;
            this.productName = data.productName;
            this.manDate = data.manDate;
            this.expDate = data.expDate;
            this.price = data.price;
            this.quantity = data.quantity;
            this.productForm.patchValue(data);
          }, error => {
            this.message = error.response.data.message;
            console.error('Error fetching specific product data:', error);
          });
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;

      if (this.productId === -1) {
        postNewProductApi(product)
          .then(response => {
            console.log(response.data);
            this.router.navigate(['/products']);
          }, error => {
            this.message = error.response.data.message;
            console.error(error.response.data.message);
          });
      } else if (this.productId == product.productId) {
        putUpdateProductApi(product)
          .then(response => {
            console.log(response.data);
            this.router.navigate(['/products']);
          }, error => {
            this.message = error.response.data.message;
            console.error(error);
          });
      } else {
        this.message = "You are trying to modify another product or a product with the same ID doesn't exist";
      }
    }
  }
}
