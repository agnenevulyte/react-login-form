import React, { useState } from 'react';
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Auth } from 'aws-amplify';
import "./Login.css";

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
	function validateForm() {
	  return email.length > 0 && password.length > 0;
	}
  
	async function handleSubmit(event) {
	  event.preventDefault();

	  try {
		  Auth.signIn(email, password);
		  alert('Logged in');
	  } catch (e) {
		  alert(e.message);
	  }
	}
  
	return (
	  <div className="Login">
		<form onSubmit={handleSubmit}>
		  <FormGroup controlId="email" bsSize="large">
			<Form.Label>Email</Form.Label>
			<FormControl
			  autoFocus
			  type="email"
			  value={email}
			  onChange={e => setEmail(e.target.value)}
			/>
		  </FormGroup>
		  <FormGroup controlId="password" bsSize="large">
			<Form.Label>Password</Form.Label>
			<FormControl
			  value={password}
			  onChange={e => setPassword(e.target.value)}
			  type="password"
			/>
		  </FormGroup>
		  <Button block bsSize="large" disabled={!validateForm()} type="submit">
			Login
		  </Button>
		</form>
	  </div>
	);
}


// import React, { Component } from "react";
//     import Form from 'react-bootstrap/Form'
//     import Button from 'react-bootstrap/Button'
//     import Bootstrap from "react-bootstrap";

//     export default class Login extends Component {
//       constructor(props) {
//         super(props);

//         this.state = {
//           email: "",
//           password: ""
//         };
//       }

//       validateForm() {
//         return this.state.email.length > 0 && this.state.password.length > 0;
//       }

//       handleChange = event => {
//         this.setState({
//           [event.target.id]: event.target.value
//         });
//       }

//       handleSubmit = event => {
//         event.preventDefault();
//       }

//       render() {
//         return (
//           <div className="Login">
//             <Form onSubmit={this.handleSubmit}>
//               <Form.Group controlId="email" bsSize="large">
//                 <Form.Control
//                   autoFocus
//                   type="email"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//               </Form.Group>
//               <Form.Group controlId="password" bsSize="large">
//                 <Form.Control
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                   type="password"
//                 />
//               </Form.Group>
//               <Button
//                 block
//                 bsSize="large"
//                 disabled={!this.validateForm()}
//                 type="submit"
//               >
//                 Login
//               </Button>
//             </Form>
//           </div>
//         );
//       }
//     }