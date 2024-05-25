//initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9OqgPThVnlJQgElAMW-W5x-NAptTAukg",
  authDomain: "bad-bank-f947a.firebaseapp.com",
  databaseURL: "https://bad-bank-f947a-default-rtdb.firebaseio.com",
  projectId: "bad-bank-f947a",
  storageBucket: "bad-bank-f947a.appspot.com",
  messagingSenderId: "119088265939",
  appId: "1:119088265939:web:2d6cb383004cf1ff1cb226"
};

firebase.initializeApp(firebaseConfig);

// import { Card } from "react-bootstrap";
// import React from 'react';
// import { useState } from 'react';

const CreateAccount = () => {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus}/> : 
        <CreateMsg setShow={setShow} setStatus={setStatus} />}
    />
  )
}

const CreateMsg = (props) => {
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}


const CreateForm = (props) => {
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handle = () => {
    console.log(name, email, password);
    const auth  = firebase.auth();
    // if(name.length > 2 && email.length > 4 && password.length > 7){
    auth.createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
        var user = userCredential.user;
        console.log('User Created:', user);
        props.setStatus("");
        props.setShow(false);
      })
     .catch((error) => {
        var errorMessage = error.message;
        console.log('Error creating user:', errorMessage);
        props.setStatus(errorMessage);
        setErrorMessage(errorMessage);
      });
    //}
 
      
      //data to display in alldata page
      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
        try{
          var res  = await fetch(url);
          var data = await res.json();    
          console.log(data);      
        }
        catch(err){
          console.log("Failed to fetch user data:", err);
        }  
      })();
      // props.setShow(false);

      
      // (async () => {
      //   try {
      //     var res = await fetch(`/account/create/${name}/${email}`);
      //     var data = await res.json(url);
      //     console.log(data);
      //   } catch (error) {
      //     console.error("Failed to fetch user data:", error);
      //   }
      // })();
      
    }    

   
  return (
  
  <form>
    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} required/><br/>

    Email address<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)} required/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      autoComplete="new-password"
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)} required/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>
  </form>);
}

// export default CreateAccount;