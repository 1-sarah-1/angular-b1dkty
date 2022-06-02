import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * @title Select Option Groups Multi Selection
 * @order 60
 */
@Component({
  selector: 'sbb-select-option-groups-multi-selection-example',
  templateUrl: 'select-option-groups-multi-selection-example.html',
})
export class SelectOptionGroupsMultiSelectionExample {
  
  data = new FormControl();

  newForm = new FormGroup({
    data: this.data
  });

  form: FormGroup;
  foodFromTheWorld: any[] = [
    {
      nation: 'Italy',
      food: [
        { value: 'lasagna', viewValue: 'Lasagna' },
        { value: 'parmigiana', viewValue: 'Parmigiana' },
        { value: 'pasta', viewValue: 'Pasta' },
      ],
    },
    {
      nation: 'Germany',
      food: [
        { value: 'weißwurst', viewValue: 'Weißwurst' },
        { value: 'eisbein', viewValue: 'Eisbein' },
        { value: 'rheinische-muscheln', viewValue: 'Rheinische Muscheln' },
      ],
    },
    {
      nation: 'Switzerland',
      food: [
        { value: 'birchermüesli', viewValue: 'Birchermüesli' },
        { value: 'rösti', viewValue: 'Rösti' },
        { value: 'bündnernusstorte', viewValue: 'Bündnernusstorte' },
      ],
    },
  ];

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      value: [['lasagna', 'eisbein', 'rösti']],
    });

    console.log('@sp form', this.form);

    // NOW WORKING!!!!
     this.data.patchValue(
      ['lasagna', 'rösti']
    );

    /*this.data.setValue(
      ['lasagna', 'eisbein', 'rösti']
      //[['lasagna', 'eisbein', 'rösti']]
    );*/

    console.log('@sp data', this.data.value);
    debugger;

  }
}
