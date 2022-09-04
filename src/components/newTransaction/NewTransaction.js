import './NewTransaction.css';
import { useState } from 'react';
import { RadioGroup, FormControl, InputLabel, FormLabel, Button, Radio, FormControlLabel, OutlinedInput, FormHelperText } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const NewTransaction = (props) => {
  const {transactions, setTransactions} = props;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;

  const [formValues, setFormValues] = useState({
    description:{
      value:'',
      error:false,
      errorMessage:'You must enter a description'
    },
    amount:{
      value:'',
      error:false,
      errorMessage:'You must enter an amount'
    },
     type:{
      value:'',
      error:false,
      errorMessage:'You must select a type'
    },
    date:{
     value: today,
     error:false,
     errorMessage:''
   },
  })

  // Handle click
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]:{ ...formValues[name], value } });

    if(value === ''){
      setFormValues({ ...formValues, [name]:{ ...formValues[name], value, error:true }});
    }else{
      setFormValues({ ...formValues, [name]:{ ...formValues[name], value, error:false }});
    }

  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = {...formValues}

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if(currentValue === ''){
        newFormValues = { ...newFormValues, [currentField]:{ ...newFormValues[currentField], error:true }}
      }else{
        newFormValues = { ...newFormValues, [currentField]:{ ...newFormValues[currentField], error:false }}
      }
    }

    setFormValues(newFormValues);

    if( formValues.description.value !== '' && formValues.description.value !== '' && formValues.type.value !== ''){
      if(formValues.type.value === 'expense'){
        formValues.amount.value = -formValues.amount.value;
      }else{
        formValues.amount.value = +formValues.amount.value;
      }

  // handle transaction
  const newTransaction = {
    id: Math.floor(Math.random() * 1000000),
    description: formValues.description.value,
    amount: formValues.amount.value,
    date: today
  }
  setTransactions([newTransaction, ...transactions]);

  // Clear form inputs
    const value = '';
    const name = e.target;
      formValues.description.value = '';
      formValues.amount.value = '';
      formValues.type.checked = false;
      setFormValues({ ...formValues, [name]:{ ...formValues[name], value, error:true }});


  // Success alert
  toast.success("Details added successfully!", {
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
  }


  return (
    // Transaction form
    <div className='new-trans' sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}} >
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
    <FormControl error={formValues.description.error} fullWidth sx={{ m: 1 }} >
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput 
          className='description'
          label="description"
          id="description"
          name="description"
            type="text"
            value={formValues.description.value}
            aria-labelledby='description-error'
            onChange={handleChange}
          />
          {formValues.description.error && formValues.description.errorMessage ? <FormHelperText id="description-error">{formValues.description.errorMessage}</FormHelperText> : ""}
        </FormControl>

    <FormControl error={formValues.amount.error} fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <OutlinedInput
          label="amount"
          id="amount"
          name="amount"
            type="number"
            value={formValues.amount.value}
            aria-labelledby='amount-error'
            onChange={handleChange}
          />
           {formValues.amount.error && formValues.amount.errorMessage ? <FormHelperText id="amount-error">{formValues.amount.errorMessage}</FormHelperText> : ""}
          </FormControl>

    <FormControl error={formValues.type.error} fullWidth sx={{ m: 1 }} >
          <FormLabel style={{ float: "left"}} id="type">Type</FormLabel>
          <RadioGroup row name='type'
            aria-labelledby='type-error'
             onChange={handleChange} >
            <FormControlLabel value="income" control={<Radio />} label="income" />
            <FormControlLabel value="expense" control={<Radio />} label="expense" />
          </RadioGroup>
          {formValues.type.error && formValues.type.errorMessage ? <FormHelperText id="type-error">{formValues.type.errorMessage}</FormHelperText> : ""}
        </FormControl>

      <Button type="submit" sx={{ m: 1 }} variant="contained" >Add transaction</Button>
    </form>
   
    </div>
  )
}

export default NewTransaction