var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');
const port      = 8080;
var router      = express.Router();

const User      = require('./app/models/User');

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

var db = require('mongoose')
    db.connect('mongodb://localhost:27017/sample')

router.get('/', function(req, res){
    res.json({
        message : "Welcome to REST API Sample"
    })
})

router.route('/users')
    .post(function(req, res){
        var user = new User();
        user.username   = req.body.username;
        user.password   = req.body.password;
        user.name       = req.body.name;
        user.email      = req.body.email;
        user.save(function (err){
            if(err) res.send(err);
            else res.json({
                message:'new user created'
            })
        })
    })
    .get(function(req, res){
        User.find(function(err, users){
            if(err) res.send(err);
            else res.json(users);
        })
    })

    router.route('/users/:username')
        .get(function(req, res){
            User.findOne({
                username:req.params.username
            }, function(err, user){
                if(err) res.send(err);
                else res.json(user);
            })
        })
        .put(function(req, res){
            User.findOne({
                username : req.params.username
            }, function(err, user) {
                if(err) res.send(err);
                else {
                    user.username   = req.body.username;
                    user.password   = req.body.password;
                    user.name       = req.body.name;
                    user.email      = req.body.email;
                    user.save(function(err){
                        if(err) res.send(err);
                        else res.json({
                            message:'user updated'
                        })
                    })
                }
            })
        })
        .delete(function(req, res){
            User.remove({
                username : req.params.username
            }, function(err, user) {
                if(err) res.send(err);
                else res.json({
                    message : 'User deleted'
                })
            })
        })

app.use('/api', router);
app.listen(port);
console.log(`Service started at port ${port}`);