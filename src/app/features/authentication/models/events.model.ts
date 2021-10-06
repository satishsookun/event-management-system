export interface EventsModel {
  [uuid: string]: EventModel[];
}

export interface EventModel {
  name: string;
  date: Date;
  description: string;
  uuid: string;
}
