'use strict';

var serviceAccount = require("../../serviceAccountKey.json");
var admin = require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://angular-fire-6a725.firebaseio.com"
});
const collectionName = 'devices';
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
    // var device = {
    //     name: 'Device #1',
    //     description: 'Test device',
    //     type: 'MRA',
    //     active: true
    // };

    const device = req.body;

    addDevice(req).then(function(device){
        res.send(device);
    }).catch((error) => {
        console.log('Error => ', error);
        next(err);
    });
};

exports.read_device = function(req, res, next) {
    getDevice(req).then(function(device){
        res.send(device);
    }).catch((err) => {
        next(err);
    });
};

exports.update_device = function(req, res, next) {
    updateDevice(req).then(function(device){
        res.send(device);
    }).catch((err) => {
        next(err);
    });
};

async function getAllDevices() {
    let devices = [];
    let snapshot = await db.collection(collectionName).get();
    snapshot.forEach( device => devices.push(device) );
    return devices;
}

async function addDevice(req) {
    const newDevice = req.body;
    let snapshot = await db.collection(collectionName).add(newDevice);
    return snapshot;
}

async function getDevice(req) {
    let device = null;
    let snapshot = await db.collection(collectionName).doc(req.params.deviceId).get();

    if(snapshot.exists){
        device = snapshot.data();
    }else{
        console.log('No such document');
    }
    return device;
};

async function updateDevice(req) {
    const updatedDevice = req.body;
    let snapshot = await db.collection(collectionName).doc(req.params.deviceId).set(updatedDevice);
    return snapshot;
};
  