import React, {useState, useEffect} from 'react';
import './App.css';
import { Auth } from 'aws-amplify'
import Routes from './containers/Routing/Routes';
import NavBar from './containers/Navbar';

function App() {
	const [isAuthenticated, userHasAuthenticated] = useState(false);
	const [isAuthenticating, setIsAuthenticating] = useState(true);

	// onLoad function will only run our function on the FIRST render, because of [] 
	useEffect(() => {
		onLoad();
	}, [])

	/* 
	When our app first loads, it’ll run the onLoad function. All this does is load the current session. If it loads, then it updates the isAuthenticating state variable once the process is complete. It does so by calling setIsAuthenticating(false). The Auth.currentSession() method throws an error No current user if nobody is currently logged in. We don’t want to show this error to users when they load up our app and are not signed in. Once Auth.currentSession() runs successfully, we call userHasAuthenticated(true) to set that the user is logged in.
	*/
	async function onLoad() {
		try {
			await Auth.currentSession();
			userHasAuthenticated(true);
		} catch(e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}

		setIsAuthenticating(false);
	}


	async function handleLogout() {
		// Clear the Session on Logout
		await Auth.signOut();

		userHasAuthenticated(false);
	} 

	return (
		!isAuthenticating &&
		<div className="App container">
			<NavBar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
			<Routes appProps={{ isAuthenticated, userHasAuthenticated }} /> {/* Pass the Session State to the Routes */}
		</div>
	);
}

export default App;
