import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Inmates {
  heading = 'BC Inmates';
  inmates = [];

  constructor(http) {
    //console.log('in c')
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://jif.bergenrisk.com/api/')

    });

    this.http = http;
  }

  activate() {
    console.log('in c')
    return this.http.fetch('v1/inmate')// /1')// users')
      .then(response => response.json())
      .then(inmates => this.inmates = inmates.data);
    console.log('inmates ', this.inmates)
  }

  openrecord(row) {
 console.log('row', row);
    let rt2 = '#/inmates/data/' + row.id; //CLAIM_ID;
    // this.appService.justaddedtabname=rt2
    // console.log('rt2', rt2);
    this.router.navigate(rt2);// `#/inventory/${path}`);
  }


}
