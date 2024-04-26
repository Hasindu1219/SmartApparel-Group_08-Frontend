// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EmployeeAddForm from '../../components/EmployeeComponent/EmployeeAddForm';

// const Rest_API_URL = "http://localhost:8080/api/v1/expense/viewExpense";

// const AddEmployeeComponent = () => {
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     axios.get(Rest_API_URL)
//       .then((response) => {
//         setExpenses(response.data.content);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []); // Adding empty dependency array to ensure useEffect runs only once

//   return (
//     <div  style={{ paddingTop: '65px', width: "95%" }}>
//       <h2 className="text-center"><center>Add Employees</center></h2>

//       {/*<GeneralArrivalFormAdd/> 
      
//        <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Expense ID</th>
//             <th scope="col">Date</th>
//             <th scope="col">Description</th>
//             <th scope="col">Category</th>
//             <th scope="col">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.map((expense) => (
//             <tr key={expense.expense_ID}>
//               <td style={{ color: "black" }}>{expense.expense_ID}</td>
//               <td style={{ color: "black" }}>{expense.date}</td>
//               <td style={{ color: "black" }}>{expense.description}</td>
//               <td style={{ color: "black" }}>{expense.category}</td>
//               <td style={{ color: "black" }}>{expense.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}

//     <div>
//       <EmployeeAddForm />
//     </div>

//     </div>
//   );
// };

// export default AddEmployeeComponent;

import { Button, Grid, Input, Typography } from "@mui/material";
import EmployeeAddForm from "../../components/EmployeeComponent/EmployeeAddForm";
import { useState } from "react";
import axios from "axios";

