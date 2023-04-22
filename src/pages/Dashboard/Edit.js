import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
	const id = selectedEmployee.id;

	const [firstName, setFirstName] = useState(selectedEmployee.firstName);
	const [lastName, setLastName] = useState(selectedEmployee.lastName);
	const [mobileNo, setMobileNo] = useState(selectedEmployee.mobileNo);
	

	const handleUpdate = (e) => {
		e.preventDefault();

		if (!firstName || !lastName || !mobileNo ) {
			return Swal.fire({
				icon: "error",
				title: "Error!",
				text: "All fields are required.",
				showConfirmButton: true,
			});
		}

		const employee = {
			id,
			firstName,
			lastName,
			mobileNo,
		};

		for (let i = 0; i < employees.length; i++) {
			if (employees[i].id === id) {
				employees.splice(i, 1, employee);
				break;
			}
		}

		setEmployees(employees);
		setIsEditing(false);

		Swal.fire({
			icon: "success",
			title: "Updated!",
			text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<div className='small-container'>
			<form onSubmit={handleUpdate}>
				<h1>Edit Employee</h1>
				<div className='space-x-3 grid grid-cols-2 '>
					<label htmlFor='firstName'>First Name</label>
					<input
						className='border-2 border-sky-500'
						id='firstName'
						type='text'
						name='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label htmlFor='lastName'>Last Name</label>
					<input
						className='border-2 border-sky-500'
						id='lastName'
						type='text'
						name='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<label htmlFor='mobileNo'>Mobile No.</label>
					<input
						className='border-2 border-sky-500'
						id='mobileNo'
						type='text'
						name='mobileNo'
						value={mobileNo}
						onChange={(e) => setMobileNo(e.target.value)}
					/>
				</div>
				<div style={{ marginTop: "30px" }}>
					<input
						type='submit'
						value='Update'
						className='cursor-pointer ml-10'
					/>
					<input
						className='cursor-pointer ml-10'
						type='button'
						value='Cancel'
						onClick={() => setIsEditing(false)}
					/>
				</div>
			</form>
		</div>
	);
}

export default Edit;
