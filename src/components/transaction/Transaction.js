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

  const style ={marginTop: "10px", 
  display: "flex", 
  justifyContent: 
  "space-between", 
  width: "100%", 
  border: "1px solid blue",
  background: bg, color: color}

  const style2 = {
    margin: "3px 30px",
  }

  const iconDel ={
    cursor: "pointer",
  }

//   Delete transaction
  const deleteTrans = (id) =>{
    // console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }

  return (
    // Single transaction
         <ListItem className='lsit-item' style={style}>
         <ListItemText style={style2}>{transaction.text}</ListItemText>
         <ListItemText style={style2}>{transaction.amount}</ListItemText>
         <ListItemText style={style2}>{transaction.date}</ListItemText>
         <ListItemText style={style2}><DeleteIcon style={iconDel} onClick={() => deleteTrans(transaction.id)} /> </ListItemText>
          </ListItem>
  )
}

export default Transaction