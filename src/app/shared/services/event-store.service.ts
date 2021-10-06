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
    const eventsStore = JSON.parse(localStorage.getItem('events'));
    return eventsStore;
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

  public deleteEvent(eventUuid: string, userUuid: string): Observable<EventModel[]> {
    const getEventStore = this.eventStore();
    const removeEvent = getEventStore[userUuid].filter( (event: EventModel) => !(event.uuid === eventUuid));
    getEventStore[userUuid] = [...removeEvent];
    localStorage.setItem('events', JSON.stringify(getEventStore));
    return of(removeEvent);
  }

  public eventByUuid(eventUuid: string, userUuid: string): Observable<EventModel> {
    const getEventStore = this.eventStore();
    const editedEvent = getEventStore[userUuid].find( (event: EventModel) => event.uuid === eventUuid);
    return of(editedEvent);
  }

  public saveEvent(eventUuid: string, userUuid: string, eventDetails: EventModel): Observable<EventsModel> {
    const getEventStore = this.eventStore();
    const objIndex = getEventStore[userUuid].findIndex( (event: EventModel) => event.uuid === eventUuid);
    getEventStore[userUuid][objIndex] = eventDetails;
    getEventStore[userUuid][objIndex].uuid = eventUuid;

    localStorage.setItem('events', JSON.stringify(getEventStore));
    return of(getEventStore)
  }

}
