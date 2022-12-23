import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";




const Accounts = () => {

    const [account, setAccount] = useState("User1")

    const SelectChangeHandler = (e) => {
        setAccount(e.target.value)
    }

    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${account}`);
    }, [account]);


    return ( 
        <div>
            <div style={{ marginTop: 40, display: "flex" }}>
                <h1 style={{ width: "70%" }}>Welcome</h1>
                <Form.Select
                    aria-label="accounts"
                    onChange={SelectChangeHandler}
                    value={account}
                    size="sm"
                    style={{ width: "30%"}}
                >
                    <option value="User1">User 1</option>
                    <option value="User2">User 2</option>
                    <option value="User3">User 3</option>
                    <option value="User4">User 4</option>
                    <option value="User5">User 5</option>    
                </Form.Select>
            </div>
            <Outlet />
        </div>
    );
};
 
export default Accounts;