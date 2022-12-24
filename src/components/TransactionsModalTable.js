import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import { dummyData } from '../data/data';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import AddTransactionsModal from './AddTransactionsModal';
import { useState } from "react";
import useLocalStorage from '../Hooks/useLocalStorage';

const TransactionsModalTable = ({show, handleClose, accounts}) => {

    const [AddTransactionsModalOpen, SetAddTransactionsModalOpen] = useState(false);
    const AddhandleClose = () => SetAddTransactionsModalOpen(false)
    const AddhandleShow = () => SetAddTransactionsModalOpen(true)


    const transactions = [];
    console.log(accounts)

    
    dummyData.map((transaction) => {
        if (accounts.find(account => account.AccountID === transaction.AccountID)) {
            transactions.push(transaction)
        }
    })

    console.log(transactions)

    const [updatedtransactions, SetUpdatedTransactions] = useLocalStorage(`${accounts[0].UserID}`, transactions)

    console.log(updatedtransactions)

    const SetAddedTransactionsHandler = (addtransactions) => {
        SetUpdatedTransactions(prevTransactions => (
            [...prevTransactions, addtransactions]
        ))
    };

    const DeleteTransactionHandler = (id) => {
        const PostDeleteList = updatedtransactions.filter(transaction => transaction.id !== id)
        SetUpdatedTransactions(PostDeleteList)
    };
    // }  onClick={DeleteTransactionHandler(transaction.AccountID)}
     
    

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}            
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Transactions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover className="mt-2">
                            <thead>
                                <tr>
                                    <th>Account ID</th>
                                    <th>Receiving Account ID</th>
                                    <th>Date</th>
                                    <th>Transaction Amount</th>
                                    <th>Comment</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {updatedtransactions.map((transaction) => {
                                    return (
                                        <tr>
                                            <td>{transaction.AccountID}</td>
                                            <td>{transaction.ReceivingAccountID}</td>
                                            <td>{formatDistanceToNow(new Date(transaction.Date), {addSuffix: true,})}</td>
                                            <td>$ {transaction.TransactionAmount}</td>
                                            <td>{transaction.Comment}</td>
                                            <td><Button variant="dark" onClick={() => DeleteTransactionHandler(transaction.id)}>Delete</Button></td>
                                        </tr>
                                    );
                                })}      
                            </tbody>
                        </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={AddhandleShow}>Add Transaction</Button>
                </Modal.Footer>
            </Modal>
            <AddTransactionsModal show={AddTransactionsModalOpen} handleClose={AddhandleClose} addtransactions={SetAddedTransactionsHandler} accounts={accounts}/>
        </> 
    );
}
 
export default TransactionsModalTable;