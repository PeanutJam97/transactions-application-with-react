import React, { useContext, useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Button } from "react-bootstrap";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/auth-context";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required
        </div>
      );
    }
  };



  

const Login = () => {

  const form = useRef();
  const checkBtn = useRef()
  const navigate = useNavigate();

  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [showPassword, SetShowPassword] = useState(false)
  const [isloading, setisLoading] = useState(false)

  const authCtx = useContext(AuthContext);

  

  const EmailChangeHandler = (e) => {
    SetEmail(e.target.value);
  };

  const PasswordChangeHandler = (e) => {
    SetPassword(e.target.value);
  };

  const togglePassword = (e) => {
    SetShowPassword((showPassword) => (!showPassword));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    form.current.validateAll();

    setisLoading(true);
    if (checkBtn.current.context._errors.length === 0) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2TB_WX_AFkzineYvu-rD0o0cdwYD78h8',
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
      ).then((res) => {
          setisLoading(false);
          if (res.ok) {
              return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication failed!';
              // if (data && data.error && data.error.message) {
              //     errorMessage = data.error.message;
              // }
              throw new Error(errorMessage);
            });
          }
      }).then(data => {
          authCtx.login(data.idToken);
          navigate("/accounts");
      })
        .catch((err) => {
          alert(err.message);
        });
      }
  };


  return ( 
    <div className="form-container">
        <h2>Login</h2>
        <Form onSubmit={SubmitHandler} ref={form}>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={EmailChangeHandler}
                  validations={[required]}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  value={password}
                  onChange = {PasswordChangeHandler}
                  validations={[required]}
                />
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"
                  onClick={togglePassword}
                >
                  Show Password
                </button>
              </div>
            </div>
            <div className="form-group">
            {/* <button className="btn btn-dark btn-block">
              <span>Login</span>
            </button> */}
              <Button type="submit" variant="danger">
                {isloading && (
                <span className="spinner-border spinner-border-sm"></span>
                )}
                {!isloading && (
                <span>Login</span>
                )}
              </Button>
            </div>
          <CheckButton style={{display: "none"}} ref={checkBtn}/>
          <p style={{ textAlign: "center" }}>
            <a href="/register">Click here to create account</a>
          </p>
        </Form>
    </div>
  );
}
 
export default Login;