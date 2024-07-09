import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProfitLossReport.css';

const DetailedSalaryReport = () => {
  const [salarydata, setSalaryData] = useState([]);
  const [netSalary, setnetSalary] = useState([]);

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
        <h1>Detailed Salary Report</h1>
        <h2>Smart Apparel International (PVT) LTD.</h2>
        <h3>Thudawa, Mathara.</h3>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="report-section">
        <h2>Overview</h2>
        {salarydata.length > 0 && (
          <div>
            <p>Salary ID: {salarydata[0].salaryId}</p>
            <p>Employee ID: {salarydata[0].empId}</p>
            <p>Period: {salarydata[0].yearNMonth}</p>
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
                  {salarydata.map((item, index) => (
                    <tr key={index}>
                      <td>Basic Salary</td>
                      <td>{item.basic}</td>
                    </tr>
                  ))}
                    <tr>
                      <td>Transportation Allowance</td>
                      <td>800.00</td>
                    </tr>
                    <tr>
                      <td>Other Allowance</td>
                      <td>600.00</td>
                    </tr>
                    <tr>
                      <th></th>
                    </tr>
                    <tr>
                      <th colSpan={2}>Deductions</th>
                    </tr>
                    {salarydata.map((item, index) => (
                      <tr key={index}>
                        <td>EPF by Employee</td>
                        <td>{item.epfByEmployee}</td>
                      </tr>
                    ))}
                    {salarydata.map((item, index) => (
                      <tr key={index}>
                        <td>ETF by Employee</td>
                        <td>{item.etfPayment}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="report-section">
      {salarydata.map((item, index) => (
        <p key={index} style={{ textAlign: "right", fontSize: 25 }}>Net Salary: <b>Rs. {(salarydata[0].netSalary + 1400).toFixed(2)}</b></p>
      ))}
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
