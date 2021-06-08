import React from 'react';

import {
	Link
} from "react-router-dom";


function Header() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/Contact">Contact</Link>
				</li>
				<li>
					<Link to="/Galleri">Galleri</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
