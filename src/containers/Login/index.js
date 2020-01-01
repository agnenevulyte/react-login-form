import React, { useState } from 'react';
import { FormGroup, FormControl, Form } from "react-bootstrap";
import LoaderButton from '../LoaderButton';
import { Auth } from 'aws-amplify';
import { useFormFields } from '../../libs/hooksLib'
import "./Login.css";

export default function Login(props) {
	const [isLoading, setIsLoading] = useState(false);
	const [fields, handleFieldChange] = useFormFields({
		email: "",
		password: ""
	});
  
	function validateForm() {
	  return fields.email.length > 0 && fields.password.length > 0;
	}
  
	function handleSubmit(event) {
	  event.preventDefault();

	  setIsLoading(true);
	  try {
		  Auth.signIn(fields.email, fields.password);
		  // alert('Logged in');
		  props.userHasAuthenticated(true);
		  // redirect to the home page once logged in
		  props.history.push('/');
		  console.log("-------------------logged in")
	  } catch (e) {
		  alert(e.message);
		  console.log('-------------------some error message')
		  setIsLoading(false);
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
			  value={fields.email}
			  onChange={handleFieldChange}
			/>
		  </FormGroup>
		  <FormGroup controlId="password" bsSize="large">
			<Form.Label>Password</Form.Label>
			<FormControl
			  value={fields.password}
			  onChange={handleFieldChange}
			  type="password"
			/>
		  </FormGroup>
		  {/* <Button block bsSize="large" disabled={!validateForm()} type="submit">
			Login
		  </Button> */}
		  <LoaderButton
			block
			type="submit"
			bsSize="large"
			isLoading={isLoading}
			disabled={!validateForm()}
		  >
			Login
		  </LoaderButton>
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