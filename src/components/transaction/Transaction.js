import './Transaction.css';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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

  const style ={
  marginTop: "10px", 
  display: "flex", 
  justifyContent: "space-between", 
  border: "1px solid blue",
  background: bg, 
  color: color,
  borderRadius: "3px",
  padding: "5px 10px"
}

//   Delete transaction
  const deleteTrans = (id) =>{
    setTransactions(transactions.filter(transaction => transaction.id !== id));

    // Alert
  toast.success("Details deleted successfully!", {
    theme: "colored",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
  

  return (
    // Single transaction
        <tr style={style}>
        <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.date}</td>
          <td><DeleteIcon className='icon' onClick={() => deleteTrans(transaction.id)} /> </td>
        </tr>
  )
}

export default Transaction