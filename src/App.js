// import logo from './logo.svg';
import './App.css';
import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import Balance from './components/balance/Balance'
import Expense from './components/expense/Expense';
import NewTransaction from './components/newTransaction/NewTransaction';
import Transactions from './components/transactions/Transactions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {
  // Set state
  const [transactions, setTransactions] = useState([
    {id: 1, text: "Memos", amount: -20, date: "11/04/1990" },
    {id: 2, text: "Memos", amount: -20, date: "11/04/1990" },
    {id: 3, text: "Salary", amount: +20, date: "11/04/1990" },
    
  ])

  const style ={
    textAlign: "center",
  }
  return (

    <Card >
      <CardContent>
        <Typography style={style} variant="h4" color="text.secondary" gutterBottom>Expense Tracker </Typography>

        <Box className="App">

      {/* Transaction saummary */}
      <Box className="summary">
        <Balance transactions={transactions} />
        <Expense transactions={transactions}  />
        
      {/* Add transactions */}
        <NewTransaction transactions={transactions} setTransactions={setTransactions}  />
      </Box>
      
      {/* Transaction history */}
      <Box>
        <Transactions transactions={transactions} setTransactions={setTransactions} />                                                                                                                                                                                                     
      </Box>
    </Box>
    </CardContent>
    </Card>
  );
}

export default App;
