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
db.settings({ timestampsInSnapshots: true });

db.collection("itineraries").doc("6PHnWkx8pHXNTZAwcMyF").collection("stops").add({
  location: new firebase.firestore.GeoPoint(-13.1188168, -38.7970917),
  categories: ["Nautico", "Praia"],
  description: "Praia de boa extensão, é uma das mais urbanas da Ilha de Itaparica. Costuma receber um grande número de turistas durante a alta temporada, que aproveitam um belo dia na praia e se divertem à noite nos bares e restaurantes próximos. Seu clima agradável faz dessa praia uma ótima opção para todos os públicos, principalmente para os que gostam de agito. Com uma boa faixa de areia, seu mar é calmo, mais parecendo uma lagoa, muito convidativo para um mergulho. É um lugar movimentado, principalmente à noite, não sendo muito indicado para os que buscam paz e tranquilidade.",
  duration_in_seconds: 3*60*60,
  name: "Cacha Pregos",
  pictures_url: ["https://media-cdn.tripadvisor.com/media/photo-o/05/48/6e/c3/praia-cacha-pregos.jpg"],
  main_picture: "http://www.toursbahia.com.br/loja/wp-content/uploads/2017/09/PASSEIO_-ilha_dos_frades_itaparica_toursbahia_capa-600x550.jpg"
})
.then(docRef => {
  console.log(docRef.id);
})
.catch(err => console.log(err));

// db.collection("itineraries").add({
//   name: "Circuito Náutico de Cacha-Pregos",
//   description: "O roteiro inclui dunas, águas transparentes e esportes radicais.",
//   categories: ["Náutico"]
// // })
//   .then(docRef => {
//     console.log(docRef.id);
//   })
//   .catch(err => console.log(err));

db.collection("itineraries").get()
  .then(snaps => {
    snaps.forEach(snap => {
      console.log(JSON.stringify(snap.data()));
    });
  })
  .catch(err => console.log(err));