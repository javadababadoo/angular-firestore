'use strict';

var serviceAccount = require("../../serviceAccountKey.json");
var admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://angular-fire-6a725.firebaseio.com"
});
const collectionName = 'users';
var db = admin.firestore();

exports.login = function(req, res) {
    
};

exports.create_user = function(req, res) {
    const credentials = req.body;

    addUser(req)
    .then(user=> {
        
    }).catch((err) => {
        next(err);
    });
    


};

async function addUser(req) {
    const newDevice = req.body;
    let snapshot = await db.collection(collectionName).add(newDevice);
    return snapshot;
}