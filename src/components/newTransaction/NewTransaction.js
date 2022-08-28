import './NewTransaction.css';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';

const NewTransaction = (props) => {
  const {transactions, setTransactions} = props;
  
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  // handle transaction
  const addTrans = () => {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

if(text !== '' && amount !== ''){

  const newTransaction = {
    id: Math.floor(Math.random() * 1000000),
    text: text,
    amount: +amount,
    date: today
  }
  setTransactions([newTransaction, ...transactions]);
}

  }

  return (
    // Transaction form
    <div component="form"
    sx={{ 
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
     noValidate autoComplete="off">
    <div>
    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="text">Text</InputLabel>
          <Input
            id="text"
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>

    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>

      <Button sx={{ m: 1 }} onClick={addTrans} variant="contained" >Add transaction</Button>
    </div>
    </div>
  )
}

export default NewTransaction