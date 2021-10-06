import {Time} from '@angular/common';

export interface EventsModel {
  [uuid: string]: EventModel[];
}

export interface EventModel {
  name: string;
  date: Time;
  description: string;
  uuid: string;
}
