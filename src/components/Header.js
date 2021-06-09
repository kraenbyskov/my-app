
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


function Header() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/About">Features</Nav.Link>
					<Nav.Link href="/Contact">Pricing</Nav.Link>
					<Nav.Link href="/Galleri">Galleri</Nav.Link>
				</Nav>

			</Navbar>

		</>
	);
}

export default Header;
