import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
	return (
		<Navbar bg="light" expand="lg" fluid>
			<Navbar.Brand href="#home">
				<img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="Main logo" />
			</Navbar.Brand>
			{/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{/* <Link to="/test">test</Link> */}
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#page2">Page2</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
