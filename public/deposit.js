
const Deposit = () => {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  
  return (
   
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        (<DepositForm setShow={setShow} setStatus={setStatus} />) :
        (<DepositMsg setShow={setShow} setStatus={setStatus}/>)}
    />
  )
   
}

const DepositMsg = (props) => {
  return (<>
    <h5>Success</h5>
    <button type="button" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

const DepositForm = (props) => {
  const [amount, setAmount] = React.useState('');

  const handle = () => {
    fetch(`/account/update/${dispEmail}/${amount}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", amount)
        props.setStatus("Amount deposited: " + amount);
        props.setShow(false);
        console.log('Deposit response:', data);
        
      })
      .catch((error) => {
        props.setStatus('Deposit failed');
        console.error('Error depositing:', error);
      });
  }

  return(<>

    {/* Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/> */}
 
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={(e) => setAmount(e.currentTarget.value)}/><br/>

    <button type="button" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}