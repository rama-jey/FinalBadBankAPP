
const Transactions = () => {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    const [balance,setBalance] = React.useState(0);

    
    return (
      <Card
        bgcolor="dark"
        header="Transactions"
        status={status}
        body={show ? 
          (<TransactionForm setShow={setShow} setStatus={setStatus} setBalance={setBalance} balance={balance}/>) :
          (<TransactionMsg setShow={setShow} setStatus={setStatus}/>)}
      />
    )
  }
  
  const TransactionMsg = (props) => {
    return (<>
      <h5>Success</h5>
      <button type="button" 
        className="btn btn-light" 
        onClick={() => {
            props.setShow(true);
            props.setStatus('');
        }}>
          Send again
      </button>
    </>);
  } 
  
  const TransactionForm = (props) => {
    const [receiverEmail, setReceiverEmail]   = React.useState('');
    const [amount, setAmount] = React.useState(0);
  
    const handle = () => {
      console.log("remail",receiverEmail)
      fetch(`/account/update/${dispEmail}/${receiverEmail}/${amount}`)
      .then((response) => (response.text()))
      
      .then((data) => {
        console.log("data", amount)
        props.setStatus("Amount transferred: " + amount);
        // props.setAmount(balance - amount);
        props.setShow(false);
        console.log('Deposit response:', data);
      })
      .catch((error) => {
        props.setStatus('Transaction failed');
        console.error('Error depositing:', error);
      });
    }
  
    return(<> 
  
      Receiver Email<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={receiverEmail} 
        onChange={e => setReceiverEmail(e.currentTarget.value)}/><br/>
   
      Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={(e) => setAmount(e.currentTarget.value)}/><br/>
  
      <button type="button" 
        className="btn btn-light" 
        onClick={handle}>Send Money</button>
  
    </>);
  }