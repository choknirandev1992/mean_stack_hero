import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { TransectionResponse } from 'src/app/models/transection.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  mDataArray: TransectionResponse[];
  constructor(private networkService: NetworkService) { }

  ngOnInit() {
      this.feedData();
  }

  async feedData() {
     let result = await this.networkService.getTransection().toPromise()
     this.mDataArray = result;
  };

}
