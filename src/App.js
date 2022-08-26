// import logo from './logo.svg';
import './App.css';
import { Typography, Box } from '@mui/material';
import Balance from './components/balance/Balance'
import Expense from './components/expense/Expense';
import NewTransaction from './components/newTransaction/NewTransaction';
import Transactions from './components/transactions/Transactions';

function App() {
  const [transaction, SetTransaction] = usesState([
    
  ])
  return (
    <div className="App">
      <h3>Expense Tracker</h3>
      <Box>
        <Balance />
        <Expense />
      </Box>
      <Box>
        <NewTransaction />
      </Box>
      
      <Box>
        <Transactions />                                                                                                                                                                                                     
      </Box>
    </div>
  );
}

export default App;
