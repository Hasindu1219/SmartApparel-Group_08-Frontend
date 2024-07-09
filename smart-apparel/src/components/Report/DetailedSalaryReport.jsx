import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProfitLossReport.css';

const DetailedSalaryReport = () => {
  const [salarydata, setSalaryData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [salaryDates, setSalaryDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredSalaryData, setFilteredSalaryData] = useState(null);

  const handlePrint = () => {
    document.querySelectorAll('.hide-on-print').forEach(section => {
      section.style.display = 'none';
    });
    window.print();
    document.querySelectorAll('.hide-on-print').forEach(section => {
      section.style.display = 'block';
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/salary/view")
      .then((response) => {
        if (response.data && response.data.content) {
          setSalaryData(response.data.content);
          const uniqueEmployees = [...new Set(response.data.content.map(item => item.empId))];
          setEmployees(uniqueEmployees);
          console.log("Salary data fetched:", response.data.content);
        }
      })
      .catch((error) => {
        console.error("Error fetching salary data:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedEmployee) {
      const dates = salarydata.filter(item => item.empId === selectedEmployee).map(item => item.yearNMonth);
      setSalaryDates(dates);
    } else {
      setSalaryDates([]);
    }
  }, [selectedEmployee, salarydata]);

  useEffect(() => {
    if (selectedEmployee && selectedDate) {
      const data = salarydata.find(item => item.empId === selectedEmployee && item.yearNMonth === selectedDate);
      setFilteredSalaryData(data);
    } else {
      setFilteredSalaryData(null);
    }
  }, [selectedEmployee, selectedDate, salarydata]);

  return (
    <div className="report-container">

      <div className="filters hide-on-print">
        <label>
          Select Employee:
          <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
            <option value="">--Select Employee--</option>
            {employees.map((emp, index) => (
              <option key={index} value={emp}>{emp}</option>
            ))}
          </select>
        </label>
        <label>
          Select Salary Date:
          <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} disabled={!selectedEmployee}>
            <option value="">--Select Date--</option>
            {salaryDates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
        </label>
      </div>

      <header className="report-header">
        <h1>Detailed Salary Report</h1>
        <h2>Smart Apparel International (PVT) LTD.</h2>
        <h3>Thudawa, Mathara.</h3>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="report-section">
        <h2>Overview</h2>
        {filteredSalaryData && (
          <div>
            <p>Salary ID: {filteredSalaryData.salaryId}</p>
            <p>Employee ID: {filteredSalaryData.empId}</p>
            <p>Period: {filteredSalaryData.yearNMonth}</p>
          </div>
        )}
      </section>

      <h2>Summary</h2>

      <section className="printable-section">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <table className="table borderless">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Description</th>
                    <th>Amount(Rs.)</th>
                  </tr>
                </thead>
                {/* Render salary details */}
                <tbody>
                  {filteredSalaryData && (
                    <>
                      <tr>
                        <td>Basic Salary</td>
                        <td>{filteredSalaryData.basic}</td>
                      </tr>
                      <tr>
                        <td>Transportation Allowance</td>
                        <td>{filteredSalaryData.allowance1}</td>
                      </tr>
                      <tr>
                        <td>Other Allowance</td>
                        <td>{filteredSalaryData.allowance2}</td>
                      </tr>
                      <tr>
                        <th></th>
                      </tr>
                      <tr>
                        <th colSpan={2}>Deductions</th>
                      </tr>
                      <tr>
                        <td>EPF by Employee</td>
                        <td>{filteredSalaryData.epfByEmployee}</td>
                      </tr>
                      <tr>
                        <td>ETF by Employee</td>
                        <td>{filteredSalaryData.etfPayment}</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="report-section">
        {filteredSalaryData && (
          <p style={{ textAlign: "right", fontSize: 25 }}>Net Salary: <b>Rs. {filteredSalaryData.netSalary.toFixed(2)}</b></p>
        )}
      </section>

      <section className="report-section">
        <h2>Key Metrics</h2>
        <p>The Detailed Salary Report provides a comprehensive overview of the salary payments made to employees of Smart Apparel International (PVT) LTD.</p>
      </section>

      <footer className="report-footer">
        <p>Generated by Smart Apparel International Reporting System</p>
        <p>Date Generated: {new Date().toLocaleDateString()}</p>
      </footer>

      <button className="print-button hide-on-print" id="printBtn" onClick={handlePrint}>
        Print Report
      </button>
    </div>
  );
};

export default DetailedSalaryReport;
