var nshow = 0;

var NavBar = () => {

  const handle = () => {
    nshow = 0
    ReactDOM.render(
      <Spa/>,
      document.getElementById('root')
    );
  }

if (nshow == 0){
  
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

else {

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/transactions/">Transactions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handle}>Logout</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link">{dispEmail}</a>
          </li>             
        </ul>
      </div>
    </nav>
  );
  
}
}

// export var NavBar;