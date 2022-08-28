import './Transactions.css'
import Transaction from '../transaction/Transaction';
import {Box, Typography, Divider, List} from '@mui/material';

const Transactions = (props) => {
  const {transactions, setTransactions} = props;

  return (
    <Box className="history">
      <Typography variant="h6">Transaction History</Typography>
      <Divider />
      {/* Get all transactions */}
      <List>
        { transactions.length > 0 ?
        transactions.map((transaction, i) => (
       <Transaction key={i} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
        )) : 'No transaction found!'
        }
        </List>
      </Box>
  )
}

export default Transactions