var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');
const e = require('express');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {

    // check if account exists
    dal.find(req.params.email).
        then((users) => {

            // if user exists, return error message
            if(users.length > 0){
                console.log('User already in exists');
                res.send('User already in exists');    
            }
            else{
                // else create user
                dal.create(req.params.name,req.params.email,req.params.password).
                    then((user) => {
                        console.log(user);
                        res.send(user);            
                    });            
            }
        });
});


// login user 
app.get('/account/login/:email/:password', function (req, res) {

    dal.find(req.params.email).
        then((user) => {
            // if user exists, check password
            if(user.length > 0){
                if (user[0].password === req.params.password){
                    res.send(user[0]);
                }
                else{
                    res.send('Login failed: wrong password');
                }
            }
            else{
                res.send('Login failed: user not found');
            }
    });
});

// find user account
app.get('/account/find/:email', function (req, res) {
    dal.find(req.params.email).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

// find one user by email - alternative to find
app.get('/account/findOne/:email', function (req, res) {
    dal.findOne(req.params.email).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});


// update - deposit/withdraw amount
app.get('/account/update/:dispEmail/:amount', function (req, res) {
    var dispEmail = req.params.dispEmail;
    var amount = Number(req.params.amount);
    console.log("HERE", amount)
    dal.update(dispEmail, amount)
        .then((response) => {
            console.log(response);
            res.send(response);
    });    
});

// all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

//update balance info
app.post('/account/updateBalance/:dispEmail/:balance', (req, res) => {
    var dispEmail = req.params.dispEmail;
    const balance = req.params.balance;
    dal.update(dispEmail, balance)
      .then((doc) => {
        if(doc.modifiedCount === 1){
          res.status(204).send('Balance updated');
        } 
      })
      .catch((err) => console.log(`Balance updated rejected due to error: ${err}`))
  });

  //get balance
  app.get('/account/getBalance/:dispEmail', function (req, res) {
    var dispEmail = req.params.dispEmail;
    dal.findOne(dispEmail)
        .then((user) => {
            console.log(user);
            res.send(user);
    });
});


 // get balance after transaction
 app.get('/account/update/:dispEmail/:receiverEmail/:amount', function (req, res) {
    const dispEmail = req.params.dispEmail;
    const receiverEmail = req.params.receiverEmail;
    const amount = req.params.amount;
    var recieverBalance = 0;

    console.log("dispEmail:", dispEmail);
    console.log("receiverEmail:", receiverEmail);
    console.log("amount:", amount);

    dal.getBalance(receiverEmail)
        .then((rbalance) => {
            recieverBalance = rbalance;
            
        })
    console.log("rbalance", recieverBalance)
    // Get the current balance of dispEmail
    dal.getBalance(dispEmail) 
        .then((balance) => {
            if (balance < amount) {
                throw new Error("Insufficient balance");
            }
            // Deduct amount from dispEmail's balance
            return dal.update(dispEmail, -Number(amount));
        })
        // Add amount to receiverEmail's balance
        .then(() => {dal.update(receiverEmail, Number(amount));
            res.status(204).send('Amount transferred successfully.');}) 
        .catch((err) => {
            console.log(`Transaction failed due to error: ${err}`);
            res.status(400).send(`Transaction failed: ${err.message}`);
        });
});

// //verify token at the root route
// app.get ('/auth', function(req,res){
//     //read token from header
//     const idToken = req.headers.authorization
//     console.log('header:',idToken);
// })

// //verify token
// admin.auth().verifyIdToken(idToken)
//     .then (function(decodedToken){
//         console.log("decodedToken:", decodedToken);
//         res.send('Authentication Success!');
//     }).catch (function(error){
//         console.log("error:",error);
//         res.send('Authentication Fail!');
//     });

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);
