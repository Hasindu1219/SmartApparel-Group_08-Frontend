import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview';
import Accounting from './pages/Accounting/Accounting';

import Employees from './pages/Employee/Employees';
import EmployeeAdd from './pages/Employee/EmployeeAdd';
import EmployeeUpdate from './pages/Employee/EmployeeUpdate';
import EmployeeDelete from './pages/Employee/EmployeeDelete';

// import Sidebar from './components/Sidebar';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Inventory from './pages/Inventory';
import Add_Material from './pages/InventoryPage/AddMaterial';
import ViewMaterials from './pages/InventoryPage/ViewMaterials';

import CustomerHome from './pages/CustomerPage/CustomerHome';
import CustomerRegister from './pages/CustomerPage/CustomerRegister';
import CustomerViewDelete from './pages/CustomerPage/CustomerDetails';
import CustomerStatus from './pages/CustomerPage/CustomerStatus';

import OrderRegister from './pages/OrderPage/OrderRegister';
import OrderDetails from './pages/OrderPage/OrderDetails';
import OrderHome from './pages/OrderPage/OrderHome';
import CheckInventory from './pages/OrderPage/CheckInventory';
import MainModels from './pages/OrderPage/MainModels';
import ModelsPage from './pages/OrderPage/ModelsPage';
import CustomModel from './pages/OrderPage/CustomModel';
import AddNewModel from './pages/OrderPage/AddNewModel';
import OrderShipment from './pages/OrderPage/OrderShipment';       
import LineSupervisorOrderHome from './pages/OrderPage/LineSupervisorOrderHome';
import LineSupervisorOrderDetails from './pages/OrderPage/LineSupervisorOrderDetails';
import LineSupervisorOrderCoveredAmount from './pages/OrderPage/LineSupervisorOrderCoveredAmount';
import LineSupervisorCoveredAmountForm from './pages/OrderPage/LineSupervisorCoveredAmountForm';

// import Login from './pages/Login';
import RevenueController from './pages/Accounting/RevenueController'
import AddExpense from './pages/Accounting/AddExpense';
import UpdateExpense from './pages/Accounting/UpdateExpense';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';

import ExpenseController from './pages/Accounting/ExpenseController';
import RevenueAdd from './pages/Accounting/AddRevenue';
import UpdateRevenue from './pages/Accounting/UpdateRevenue';
import SalaryHomePage from './pages/Salary/SalaryHomePage';
import AttendanceHomePage from './pages/Attendance/AttendanceHomePage';
import AttendanceAddPage from './pages/Attendance/AttendanceAddPage';
import AttendanceUpdatePage from './pages/Attendance/AttendanceUpdatePage';

import ReportController from './pages/Report/ReportController';
import ReportStructure from './pages/Report/ReportStructure';
import ProfitandLossReport from './pages/Report/ProfitandLossReport';


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
        <Route path="/salary" element={<SalaryHomePage/>}></Route>
        <Route path='/attendance' element={<AttendanceHomePage/>}></Route>

        {/* routings inside the employee section */}
        <Route path="/employee/addemployee" element={<EmployeeAdd/>}> </Route>
        <Route path="/employee/updateemployee/:Id" element={<EmployeeUpdate/>}> </Route>
        <Route path="/employee/deleteemployee" element={<EmployeeDelete/>}> </Route>

        {/* routings inside the attendance section */}
        <Route path='/attendance/addattendance' element={<AttendanceAddPage/>}> </Route>
        <Route path='/attendance/updateattendance/:Id' element={<AttendanceUpdatePage/>}> </Route>
        {/* routings inside Salary section */}


        <Route path="/suppliers" element={<Suppliers />}></Route>

        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory/addInventory" element={<Add_Material />}></Route>
        <Route path="/inventory/viewInventory" element={<ViewMaterials />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

        {/* routings inside the customer section */}
        <Route path="/customerhome" element={<CustomerHome/>} />
        <Route path="/customerregister" element={<CustomerRegister/>} />
        <Route path="/customerdetails" element={<CustomerViewDelete />} />
        <Route path="/customerstatus" element={<CustomerStatus />} />

        {/* routings inside the order section */}
        <Route path="/orderregister" element={<OrderRegister />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/orderhome" element={<OrderHome />} />
        <Route path="/checkinventory" element={<CheckInventory />} />
        <Route path="/mainmodels" element={<MainModels />} />
        <Route path="/ordermodels" element={<ModelsPage />} />
        <Route path="/customizemodels" element={<CustomModel />} />
        <Route path="/addNewModel" element={<AddNewModel />} />
        <Route path="/ordershipment" element={<OrderShipment />} />  
        <Route path="/linesupervisororderhome" element={<LineSupervisorOrderHome />} />
        <Route path="/linesupervisororderdetails" element={<LineSupervisorOrderDetails />} />
        <Route path="/linesupervisorordercoveredamount" element={<LineSupervisorOrderCoveredAmount />} />
        <Route path="/linesupervisorcoveredamountform" element={<LineSupervisorCoveredAmountForm />} />

        <Route path="/accounting/revenuecontroller" element={<RevenueController />}></Route>
        <Route path="/accounting/addrevenue" element={<RevenueAdd />}></Route>
        <Route path="/accounting/updaterevenue/:id" element={<UpdateRevenue />}></Route>

        <Route path="/report" element={<ReportController />}></Route>
        <Route path="/report/reportStructure" element={<ReportStructure />}></Route>
        <Route path="/report/ProfitandLoss" element={<ProfitandLossReport />}></Route>


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