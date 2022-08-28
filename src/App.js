// import logo from './logo.svg';
import './App.css';
import { Typography, Box } from '@mui/material';
import { useState } from 'react';
import Balance from './components/balance/Balance'
import Expense from './components/expense/Expense';
import NewTransaction from './components/newTransaction/NewTransaction';
import Transactions from './components/transactions/Transactions';

function App() {
  // Set state
  const [transactions, setTransactions] = useState([
    {id: 1, text: "Memos", amount: -20, date: "11/04/1990" },
    {id: 2, text: "Memos", amount: -20, date: "11/04/1990" },
    {id: 3, text: "Salary", amount: +20, date: "11/04/1990" },
    
  ])
  return (
    <div className="App">
      <h3>Expense Tracker</h3>

      {/* Transaction saummary */}
      <Box>
        <Balance transactions={transactions} />
        <Expense transactions={transactions}  />
      </Box>

      {/* Add transactions */}
      <Box>
        <NewTransaction transactions={transactions} setTransactions={setTransactions}  />
      </Box>
      
      {/* Transaction history */}
      <Box>
        <Transactions transactions={transactions} setTransactions={setTransactions} />                                                                                                                                                                                                     
      </Box>
    </div>
  );
}

export default App;
