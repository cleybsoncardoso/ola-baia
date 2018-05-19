const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyDsCcKMRngL9JSanuWcwoWwV_uQ3c6abuE",
  authDomain: "ola-baia.firebaseapp.com",
  databaseURL: "https://ola-baia.firebaseio.com",
  projectId: "ola-baia",
  storageBucket: "ola-baia.appspot.com",
  messagingSenderId: "363436448639"
};
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

const guide = require('./guide');
const itinerary = require('./itinerary');

//guide.getGuides().then(guides => console.log(guides));

//itinerary.getStops("FYDphmrEU2KQIQz0sbpv").then(itineraries => console.log(itineraries));

itinerary.getGuide("6PHnWkx8pHXNTZAwcMyF").then(itineraries => console.log(itineraries));
