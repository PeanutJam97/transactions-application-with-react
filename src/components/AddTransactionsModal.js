import React from "react";
import { Form, Modal, ModalBody, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import {v4 as uuidV4} from "uuid";


const AddTransactionsModal = ({show, handleClose, addtransactions, accounts}) => {

    const [accid, SetAccIdOption] = useState((accounts[0]).AccountID)
    const [ReceivingAccountID, SetReceivingAccountID] = useState("")
    const [Date, SetDate] = useState("")
    const [Amount, SetAmount] = useState("")
    const [Comment, SetComment] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault();

        console.log(accid)

        const NewTransactions = {
            id: uuidV4(),
            AccountID: accid,
            Comment: Comment,
            Date: Date,
            ReceivingAccountID: ReceivingAccountID,
            TransactionAmount: Amount,
            TransactionID: Math.floor((Math.random()*10) + 1) 
        }
        console.log(NewTransactions)

        addtransactions(NewTransactions);
       
    }

    
     

    return ( 
        <Modal
                show={show}
                onHide={handleClose}            
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>Add Transaction</Modal.Title>
            </Modal.Header>
            <Form onSubmit={SubmitHandler}>
                <ModalBody>
                    <Form.Group>
                        <Form.Label>Account ID</Form.Label>
                            <Form.Select value={accid} onChange={(e) => SetAccIdOption(e.target.value)}>
                                    {accounts.map((account) => {
                                        return (
                                            <option>{account.AccountID}</option>
                                        )}
                                    )}
                            </Form.Select>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Receiving Account ID</Form.Label>
                            <Form.Control
                                type="number"
                                id="inputnumber"
                                onChange={(e) => SetReceivingAccountID(e.target.value)}
                                value={ReceivingAccountID}
                            />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                id="inputdate"
                                onChange={(e) => SetDate(e.target.value)}
                                value={Date}
                            />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Transaction Amount</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    id="inputamount"
                                    onChange={(e) => SetAmount(e.target.value)}
                                    value={Amount}
                                />
                            </InputGroup>
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Comment</Form.Label>
                        <Form.Control onChange={(e) => SetComment(e.target.value)} as="textarea" rows={3} placeholder="Input your comment here." value={Comment}/>
                    </Form.Group>
                </ModalBody>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" type="submit" disabled={!accid || !ReceivingAccountID || !Date || !Amount || !Comment} onClick={handleClose}>Add Transaction</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
 
export default AddTransactionsModal;