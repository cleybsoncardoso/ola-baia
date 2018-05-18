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

db.collection("itineraries").doc("FYDphmrEU2KQIQz0sbpv").collection("stops").add({
  location: new firebase.firestore.GeoPoint(-12.8947294, -38.6881958),
  categories: ["Sol e Mar", "Praia"],
  description: "Itaparica é um município do estado da Bahia, no Brasil. Fica localizado na Ilha de Itaparica, na Baía de Todos os Santos. Itaparica teve sua fama inicial como balneário de repouso e de saúde devido às suas bonitas praias e à sua água mineral que jorra da Fonte da Bica, localizada dentro da cidade, na costa oeste. Na parede frontal da fonte, está inscrito, em um azulejo: \"Êh ! água fina. Faz velha virá menina\".",
  duration_in_seconds: 60*60,
  name: "Itaparica",
  pictures_url: ["https://media-server.clubmed.com/image/jpeg/1200/675/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Ficp%2F1-MEDIA%2F01.VILLAGES%2F1.1MER%2FITAPARICA%2F9-8-7-6-5-4-3-2-1-PHOTOS%2FITACD112132.jpg"],
  main_picture: "http://www.toursbahia.com.br/loja/wp-content/uploads/2017/09/PASSEIO_-ilha_dos_frades_itaparica_toursbahia_capa-600x550.jpg"

})
.then(docRef => {
  console.log(docRef.id);
})
.catch(err => console.log(err));

db.collection("itineraries").get()
.then(snaps => {
  snaps.forEach(snap => {
    console.log(JSON.stringify(snap.data()));
  });
})
.catch(err => console.log(err));