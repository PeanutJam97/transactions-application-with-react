import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import ChangePassword from '../pages/ChangePassword';
import ChangeEmail from '../pages/ChangeEmail';
import AuthContext from '../Store/auth-context';
import Accounts from '../pages/Accounts';
import User1 from '../Routes/User1';
import User2 from '../Routes/User2';
import User3 from '../Routes/User3';
import User4 from '../Routes/User4';
import User5 from '../Routes/User5';

const NavBar = () => {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout()
    };

    const isLoggedIn = authCtx.isLoggedIn;


    return ( 
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/">DBS</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {!isLoggedIn && 
                        <Nav.Link href="/login">Login</Nav.Link>
                        }
                        <Nav.Link href="/register">Create Account</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn && 
                        <Nav.Link href="/profile">Change Email or Password</Nav.Link>
                        }
                        {isLoggedIn && <Nav.Link href="/login" onClick={logoutHandler}>
                        Log Out
                        </Nav.Link>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {isLoggedIn && <Route path="/profile" element={<Profile />} />}
                    {isLoggedIn && <Route path="/ChangePassword" element={<ChangePassword />} />}
                    {isLoggedIn && <Route path="/ChangeEmail" element={<ChangeEmail />} />}
                    {isLoggedIn && 
                    <Route path="/" element={<Accounts />}>
                        <Route path="/User1" element={<User1 />} />
                        <Route path="/User2" element={<User2 />} />
                        <Route path="/User3" element={<User3  />} />
                        <Route path="/User4" element={<User4 />} />
                        <Route path="/User5" element={<User5  />} />
                    </Route>
                    }
                    {!isLoggedIn && <Route path="/profile" element={<Login />} />}
                    {!isLoggedIn && <Route path="/ChangePassword" element={<Login />} />}
                    {!isLoggedIn && <Route path="/ChangeEmail" element={<Login />} />}
                    {!isLoggedIn && <Route path="/accounts" element={<Login />} />}
                    {!isLoggedIn && <Route path="/" element={<Login />} />}
                </Routes>
            </div>
        </div>
        );
    }
 
export default NavBar;