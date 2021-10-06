# EventManagementSystem

Framework used: 
Angular 12
One page application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Store
localStorage

## Folder structure
 Folder structure is organised in a way that if in the future the app expand, it will be easy to adapt
 
## Sass
  Make used of local and global variables in order to adapt our theme color easily
  
## Module
Easy module loading approach was adapted.
Each feature is a module which can be easily plug and play

## Services
Root services and modulewise services are used to meet the requirement of the project. As we are bootstrapping the account module and dashboard module seperately, RXJS Observables(Subject and BehaviourSubject) was used to communication between modules

## Feature UI
Angular material is used in order to give a good and feel interface to the app and prevent wasting time in styling

## Routing
- RouteGuard is used to prevent user from accessing Event dashboard if not login
- If no account was created, user will be redirecting to Create profile route but still have the choice to route to the login page.

## User interaction
 - User has the possibility to add, edit and delete an event.
 - User can create multiple account and appropriate events will be displayed accordingly
 - User has the possibility to logout also which will redirect to Login page

## Remaining
- When creating a profile, username should have been checked in the store, whether it is available of not
- Webpack implementation for a much better management of Input and output sources
-   Can be done if you are interested in evaluating these section also 
