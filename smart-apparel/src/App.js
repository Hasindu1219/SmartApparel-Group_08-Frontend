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
import Inventory from './pages/Inventory';
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
import ChangePassword from './pages/Login/changePassword';

import ExpenseController from './pages/Accounting/ExpenseController';
import RevenueAdd from './pages/Accounting/AddRevenue';
import UpdateRevenue from './pages/Accounting/UpdateRevenue';
import AttendanceUpdate from './pages/Attendance/AttendanceUpdate';
import SalaryParamAdd from './pages/Salary/SalaryParamAdd';
import AddMaterial from './pages/InventoryPage/AddMaterial';
import SalaryHome from './pages/Salary/SalaryHome';
import SalaryUpdate from './pages/Salary/SalaryUpdate';
import SalaryParamUpdate from './pages/Salary/SalaryParamUpdate';
import SalaryAdd from './pages/Salary/SalaryAdd';
import AttendanceAdd from './pages/Attendance/AttendanceAdd';
import AttendanceHome from './pages/Attendance/AttendanceHome';

//Web Imports

import WHomepage from './pages/Website/Pages/WHomepage';

import FrockCategory from './pages/Website/Pages/FrockCategory';
import BlouseCategory from './pages/Website/Pages/BlouseCategory';
import TShirtCategory from './pages/Website/Pages/TShirtCategory';
import SkirtCategory from './pages/Website/Pages/SkirtCategory';
import Quotations from './pages/Website/Pages/Quotations';


import ReportController from './pages/Report/ReportController';
import ProfitandLossReport from './pages/Report/ProfitandLossReport';
import DetailedSalaryReport from './pages/Report/DetailedSalaryReport';
import SalaryReport from './pages/Report/SalaryReport';

