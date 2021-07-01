// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    apiUrl: 'http://localhost/rova',
    mainPage: '/apps/dashboards/project',
    firebase: {
        apiKey: 'AIzaSyAGTyVTUKvBB7R6G1HAcbwIfWSoQBG9Xfo',
        authDomain: 'rova-8893.firebaseapp.com',
        databaseURL: 'https://rova-8893.firebaseio.com',
        projectId: 'rova-8893',
        storageBucket: 'rova-8893.appspot.com',
        messagingSenderId: '690724012657',
        appId: '1:690724012657:web:32e51817043ca4008b51d0',
        measurementId: 'G-VZEXJFQPTG'
      }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
