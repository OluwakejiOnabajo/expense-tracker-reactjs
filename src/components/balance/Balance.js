import './Balance.css';
import { Box, Typography } from '@mui/material';

const Balance = (props) => {
  const {transactions} = props;

  // Get all amounts from transations
  const amount = transactions.map(transaction => transaction.amount);

  // Get the account balance
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
  return (
    <Box>
        <Typography>Balance: N{total}</Typography>

    </Box>
  )
}

export default Balance