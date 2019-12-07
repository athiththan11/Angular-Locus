# Angular Locus

A site locator application built using angular 7 (2+) and firebase.

[Live Demo](https://angular-locus.firebaseapp.com)

## Step By Step Guide

### Angular CLI

Install Angular CLI tools

```shell
npm install -g @angular/cli
```

### Create Angular application

Create a new Angular application named `angular-locus`

```shell
ng new angular-locus
```

### PWA

Add PWA (Progressive Web Application) support

```shell
ng add @angular/pwa --project=angular-locus
```

This will add necessary configurations to your angular application to enable PWA functionalities and features

#### manifest.json

Add/Replace necessary configurations on generated manifest.json

### Themes

#### Angular Material

Add Angular Material module

```shell
ng add @angular/material
```

#### Bootstrap

Add Bootstrap, Popper.JS and Jquery

```shell
npm install bootstrap popper.js jquery --save
```

### Angular Google Maps

Install Angular Google Maps

```shell
npm install @agm/core --save
```

Refer [Angular Google Maps](https://angular-maps.com/guides/getting-started/)

#### Google Maps API

Get your `Google Maps API` from developer console and replace it in both `environment` and `environment.prod` scripts

```ts
export const environment = {
  production: false,
  googleMapsApiKey: 'YOUR_API_KEY'
};
```

### Firebase

Install Firebase CLI tools

```shell
npm install -g firebase-tools
```

#### Init Firebase

Login to your Firebase account

```shell
firebase login
```

And enter your credentials. and after that initialize firebase configuration inside your project

```shell
firebase init
```

#### Firestore

Install firebase dependencies for angular

```shell
npm install --save @angular/fire firebase
```

##### Environment Variables

Create a project in Firebase and replace the api keys in both `environment` and `environment.prod` scripts

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

## Run

### ng serve

Use the following command to serve your angular application locally

```shell
ng serve
```

### ng build

Use the following command to build your angular application for production ready environment

```shell
ng build
```

## Deploy

Deploy to Firebase hosting service using the following command (Use this command after initializing all necessary firebase configurations in your repo)

```shell
firebase deploy
```
