import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview';
import Accounting from './pages/Accounting/Accounting';

import EmployeesHome from './pages/Employee/EmployeesHome';
import EmployeeAdd from './pages/Employee/EmployeeAdd';
import EmployeeUpdate from './pages/Employee/EmployeeUpdate';

// import Sidebar from './components/Sidebar';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Inventory from './pages/Inventory';
import ViewMaterials from './pages/InventoryPage/ViewMaterials';

import CustomerRegister from './pages/CustomerPage/CustomerRegister';
import CustomerViewDelete from './pages/CustomerPage/CustomerDetails';
import CustomerStatus from './pages/CustomerPage/CustomerStatus';
// import Login from './pages/Login';
import RevenueController from './pages/Accounting/RevenueController'
import AddExpense from './pages/Accounting/AddExpense';
import UpdateExpense from './pages/Accounting/UpdateExpense';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';

import ExpenseController from './pages/Accounting/ExpenseController';
import RevenueAdd from './pages/Accounting/AddRevenue';
import UpdateRevenue from './pages/Accounting/UpdateRevenue';
import AttendanceHomePage from './pages/Attendance/AttendanceHomePage';
import AttendanceAddPage from './pages/Attendance/AttendanceAddPage';
import AttendanceUpdatePage from './pages/Attendance/AttendanceUpdatePage';
import SalaryParamAdd from './pages/Salary/SalaryParamAdd';
import AddMaterial from './pages/InventoryPage/AddMaterial';
import SalaryHome from './pages/Salary/SalaryHome';
import SalaryUpdate from './pages/Salary/SalaryUpdate';
import SalaryParamUpdate from './pages/Salary/SalaryParamUpdate';
import SalaryAdd from './pages/Salary/SalaryAdd';

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

        {/* routings inside the employee section */}
        <Route path="/employees" element={<EmployeesHome />}></Route>
        <Route path="/employee/addemployee" element={<EmployeeAdd />}> </Route>
        <Route path="/employee/updateemployee/:Id" element={<EmployeeUpdate />}> </Route>

        {/* routings inside the attendance section */}
        <Route path='/attendance' element={<AttendanceHomePage />}></Route>
        <Route path='/attendance/addattendance' element={<AttendanceAddPage />}> </Route>
        <Route path='/attendance/updateattendance/:Id' element={<AttendanceUpdatePage />}> </Route>

        {/* routings inside Salary section */}
        <Route path="/salary" element={<SalaryHome />}></Route>
        <Route path='/salary/addsalary' element={<SalaryAdd />}></Route>
        <Route path='/salary/updatesalary/:Id' element={<SalaryUpdate />}></Route>
        <Route path='/salary/add-salary-param' element={<SalaryParamAdd />}></Route>
        <Route path='/salary/update-salary-param/:spId' element={<SalaryParamUpdate />}></Route>

        <Route path="/suppliers" element={<Suppliers />}></Route>

        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory/addInventory" element={<AddMaterial />}></Route>
        <Route path="/inventory/viewInventory" element={<ViewMaterials />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>


        <Route path="/customers/customerregister" element={<CustomerRegister />} />
        <Route path="/customerdetails" element={<CustomerViewDelete />} />
        <Route path="/customerstatus" element={<CustomerStatus />} />

        <Route path="/accounting/revenuecontroller" element={<RevenueController />}></Route>
        <Route path="/accounting/addrevenue" element={<RevenueAdd />}></Route>
        <Route path="/accounting/updaterevenue/:id" element={<UpdateRevenue />}></Route>


        {/* <Route path="/accounting/viewexpense" element={<ViewExpense />}></Route> */}
        <Route path="/accounting/expensecontroller" element={<ExpenseController />}></Route>
        <Route path="/accounting/addexpense" element={<AddExpense />}></Route>
        <Route path="/accounting/updateexpense/:id" element={<UpdateExpense />}></Route>
        {/* <Route path="/overview" element={<App />}></Route> */}
      </Routes>
    </BrowserRouter>

  );
}


export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);