import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Row } from 'react-bootstrap';
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};
		confirmAlert({
			
			title: "Confirm to add",
			message: "Are you sure you want to add expense?",
			buttons: [
			  {
				label: "Yes",
				onClick: () => {
					toast.success("Added successfully");
					dispatch({
						type: 'ADD_EXPENSE',
						payload: expense,
					});
					setName('');
					setCost('');
				},
			  },
	  
			  {
				label: "No",
				onClick: () => {
				  toast.error("Action Aborted");
				},
			  },
			],
		  });
		event.preventDefault();
		
		

	

	
	};

	return (
		<form onSubmit={onSubmit}>
			<Row>
				<Col lg={4}>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control form-control-sm'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</Col>
				<Col lg={4}>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control form-control-sm'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</Col>
				<Col lg={4} className='mt-4'>
				<Button variant='primary' size='sm' type='submit' >
						Save
					</Button>
				</Col>
			</Row>
			<div class='row mt-3'>
				<div class='col-sm'>
					
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
