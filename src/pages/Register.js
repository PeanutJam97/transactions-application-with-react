import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useState } from "react";
import { Button } from "react-bootstrap";
import isEmail from "validator/lib/isEmail";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required
        </div>
      );
    }
  };

const validEmail = (value) => {
  if (!isEmail(value)) {
    return ( 
      <div className="alert alert-danger" role="alert">
        This is not a valid Email
      </div>
     );
  }
}
   

const Register = () => {

    const [email, SetEmail] = useState('');
    const [username, SetUsername] = useState('');
    const [firstname, SetFirstname] = useState('');
    const [lastname, SetLastname] = useState('');
    const [password, SetPassword] = useState('');
    const [address, SetAddress] = useState('');
    const [confirmpassword, SetConfirmPassword] = useState('');
    const [showPassword, SetShowPassword] = useState(false)
    const [showConfirmPassword, SetShowConfirmPassword] = useState(false)

    const EmailChangeHandler = (e) => {
        SetEmail(e.target.value);
      };

    const UsernameChangeHandler = (e) => {
        SetUsername(e.target.value);
    };

    const LastNameChangeHandler = (e) => {
        SetLastname(e.target.value);
      };

    const FirstNameChangeHandler = (e) => {
        SetFirstname(e.target.value);
      };

    const AddressChangeHandler = (e) => {
        SetAddress(e.target.value);
    };
    
    const PasswordChangeHandler = (e) => {
        SetPassword(e.target.value);
    };

    const ConfirmPasswordChangeHandler = (e) => {
        SetConfirmPassword(e.target.value);
    };

    const togglePassword = (e) => {
        SetShowPassword((showPassword) => (!showPassword));
    };

    const toggleConfirmPassword = (e) => {
        SetShowConfirmPassword((showConfirmPassword) => (!showConfirmPassword));
    };

    const SubmitHandler = (e) => {
      e.preventDefault();
    }

    return ( 
        <div className="form-container">
            <h2>Register</h2>
                <Form onSubmit={SubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange = {UsernameChangeHandler}
                            validations={[required]}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">First Name</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={firstname}
                        onChange = {FirstNameChangeHandler}
                        validations={[required]}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Last Name</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={lastname}
                        onChange = {LastNameChangeHandler}
                        validations={[required]}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Address</label>
                        <Input
                        type="text"
                        className="form-control"
                        name="address"
                        value={address}
                        onChange = {AddressChangeHandler}
                        validations={[required]}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange = {EmailChangeHandler}
                        validations={[required, validEmail]}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Password">Password</label>
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

                    <div className="mb-3">
                        <label htmlFor="Password">Change Password</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="form-control"
                                name="password"
                                value={confirmpassword}
                                onChange = {ConfirmPasswordChangeHandler}
                                validations={[required]}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-sm"
                                onClick={toggleConfirmPassword}
                            >
                                Show Password
                            </button>
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <Button variant="dark">
                            Create Account
                        </Button>
                    </div>

                </Form>
            </div>
    );
}
 
export default Register;