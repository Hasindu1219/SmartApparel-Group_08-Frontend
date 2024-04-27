import './EmployeeTable3.css';

export default function EmployeeTable3(){
    return (
            <table className="table-container">
                <thead className="table-header">
                    <tr>
                    <th>Employee Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>NIC</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone Number</th>
                    <th>Date OF Birth</th>
                    <th>Bank Account Number</th>
                    <th>Holder Name</th>
                    <th>Branch</th>
                    <th>Bank</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>emp001</td>
                    <td>Siripala Jayaweera</td>
                    <td>Kamburupitiya</td>
                    <td>912535642v</td>
                    <td>helper</td>
                    <td>siripala@gmail.com</td>
                    <td>siri@91</td>
                    <td>0701234567</td>
                    <td>1991-02-30</td>
                    <td>061020654921</td>
                    <td>M.K.Siripala Jayaweera</td>
                    <td>Matara</td>
                    <td>Peoples' bank</td>
                    <td>
                        <button className="update-button">Update</button>
                        <button className="delete-button">Delete</button>
                    </td>
                </tr>
                </tbody>
                
            </table>
    );
}