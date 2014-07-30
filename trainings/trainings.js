var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('mongodb', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'trainings' database");
        db.collection('trainings', {strict:true}, function(err, collection) {
            if (err) {
                db.createCollection('trainings', {autoIndexId: true});
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving training: ' + id);
    db.collection('trainings', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('trainings', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addtraining = function(req, res) {
    var training = req.body;
    console.log('Adding training: ' + JSON.stringify(training));
    db.collection('trainings', function(err, collection) {
        collection.insert(training, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}