const firebase = require('firebase');

const db = firebase.firestore();

module.exports = {
    getItineraries: () => {
        return db.collection("itineraries").get()
            .then(snaps => {
                const data = [];
                snaps.forEach(snap => data.push(
                    Object.assign({id:snap.id}, snap.data()))
                );
                return Promise.resolve(data);    
            })
            .catch(err => Promise.reject(err));
    },

    getItineraryById: (id) => {
        return db.collection("itineraries").doc(id).get()
            .then(snap => Promise.resolve(snap.data()))
            .catch(err => Promise.reject(err));
    },

    getItinerariesByCategory: (category) => {
        return db.collection("itineraries").where(`categories.${category}`, "==", true).get()
            .then(snaps => {
                const data = [];
                snaps.forEach(snap => data.push(Object.assign({id: snap.id}, snap.data())));
                return Promise.resolve(data);    
            })
            .catch(err => Promise.reject(err));
    },

    getStops: (itineraryId) => {
        return db.collection("itineraries")
            .doc(itineraryId)
            .collection("stops")
            .get()
            .then(snaps => {
                const data = [];
                snaps.forEach(snap => data.push(Object.assign({id: snap.id}, snap.data())));
                return Promise.resolve(data);    
            })
            .catch(err => Promise.reject(err));
    }
}