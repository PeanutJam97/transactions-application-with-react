import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import TransactionsModalTable from "./TransactionsModalTable";

const UserAccountTable = ({accounts}) => {

    const accountList = []

    const [TransactionsModalOpen, SetTransactionsModalOpen] = useState(false);
    const handleClose = () => SetTransactionsModalOpen(false)
    const handleShow = () => SetTransactionsModalOpen(true)


    return (
        <>
            <Button variant="dark" onClick={handleShow} className="mt-4">Transactions</Button>
            <div> 
                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>Account ID</th>
                            <th>Account Type</th>
                            <th>Acccount Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => {
                            console.log(account)
                            accountList.push(account)
                            return (
                                <tr>
                                    <td>{account.AccountID}</td>
                                    <td>{account.AccountType}</td>
                                    <td>$ {account.AcccountBalance}</td>
                                </tr>
                            );
                        })}      
                    </tbody>
                </Table>
            </div>
            <TransactionsModalTable show={TransactionsModalOpen} handleClose={handleClose} accounts={accountList}/>
        </>
    );
}
 
export default UserAccountTable;