const EmlpoyeeAddPage= () =>{

  const [empID, setEmpID] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nic, setNic] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [accNumber, setaccNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [branchName, setBrnchName] = useState('');
  const [bankName, setBankName] = useState('');

  // States for error messages
  const [idError, setIdError] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [nicError, setNicError] = useState('');
  const [positionError, setPositionError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [dobError, setDobError] = useState('');
  const [accNumberError, setAccNumberError] = useState('');
  const [holderNameError, setHolderNameError] = useState('');
  const [branchNameError, setBranchNameError] = useState('');
  const [bankNameError, setBankNameError] = useState('');

  //entered values for new employee
  const newEmployee = {
    empId:empID,
    name:name,
    address:address,
    nic:nic,
    position:position,
    email:email,
    password:password,
    phoneNumber:phoneNumber,
    dateOfBirth:dob,
    accountNumber:accNumber,
    holderName:holderName,
    branchName:branchName,
    bankName:bankName
  }

  const handleSubmit = async () => {
    // Validation for Employee ID
    if (!empID.trim()) {
      setIdError("Employee ID is required");
    }
    // Validation for Name
    if (!name.trim()) {
      setNameError("Name is required");
    }

    // Validation for Address
    if (!address.trim()) {
      setAddressError("Address is required");
    }

    // Validation for NIC
    if (!nic.trim()) {
      setNicError("NIC is required");
    }

    // Validation for Position
    if (!position.trim()) {
      setPositionError("Position is required");
    }

    // Validation for Email
    if (!email.trim()) {
      setEmailError("Email is required");
    }

    // Validation for Password
    if (!password.trim()) {
      setPasswordError("Password is required");
    }

    // Validation for Phone Number
    if (!phoneNumber.trim()) {
      setPhoneNumberError("Phone Number is required");
    }

    // Validation for Date of Birth
    if (!dob.trim()) {
      setDobError("Date of Birth is required");
    }

    // Validation for Account Number
    if (!accNumber.trim()) {
      setAccNumberError("Account Number is required");
    }

    // Validation for Account Holder Name
    if (!holderName.trim()) {
      setHolderNameError("Account Holder Name is required");
    }

    // Validation for Branch Name
    if (!branchName.trim()) {
      setBranchNameError("Branch Name is required");
    }

    // Validation for Bank Name
    if (!bankName.trim()) {
      setBankNameError("Bank Name is required");
    }

    console.log(newEmployee);

    const response = await axios.post("http://localhost:8080/employee/add",newEmployee);

    if(response.status===202){
      alert("new employee added successfully");
    }else if (response.status === 400) {
      // Duplicate or invalid request
      alert("Employee already exist or invalid request.");
    } else {
      // Other failure cases
      alert("Error occurred while saving employee.");
    }
  }
  
  const handleReset = () => {
      // Resetting all state variables to empty strings
      setEmpID('');
      setName('');
      setAddress('');
      setNic('');
      setPosition('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setDob('');
      setaccNumber('');
      setHolderName('');
      setBrnchName('');
      setBankName('');
    
      // Resetting all error messages to empty strings
      setIdError('');
      setNameError('');
      setAddressError('');
      setNicError('');
      setPositionError('');
      setEmailError('');
      setPasswordError('');
      setPhoneNumberError('');
      setDobError('');
      setAccNumberError('');
      setHolderNameError('');
      setBranchNameError('');
      setBankNameError('');
    
  }

  return (
    <>
    {/* <EmployeeAddForm/> */}

    <Grid container spacing={2} sx={{backgroundColor:'#EEEEEE', margin:'100px', display:'block'}}>
      
      <Grid>
        <Typography component={'h1'} sx={{color:'#000000',fontSize:'30px', textAlign:'center'}}>Add New Employee</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="id" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
          Employee ID:
        </Typography>
        <Input type="text" name="empId" id="id" sx={{ width:'400px'}} value={empID} onChange={ e=>{setEmpID(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{idError && idError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empName" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
          Employee Name:
        </Typography>
        <Input type="text" name="empId" id="empName" sx={{ width:'400px'}} value={name} onChange={ e=>{setName(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{nameError && nameError}</Typography>
      </Grid>
      
      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empAddress" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
          Address:
        </Typography>
        <Input type="text" name="empId" id="empAddress" sx={{ width:'400px'}} value={address} onChange={ e=>{setAddress(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{addressError && addressError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empNic" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
          NIC:
        </Typography>
        <Input type="text" name="empId" id="empNic" sx={{ width:'400px'}} value={nic} onChange={ e=>{setNic(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{nicError && nicError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empPosition" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Position:
        </Typography>
        <Input type="text" name="empId" id="empPosition" sx={{ width:'400px'}} value={position} onChange={ e=>{setPosition(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{positionError && positionError}</Typography>
      </Grid>
      
      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empEmail" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Email:
        </Typography>
        <Input type="email" name="empId" id="empEmail" sx={{ width:'400px'}} value={email} onChange={ e=>{setEmail(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{emailError && emailError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empPassword" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        password:
        </Typography>
        <Input type="password" name="empId" id="empPassword" sx={{ width:'400px'}} value={password} onChange={ e=>{setPassword(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{passwordError && passwordError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empTp" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Phone Number:
        </Typography>
        <Input type="number" name="empId" id="empTp" sx={{ width:'400px'}} value={phoneNumber} onChange={ e=>{setPhoneNumber(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{phoneNumberError && phoneNumberError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empDob" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Date Of Birth:
        </Typography>
        <Input type="date" name="empId" id="empDob" sx={{ width:'400px'}} value={dob} onChange={ e=>{setDob(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{dobError && dobError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empAccNo" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Account Number:
        </Typography>
        <Input type="number" name="empId" id="empAccNo" sx={{ width:'400px'}} value={accNumber} onChange={ e=>{setaccNumber(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{accNumberError && accNumberError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empAccHoldName" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Account Holder Name:
        </Typography>
        <Input type="text" name="empId" id="empAccHoldName" sx={{ width:'400px'}} value={holderName} onChange={ e=>{setHolderName(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{holderNameError && holderNameError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empBrnchName" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Branch Name:
        </Typography>
        <Input type="text" name="empId" id="empBrnchName" sx={{ width:'400px'}} value={branchName} onChange={ e=>{setBrnchName(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{branchNameError && branchNameError}</Typography>
      </Grid>

      <Grid item sx={{ display:'flex'}}>
        <Typography component={'label'} htmlFor="empBankName" sx={{color:'#000000',marginLeft:'20px',fontSize:'16px',width:'100px',display:'block'}}>
        Bank Name:
        </Typography>
        <Input type="text" name="empId" id="empBankName" sx={{ width:'400px'}} value={bankName} onChange={ e=>{setBankName(e.target.value)}}/>
        <Typography sx={{ color: 'red' }}>{bankNameError && bankNameError}</Typography>
      </Grid>
      
      <Grid>
        <Button 
          sx={{margin:'auto',backgroundColor:'#00c6e6',color:'#000000',marginLeft:'15px',marginTop:'20px','&:hover':{Opacity:'0.7',backgroundColor:'#00c6e6'}}}
          onClick={handleSubmit}>
          ADD
        </Button>
        <Button 
          sx={{margin:'auto',backgroundColor:'#00c6e6',color:'#000000',marginLeft:'15px',marginTop:'20px','&:hover':{Opacity:'0.7',backgroundColor:'#00c6e6'}}}
          onClick={handleReset}>
          CLEAR
        </Button>
      </Grid>
      
    </Grid>

    
    </>
    
  );
}

export default EmlpoyeeAddPage;