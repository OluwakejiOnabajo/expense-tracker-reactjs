import React from 'react'
import {ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Transaction = (props) => {
  const {transaction, transactions, setTransactions} = props;
//   Set colours for income and expense
  let bg; let color;
  if (transaction.amount > 0) { 
    bg = 'white';
    color = 'Blue';
  } else {
    bg = 'Blue';
   color = 'White';
  }

//   Delete transaction
  const deleteTrans = (id) =>{
    // console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    // Single transaction
         <ListItem style={{background: bg, color: color}}>
         <ListItemText>{transaction.text}</ListItemText>
         <ListItemText>{transaction.amount}</ListItemText>
         <ListItemText>{transaction.date}</ListItemText>
         <ListItemText><DeleteIcon onClick={() => deleteTrans(transaction.id)} /> </ListItemText>
          </ListItem>
  )
}

export default Transaction