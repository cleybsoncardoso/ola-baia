
// var db = firebase.firestore();

var getItineraries = () => {
    return db.collection("itineraries").get()
        .then(snaps => {
            var data = [];
            snaps.forEach(snap => data.push(
                Object.assign({ id: snap.id }, snap.data()))
            );
            return Promise.resolve(data);
        })
        .catch(err => Promise.reject(err));
}

var getItineraryById = (id) => {
    return db.collection("itineraries").doc(id).get()
        .then(snap => Promise.resolve(snap.data()))
        .catch(err => Promise.reject(err));
}

var getItinerariesByCategory = (category) => {
    return db.collection("itineraries").where(`categories.${category}`, "==", true).get()
        .then(snaps => {
            var data = [];
            snaps.forEach(snap => data.push(Object.assign({ id: snap.id }, snap.data())));
            return Promise.resolve(data);
        })
        .catch(err => Promise.reject(err));
}

var getStops = (itineraryId) => {
    return db.collection("itineraries")
        .doc(itineraryId)
        .collection("stops")
        .get()
        .then(snaps => {
            var data = [];
            snaps.forEach(snap => data.push(Object.assign({ id: snap.id }, snap.data())));
            return Promise.resolve(data);
        })
        .catch(err => Promise.reject(err));
}

var getGuide = (itineraryId) => {
    return db.collection("guide")
        .where(`itineraries.${itineraryId}`, "==", true)
        .get()
        .then(snaps => {
            var data = [];
            snaps.forEach(snap => data.push(Object.assign({ id: snap.id }, snap.data())));
            return Promise.resolve(data[0]);
        })
        .catch(err => Promise.reject(err));
}
