import React, {useState} from 'react';
import './App.css';
import Routes from './containers/Routing/Routes';
import NavBar from './containers/Navbar';

function App() {
	const [isAuthenticated, userHasAuthenticated] = useState(false);

	function handleLogout() {
		userHasAuthenticated(false);
	} 

	return (
		<div className="App container">
			<NavBar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
			<Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
		</div>
	);
}

export default App;
