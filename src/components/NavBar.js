import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Home from '../pages/Home';


const NavBar = () => {
    return ( 
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/">DBS</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Create Account</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">Change Password</Nav.Link>
                        <Nav.Link href="/login">
                        Log Out
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Home />}>
                    </Route>
                </Routes>
            </div>
        </div>
        );
    }
 
export default NavBar;