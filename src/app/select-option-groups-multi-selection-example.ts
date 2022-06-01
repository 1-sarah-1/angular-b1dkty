import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

/**
 * @title Select Option Groups Multi Selection
 * @order 60
 */
@Component({
  selector: 'sbb-select-option-groups-multi-selection-example',
  templateUrl: 'select-option-groups-multi-selection-example.html',
})
export class SelectOptionGroupsMultiSelectionExample {
  prjMgrCtrlTech = new FormControl();
  entriesOfGroups: EntriesOfGroup[] = [];

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
      value: [[]],
    });

    const group1Entry1 = {
      display: 'Tiramisu',
      tooltip: 'Tiramisu Tooltip',
    }

    const group1Entry2 = {
      display: 'Eis',
      tooltip: 'Eis Tooltip',
    }

    const entriesOfGroup1 = {
      group: 'Dessert',
      entries: [group1Entry1, group1Entry2]
    };

    const group2Entry1 = {
      display: 'Salat',
      tooltip: 'Salat Tooltip',
    }

    const group2Entry2 = {
      display: 'Suppe',
      tooltip: 'Suppe Tooltip',
    }

    const entriesOfGroup2 = {
      group: 'Vorspeise',
      entries: [group2Entry1, group2Entry2]
    };

    this.entriesOfGroups.push(entriesOfGroup1);
    this.entriesOfGroups.push(entriesOfGroup2);
  }
}

function isPreselected(value: string): boolean {
 // if (value === 'Vorspeise') {
   // return true;
  //}
  return true;
}

export interface EntriesOfGroup {
  group: string;
  entries: Entry[];
}

export interface Entry {
  display?: string;
  tooltip?: string;
  filterReferences?: string[];
}
