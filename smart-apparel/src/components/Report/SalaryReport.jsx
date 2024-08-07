import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProfitLossReport.css';

//function to generate the profit and loss report
const SalaryReport = () => {
    const [salarydata, setSalaryData] = useState([]);
  
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
            console.log("Salary data fetched:", response.data.content);
          }
        })
        .catch((error) => {
          console.error("Error fetching salary data:", error);
        });
    }, []);

  return (
    <div className="report-container">
      <header className="report-header">
        <h1>Salary Report</h1>
        <h2>Smart Apparel International (PVT) LTD.</h2>
        <h3>Thudawa, Mathara. </h3>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="report-section">
        <h2>Overview</h2>
        <p>This section provides an overview of the Salaries.</p>
      </section>

      <h2>Summary</h2>

      <section className="printable-section">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <table className="table borderless">
                <thead className="bg-dark text-white">
                  <tr>
                    <th colSpan={7}><h5>Salary Details</h5></th>
                  </tr>
                  <tr>
                    <th>Salary ID</th>
                    <th>Employee ID</th>
                    <th>Period</th>
                    <th>Basic Salary (Rs.)</th>
                    <th>EPF Amount (Rs.)</th>
                    <th>ETF Amount (Rs.)</th>
                    <th>Net Salary (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  {salarydata.map((item) => (
                    <tr key={item.salaryId}>
                      <td>{item.salaryId}</td>
                      <td>{item.empId}</td>
                      <td>{item.yearNMonth}</td>
                      <td>{item.basic}</td>
                      <td>{item.epfByEmployee}</td>
                      <td>{item.etfPayment}</td>
                      <td>{item.netSalary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="report-section">
      </section>
     
      <section className="report-section">
        <h2>Key Metrics</h2>
        <p>This report provides a detailed overview of the salary disbursements for the employees of Smart Apparel International (PVT) LTD.It includes essential salary components such as basic salary, EPF (Employee Provident Fund) contributions, ETF (Employee Trust Fund) contributions, and net salary.</p>
      </section>

      <footer className="report-footer">
        <p>Generated by Smart Apparel International Reporting System</p>
        <p>Date Generated: {new Date().toLocaleDateString()}</p>
      </footer>

      {/* Print button */}
      <button className="print-button hide-on-print" id="printBtn" onClick={handlePrint}>
        Print Report
      </button>
    </div>
  );
};

export default SalaryReport;
