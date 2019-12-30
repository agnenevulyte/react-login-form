import React from 'react';
import './App.css';
import NavBar from './containers/Navbar';
// import Login from './containers/Login';
import Signup from './containers/Signup';

function App() {
	return (
		<div className="App container">
			<NavBar />
			<h1>My App</h1>
			{/* <Login/> */}
			<Signup />
		</div>
	);
}

export default App;
