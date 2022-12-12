import Form from "react-validation/build/form";
import { Button } from "react-bootstrap";
import CheckButton from "react-validation/build/button";
import { useState } from "react";

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
  
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [showPassword, SetShowPassword] = useState(false)

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

    

  }
  
    return ( 
        <div className="form-container">
            <h2>Login</h2>

            <Form onSubmit={SubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange = {EmailChangeHandler}
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
                  <Button variant="dark">
                    Login
                  </Button>
                </div>
              <CheckButton style={{display: "none"}} />
              <p style={{ textAlign: "center" }}>
                <a href="/register">Click here to create account</a>
              </p>
            </Form>
        </div>
    );
}
 
export default Login;