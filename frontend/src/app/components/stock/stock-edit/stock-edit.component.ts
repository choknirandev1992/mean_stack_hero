import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})

export class StockEditComponent implements OnInit {
   mProduct = new Product;
  imageSrc: string | ArrayBuffer;


  constructor(private activatedRoute: ActivatedRoute) {
    this.mProduct.name  = "";
    this.mProduct.price = 0;
    this.mProduct.stock = 0;
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {
        console.log(params.id);
     });
  }


  onSubmit(){
    alert(this.mProduct.name);
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
