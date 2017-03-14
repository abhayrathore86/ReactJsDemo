//server.js
'use strict';
//first we import our dependencies…

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Data = require('./model/data');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//now we can set the route path & initialize the API
router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});
//adding the /comments route to our /api router
router.route('/data')
//retrieve all comments from the database
.get(function (req, res) {
    //looks at our Comment Schema
    var id = req.query.id;
    var t = null;
    //console.log("id="+id);
    if (id) {
        Data.find({ _id: id }, function (err, authordata) {
            if (err) res.send(err);
            res.json(authordata);
        });
    } else {
        Data.find({}, function (err, authordata) {
            if (err) res.send(err);
            res.json(authordata);
        });
    }
})
//post new comment to the database
.post(function (req, res) {
    var data = new Data();
    //body parser lets us use the req.body
    data.id = req.body.id;
    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    data.age = req.body.age;
    data.save(function (err) {
        if (err) res.send(err);
        res.json({ message: 'Data successfully added!' });
    });
}).put(function (req, res) {
    Data.findOneAndUpdate({ "_id": req.query.id }, { $set: { "firstName": req.body.firstName, "lastName": req.body.lastName, "age": req.body.age } }, { new: true }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send("Author data updated");
        }
    });
}).delete(function (req, res) {
    Data.remove({ "_id": req.query.id }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send("Author data deleted");
        }
    });
});

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function () {
    console.log('api running on port :' + port);
});

//# sourceMappingURL=server-compiled.js.map