//Production Manager
import PMOverview from './pages/ProductionManager/Overview';
import PMInventory from './pages/ProductionManager/Inventory';
import PMInventoryView from './pages/ProductionManager/ViewMaterials';
import PMInventoryAdd from './pages/ProductionManager/AddMaterial';
import PMReport from './pages/ProductionManager/ReportController';
import PMProfitandLossReport from './pages/ProductionManager/ProfitandLossReport';
import PMDetailedSalaryReport from './pages/ProductionManager/DetailedSalaryReport';
import PMSalaryReport from './pages/ProductionManager/SalaryReport';
import EmployeeProfile from './pages/Employee/EmployeeProfile';
import HROverview from './pages/HRManager/HROverview';
import HREmployeesHome from './pages/HRManager/HREmployeesHome';
import HRAttendanceHome from './pages/HRManager/HRAttendanceHome';
import HRSalaryHome from './pages/HRManager/HRSalaryHome';
import HRReportController from './pages/HRManager/HRReportController';
import HRProfitandLossReport from './pages/HRManager/HRProfitandLossReport';
import HRDetailedSalaryReport from './pages/HRManager/HRDetailedSalaryReport';
import HRSalaryReport from './pages/HRManager/HRSalaryReport';
import HREmployeeAdd from './pages/HRManager/HREmployeeAdd';
import HREmployeeUpdatePage from './pages/HRManager/HREmployeeUpdate';
import HRAttendanceAdd from './pages/HRManager/HRAttendanceAdd';
import HRAttendanceUpdate from './pages/HRManager/HRAttendanceUpdate';
import HRSalaryAdd from './pages/HRManager/HRSalaryAdd';
import HRSalaryUpdate from './pages/HRManager/HRSalaryUpdate';
import HRSalaryAddPage from './pages/HRManager/HRSalaryParamAdd';
import HRSalaryParamUpdate from './pages/HRManager/HRSalaryParamUpdate';


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

        {/*EMPLOYEE*/}
        <Route path="/employees" element={<EmployeesHome />}></Route>
        <Route path="/employee/addemployee" element={<EmployeeAdd />}> </Route>
        <Route path="/employee/updateemployee/:Id" element={<EmployeeUpdate />}> </Route>
        <Route path="/profile" element={<EmployeeProfile/>}/>

        {/*SALARY*/}
        <Route path="/salary" element={<SalaryHome />}></Route>
        <Route path='/salary/addsalary' element={<SalaryAdd />}></Route>
        <Route path='/salary/updatesalary/:Id' element={<SalaryUpdate />}></Route>
        <Route path='/salary/add-salary-param' element={<SalaryParamAdd />}></Route>
        <Route path='/salary/update-salary-param/:spId' element={<SalaryParamUpdate />}></Route>

        {/*ATTENDANCE*/}
        <Route path='/attendance' element={<AttendanceHome/>}></Route>
        <Route path='/attendance/addattendance' element={<AttendanceAdd/>}> </Route>
        <Route path='/attendance/updateattendance/:Id' element={<AttendanceUpdate />}> </Route>
        

        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/inventory/addInventory" element={<AddMaterial />}></Route>
        <Route path="/inventory/viewInventory" element={<ViewMaterials />}></Route>

        {/* routings inside the login section */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>

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

        {/* routings inside the accounting section */}
        <Route path="/accounting/revenuecontroller" element={<RevenueController />}></Route>
        <Route path="/accounting/addrevenue" element={<RevenueAdd />}></Route>
        <Route path="/accounting/updaterevenue/:id" element={<UpdateRevenue />}></Route>

        {/* routings inside the report section */}
        <Route path="/report" element={<ReportController />}></Route>
        <Route path="/report/ProfitandLoss" element={<ProfitandLossReport />}></Route>
        <Route path="/report/DetailedSalaryReport" element={<DetailedSalaryReport />}></Route>
        <Route path="/report/SalaryReport" element={<SalaryReport />}></Route>


        {/* <Route path="/accounting/viewexpense" element={<ViewExpense />}></Route> */}
        <Route path="/accounting/expensecontroller" element={<ExpenseController />}></Route>
        <Route path="/accounting/addexpense" element={<AddExpense />}></Route>
        <Route path="/accounting/updateexpense/:id" element={<UpdateExpense />}></Route>
        {/* <Route path="/overview" element={<App />}></Route> */}
        
        {/* website */}
        <Route path="/WHomepage" element={<WHomepage />}></Route>
        <Route path="/Frocks" element={<FrockCategory/>}></Route> 
        <Route path="/Blouses" element={<BlouseCategory />}></Route>
        <Route path="/T-Shirts" element={<TShirtCategory />}></Route>
        <Route path="/Skirts" element={<SkirtCategory />}></Route>
        <Route path="/Quotations" element={<Quotations />}></Route>

        {/* Production Manager */}
        <Route path="/PM/Overview" element={<PMOverview />}></Route>
        <Route path="/PM/Inventory" element={<PMInventory />}></Route>
        <Route path="/PM/Inventory/ViewMaterials" element={<PMInventoryView />}></Route>
        <Route path="/PM/Inventory/AddMaterials" element={<PMInventoryAdd />}></Route>
        <Route path="/PM/Report" element={<PMReport />}></Route>
        <Route path="/PM/report/ProfitandLoss" element={<PMProfitandLossReport />}></Route>
        <Route path="/PM/report/DetailedSalaryReport" element={<PMDetailedSalaryReport />}></Route>
        <Route path="/PM/report/SalaryReport" element={<PMSalaryReport />}></Route>

        {/* HR Manager */}
        <Route path="/HR/Overview" element={<HROverview/>}></Route>
        <Route path="/HR/Employees" element={<HREmployeesHome/>}></Route>
        <Route path="/HR/employee/addemployee" element={<HREmployeeAdd />}> </Route>
        <Route path="/HR/employee/updateemployee/:Id" element={<HREmployeeUpdatePage/>}> </Route>
        <Route path="/HR/Attendance" element={<HRAttendanceHome/>}></Route>
        <Route path='/HR/attendance/addattendance' element={<HRAttendanceAdd/>}> </Route>
        <Route path='/HR/attendance/updateattendance/:Id' element={<HRAttendanceUpdate />}> </Route>
        <Route path="/HR/Salary" element={<HRSalaryHome/>}></Route>
        <Route path='/HR/salary/addsalary' element={<HRSalaryAdd />}></Route>
        <Route path='/HR/salary/updatesalary/:Id' element={<HRSalaryUpdate />}></Route>
        <Route path='/HR/salary/add-salary-param' element={<HRSalaryAddPage />}></Route>
        <Route path='/HR/salary/update-salary-param/:spId' element={<HRSalaryParamUpdate />}></Route>

        <Route path="/HR/Report" element={<HRReportController />}></Route>
        <Route path="/HR/report/ProfitandLoss" element={<HRProfitandLossReport />}></Route>
        <Route path="/HR/report/DetailedSalaryReport" element={<HRDetailedSalaryReport />}></Route>
        <Route path="/HR/report/SalaryReport" element={<HRSalaryReport />}></Route>
        

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  );
}


export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);