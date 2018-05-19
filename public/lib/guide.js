//const db = firebase.firestore();

var getGuides = () => {
    return db.collection("guide").get()
        .then(snaps => {
            var data = [];
            snaps.forEach(snap => data.push(
                Object.assign({id:snap.id}, snap.data())
            ));
            return Promise.resolve(data);    
        })
        .catch(err => Promise.reject(err));
}

var getGuideById = (id) => {
    return db.collection("guide").doc(id).get()
        .then(snap => Promise.resolve(snap.data()))
        .catch(err => Promise.reject(err));
}

var getItineraries = (id) => {
    return db.collection("guide").doc(id).get()
        .then(snap => Promise.resolve(snap.data().itineraries))
        .then(itineraries => Promise.all( 
                Object.keys(itineraries)
                .filter(key => itineraries[key])
                .map(key => db.collection("itineraries").doc(key).get())
            )
        )
        .then(itinerariesData => itinerariesData.map(data => Object.assign({id: data.id}, data.data())))
        .catch(err => Promise.reject(err));
}