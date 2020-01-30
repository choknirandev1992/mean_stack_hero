import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NetworkService } from 'src/app/services/network.service';
import { ProductResult, Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})

export class StockEditComponent implements OnInit {
  mProduct = new Product();
  imageSrc: string | ArrayBuffer;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private networkService: NetworkService,){}

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
        console.log(params.id);
        this.feedData(params.id);
     });
  }

  feedData(id: any) {
    this.networkService.getProductById(id).subscribe(
     result => {
       let items = result.result as ProductResult;
       this.imageSrc = this.networkService.getImage(items.image);
       this.mProduct = items;
     },
     error => {
       alert(error.error.message);
     }
   )
 }

  onSubmit() {
    this.networkService.editProduct(this.mProduct.product_id.toString(), this.mProduct).subscribe(
      result => {
          this.location.back();
      },
      error => {
        alert(error.error.message);
      }
    )
  }

  onCancel(){
    this.location.back();
  }

  onUpload(event) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.mProduct.image = metaImage;
      };
    }
  }

}
