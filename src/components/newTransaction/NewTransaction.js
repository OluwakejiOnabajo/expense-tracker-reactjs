import './NewTransaction.css';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const NewTransaction = () => {
  return (
    <div component="form"
    sx={{ 
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
     noValidate autoComplete="off">
    <div>
        <TextField fullWidth label="ee" variant="standard" />
        <TextField label="ee" variant="standard" />
    
     
      <Button variant='container'>Add transaction</Button>
    </div>
    </div>
  )
}

export default NewTransaction