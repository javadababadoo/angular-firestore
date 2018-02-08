'use strict';

var serviceAccount = require("../../serviceAccountKey.json");
var admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://angular-fire-6a725.firebaseio.com"
});

var db = admin.firestore();

exports.list_all_devices = function(req, res) {
        getAllDevices().then(function(devices){
            res.send(devices);
        }).catch((error) => {
            console.log('Error => ', error);
            return next(err);
        });
};

exports.add_device = function(req, res) {
    var device = {
        name: 'Device #1',
        description: 'Test device',
        type: 'MRA',
        active: true
    };

    addDevice(req).then(function(device){
        res.send(device);
    }).catch((error) => {
        console.log('Error => ', error);
            return next(err);
    });
};

async function getAllDevices() {
    let devices = [];
    let snapshot = await db.collection('devices').get();
    snapshot.forEach( device => devices.push(device) );
    return devices;
}

async function addDevice(req) {
    const newDevice = req.body;
    let snapshot = await db.collection('devices').add(newDevice);
    // snapshot.forEach(device => devices.push(device));
    return snapshot;
}