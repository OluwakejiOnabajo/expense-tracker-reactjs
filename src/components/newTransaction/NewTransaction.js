import './NewTransaction.css';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

const NewTransaction = (props) => {
  const {transactions, setTransactions} = props;
  
  const [text, setText] = useState();
  const [amount, setAmount] = useState();

  // handle transaction
  const addTrans = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
      date: '12222'
    }
    setTransactions([newTransaction, ...transactions]);
  }

  return (
    // Transaction form
    <div component="form"
    sx={{ 
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
     noValidate autoComplete="off">
    <div>
        <TextField label="ee" type="text" variant="standard" onChange={(e) => setText(e.target.value)} />
        <TextField label="ee" type="number" variant="standard" onChange={(e) => setAmount(e.target.value)} />
      <Button onClick={addTrans} >Add transaction</Button>
    </div>
    </div>
  )
}

export default NewTransaction