import {Injectable} from '@angular/core';
import {EventModel, EventsModel} from '../../features/authentication/models/events.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class EventStoreService {


  constructor() {}

  public initEventStore(userUuid: string): void {
    const getExistingEvents = JSON.parse(localStorage.getItem('events'));
    const events = JSON.stringify(this.buildEventDataStructure(userUuid, getExistingEvents));
    localStorage.setItem('events', events);
  }

  private buildEventDataStructure(userUuid: string, existingEvents: EventsModel): EventsModel {
    let eventBlock = {};
    const newObj = (eventBlock[userUuid] = []);
    if (existingEvents) {
       eventBlock = {...existingEvents, ...newObj}
    }
    eventBlock[userUuid] = [];
    return eventBlock;
  }

  private eventStore(): EventsModel {
    const eventStore = JSON.parse(localStorage.getItem('events'));
    return eventStore;
  }

  public createEvent(userUuid: string, eventDetails: EventModel): void {
    const getEventStore = this.eventStore();
    getEventStore[userUuid] = [...getEventStore[userUuid], eventDetails];
    localStorage.setItem('events', JSON.stringify(getEventStore));
  }

  public userEvents(userUuid: string): Observable<EventModel[]>{
    const eventsStore = this.eventStore();
    const eventsByUser = eventsStore[userUuid];

    return of(eventsByUser);
  }

}
