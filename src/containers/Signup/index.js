import React, { useState } from 'react';
import {
	// HelpBlock,
	FormGroup,
	FormControl,
	Form
} from 'react-bootstrap';
import LoaderButton from '../LoaderButton';
import { useFormFields } from '../../libs/hooksLib';
import './Signup.css';

/*
Since we need to show the user a form to enter the confirmation code, we are conditionally rendering two forms based on if we have a user object or not.

We are using the LoaderButton component that we created earlier for our submit buttons.

Since we have two forms we have two validation functions called validateForm and validateConfirmationForm.

We are setting the autoFocus flags on the email and the confirmation code fields.

For now our handleSubmit and handleConfirmationSubmit don’t do a whole lot besides setting the isLoading state and a dummy value for the newUser state.

And you’ll notice we are using the useFormFields custom React Hook that we previously created to handle our form fields.
*/

export default function Signup(props) {
	const [ fields, handleFieldChange ] = useFormFields({
		email: '',
		password: '',
		confirmPassword: '',
		address: '',
		postcode: '',
		confirmationCode: ''
	});
	const [ newUser, setNewUser ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	function validateForm() {
		return (
			fields.email.length > 0 &&
				fields.password.length > 0 &&
				fields.password === fields.confirmPassword &&
				fields.address.length > 0,
			fields.postcode.length > 0
		);
	}

	function validateConfirmationForm() {
		return fields.confirmationCode.length > 0;
	}

	async function handleSubmit(event) {
		event.preventDefault();

		setIsLoading(true);

		setNewUser('test');

		setIsLoading(false);
	}

	async function handleConfirmationSubmit(event) {
		event.preventDefault();

		setIsLoading(true);
	}

	function renderConfirmationForm() {
		return (
			<form onSubmit={handleConfirmationSubmit}>
				<FormGroup controlId="confirmationCode">
					<Form.Label>Confirmation Code</Form.Label>
					<FormControl autoFocus type="tel" onChange={handleFieldChange} value={fields.confirmationCode} />
					{/* <HelpBlock>Please check your email for the code.</HelpBlock> */}
				</FormGroup>
				<LoaderButton block type="submit" isLoading={isLoading} disabled={!validateConfirmationForm()}>
					Verify
				</LoaderButton>
			</form>
		);
	}

	function renderForm() {
		return (
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="email">
					<Form.Label>Email</Form.Label>
					<FormControl autoFocus type="email" value={fields.email} onChange={handleFieldChange} />
				</FormGroup>
				<FormGroup controlId="password">
					<Form.Label>Password</Form.Label>
					<FormControl type="password" value={fields.password} onChange={handleFieldChange} />
				</FormGroup>
				<FormGroup controlId="confirmPassword">
					<Form.Label>Confirm Password</Form.Label>
					<FormControl type="password" onChange={handleFieldChange} value={fields.confirmPassword} />
				</FormGroup>
				<FormGroup controlId="address">
					<Form.Label>Address</Form.Label>
					<FormControl type="text" onChange={handleFieldChange} value={fields.address} />
				</FormGroup>
				<FormGroup controlId="postcode">
					<Form.Label>Postcode</Form.Label>
					<FormControl type="text" onChange={handleFieldChange} value={fields.postcode} />
				</FormGroup>
				<LoaderButton block type="submit" isLoading={isLoading} disabled={!validateForm()}>
					Signup
				</LoaderButton>
			</form>
		);
	}

	return <div className="Signup content">{newUser === null ? renderForm() : renderConfirmationForm()}</div>;
}
