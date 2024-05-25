const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  console.log("Connected successfully to server");

    // database Name
    const dbName = 'myproject';
    const db = client.db(dbName);

    // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection('customers');

    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        if (err) {
            console.error('Error inserting document:', err);
            client.close();
            return;
          }
          console.log('Document inserted');
    });

    //deposit amount
    var depositAmount = 100;
    db.collection('customers').updateOne({email: props.loggedInUser}, {$inc: {balance: depositAmount}}, function(err, result){ 
        if (err) {
            console.error('Error depositing funds:', err);
            client.close();
            return;
        }
        console.log(`Deposited ${depositAmount} into user ${props.loggedInUser}`);
    });

    //withdraw amount
    var withdrawAmount = 50;
    db.collection('customers').updateOne({email: props.loggedInUser}, {$inc: {balance: -withdrawAmount}}, function(err, result){ 
        if (err) {
            console.error('Error withdrawing funds:', err);
            client.close();
            return;
        }
        console.log(`Withdrawn ${withdrawAmount} from user ${props.loggedInUser}`);
    })

    //get user balance
    db.collection('customers').findOne({ loggedInUser: loggedInUser }, function(err, user) {
        if (err) {
            console.error('Error getting balance:', err);
            client.close();
            return;
        }
        if (!user) {
            console.log('User not found');
            return;
        }
        console.log(`User ${loggedInUser} has a balance of ${user.balance}`);
    });


//Retrieve all documents from the 'customers' collection
    db.collection('customers')
        .find()
        .toArray(function(err, docs) {
            if (err) {
                console.error('Error retrieving documents:', err);
                client.close();
                return;
            }
            // clean up
            console.log('Collection:', docs);
            client.close();            
    });    

});
