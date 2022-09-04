import './Transactions.css'
import Transaction from '../transaction/Transaction';
import {Box, Typography, Divider} from '@mui/material';

const Transactions = (props) => {
  const {transactions, setTransactions} = props;

  return (
    <Box>
      <Typography variant="h6">Transaction History</Typography>
      <Divider />
      {/* Get all transactions */}
      <table className='list'>
        <tbody>
        { transactions.length > 0 ?
        transactions.map((transaction, i) => (
       <Transaction key={i} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
        )) : 'No transaction found!'
        }
        </tbody>
        </table>
      </Box>
  )
}

export default Transactions