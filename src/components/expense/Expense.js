import './Expense.css';
import { Typography, Card, CardContent } from '@mui/material';

const Expense = () => {
  return (
    <div className='Expense'>
        <Card>  
            <CardContent>
                <Typography>Income</Typography>
                <Typography>25</Typography>
            </CardContent>
        </Card>
        <Card> 
            <CardContent>
                <Typography>Expense</Typography>
                <Typography>25</Typography>
            </CardContent>
        </Card>

    </div>
  )
}

export default Expense