import './Expense.css';
import { Typography, Card, CardContent } from '@mui/material';
import NewTransaction from '../newTransaction/NewTransaction';

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
    <div className='Expense'>
        <Card>  
            {/* Insome */}
            <CardContent>
                <Typography>Income</Typography>
                <Typography style={{color: 'blue'}}>N{income}</Typography>
            </CardContent>
        </Card>
        
        <Card> 
            {/* Expense */}
            <CardContent>
                <Typography>Expense</Typography>
                <Typography  style={{color: 'green'}}>N{expense}</Typography>
            </CardContent>
        </Card>

    </div>
  )
}

export default Expense