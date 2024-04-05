import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview';
import Accounting from './pages/Accounting/Accounting';
import Employees from './pages/Employees';
import Sidebar from './components/Sidebar';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Inventory from './pages/Inventory';
import CustomerRegister from './pages/CustomerPage/CustomerRegister';
import CustomerViewDelete from './pages/CustomerPage/CustomerDetails';
import CustomerStatus from './pages/CustomerPage/CustomerStatus';
// import Login from './pages/Login';
import AddExpense from './pages/Accounting/AddExpense'
import ViewExpense from './pages/Accounting/ViewExpense';
import UpdateExpense from './pages/Accounting/UpdateExpense';
import Login from './pages/Login/Login';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/accounting" element={<Accounting />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/suppliers" element={<Suppliers />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/customerregister" element={<CustomerRegister/>} />
        <Route path="/customerdetails" element={<CustomerViewDelete />} />
        <Route path="/customerstatus" element={<CustomerStatus />} />
        <Route path="/accounting/addexpense" element={<AddExpense />}></Route>
        <Route path="/accounting/viewexpense" element={<ViewExpense />}></Route>
        <Route path="/accounting/updateexpense" element={<UpdateExpense />}></Route>
        {/* <Route path="/overview" element={<App />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);