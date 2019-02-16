# Angular Locus

a site locator application built using angular 7 (2+) and firebase.

[Live Demo](https://angular-locus.firebaseapp.com)

## step by step guide

### Angular CLI

install angular CLI tools

```shell
npm install -g @angular/cli
```

### Create new Angular application

create a new angular application named `angular-locus`

```shell
ng new angular-locus
```

### PWA

add PWA (Progressive Web Application) support

```shell
ng add @angular/pwa --project=angular-locus
```

This will add necessary configurations to your angular application to enable PWA functionalities and features

#### manifest.json

add/replace necessary configurations on generated manifest.json

### Themes

#### Angular Material

add Angular Material module

```shell
ng add @angular/material
```

#### Bootstrap

add Bootstrap, Popper.JS and Jquery

```shell
npm install bootstrap popper.js jquery --save
```

### Angular Google Maps

install Angular Google Maps

```shell
npm install @agm/core --save
```

refer [Angular Google Maps](https://angular-maps.com/guides/getting-started/)

#### Google Maps API

get your Google Maps API from developer console and replace it in both environment and environment.prod scripts

```ts
export const environment = {
  production: false,
  googleMapsApiKey: 'YOUR_API_KEY'
};
```

### Firebase

install Firebase CLI tools

```shell
npm install -g firebase-tools
```

#### Init Firebase

login to your firebase account

```shell
firebase login
```

and enter your credentials. and after that initialize firebase configuration inside your project

```shell
firebase init
```

#### Firestore

install firebase dependencies for angular

```shell
npm install --save @angular/fire firebase
```

##### Environment Variables

create a project in firebase and replace the api keys in both environment and environment.prod scripts

```ts
export const environment = {
  production: false,
  googleMapsApiKey: 'YOUR_API_KEY',
  firebaseConfig: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
  }
};
```

## run

### ng serve

use the following command to serve your angular application locally

```shell
ng serve
```

### ng build

use the following command to build your angular application for production ready environment

```shell
ng build
```

## deploy

deploy to firebase hosting service using the following command (Use this command after initializing all necessary firebase configurations in your repo)

```shell
firebase deploy
```
