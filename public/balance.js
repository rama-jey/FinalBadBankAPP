const Balance = () => {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        (<BalanceForm setShow={setShow} setStatus={setStatus}/>) :
        (<BalanceMsg setShow={setShow} setStatus={setStatus}/>)}
    />
  )
}

const BalanceMsg = (props) => {
  return(<>
    <h5>Success</h5>
    <button type="button" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

const BalanceForm = (props) => {


  const handle = () => {

  
    console.log("props", props)
    fetch(`/account/getBalance/${dispEmail}`)
      .then((response) => response.json())
      .then((data) => {
        props.setStatus(`Balance: $ ${data.balance}`);
        props.setShow(false);
        console.log('Balance response:', data);
      })
      .catch((error) => {
        props.setStatus('Error fetching balance');
        console.error('Error fetching balance:', error);
      });
  }

  return (<>
    
    <button type="button" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}


