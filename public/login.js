

var dispEmail = ''

const Login = () => {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        (<LoginForm setShow={setShow} setStatus={setStatus}/>) :
        (<LoginMsg setShow={setShow} setStatus={setStatus}/>)
      }
    />
  ) 
}

const LoginMsg = (props) => {
  return (
    <>
      
      <h5>Welcome back! {props.loggedInUser}</h5>
      {/* Would you like to:
      <a href="#/deposit/">
        <button type="button" className="btn btn-light">Deposit Money</button>
      </a>
      <a href="#/withdraw/">
        <button type="button" className="btn btn-light" >Withdraw Money</button>
      </a> */}
    </>
  );
}

const LoginForm = (props) => {
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess] = React.useState('false');


  const handle = () => {
    
    
    const auth  = firebase.auth();
    auth.signInWithEmailAndPassword(email,password)
       .then((userCredential) => {
          dispEmail = email;
          nshow = 1
          ReactDOM.render(
            <Spa/>,
            document.getElementById('root')
          );
          setSuccess(true);
          // setLoggedInUser(email);
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        })

    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });

   
  }


  return (
  <form>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      required
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      autoComplete="new-password"
      required
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </form>);
}

// export default Login;