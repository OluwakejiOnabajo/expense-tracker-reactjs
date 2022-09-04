import './Expense.css';
import { Typography, Card, CardContent, Box } from '@mui/material';

const Expense = (props) => { 
    const {transactions} = props;
// console.log(transactions);
// Get all amounts in the transactons
const amount = transactions.map(transaction => transaction.amount);

// Get total income
const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

// Get total expense
const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <Box className='expense'>
        <Card className='card'>  
            {/* Income */}
            <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color: 'blue'}}>${income}</Typography>
            </CardContent>
        </Card>
        
        <Card className='card'>  
            {/* Expense */}
            <CardContent>
                <Typography>Expense</Typography>
                <Typography  style={{color: 'green'}}>${expense}</Typography>
            </CardContent>
        </Card>

    </Box>
  )
}

export default Expense