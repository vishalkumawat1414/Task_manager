import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [mobileNo, setMobileNo] = useState("");

	const textInput = useRef(null);

	useEffect(() => {
		textInput.current.focus();
	}, []);

	const handleAdd = (e) => {
		e.preventDefault();
		if (!firstName || !lastName || !mobileNo) {
			return Swal.fire({
				icon: "error",
				title: "Error!",
				text: "All fields are required.",
				showConfirmButton: true,
			});
		}

		const id = employees.length + 1;
		const newEmployee = {
			id,
			firstName,
			lastName,
			mobileNo,
		};
		employees.push(newEmployee);
		setEmployees(employees);
		setIsAdding(false);

		Swal.fire({
			icon: "success",
			title: "Added!",
			text: `${firstName} ${lastName}'s data has been Added.`,
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<div className='small-container'>
			<form onSubmit={handleAdd}>
				<h1 className='text-xl mb-5'>Add Employee</h1>
				<div className='space-x-3 grid grid-cols-2 '>
					<label htmlFor='firstName'>First Name</label>
					<input
						className='border-2 border-sky-500'
						id='firstName'
						type='text'
						ref={textInput}
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
						className='border-2 border-sky-500 '
						id='mobileNo'
						type='text'
						name='mobileNo'
						value={mobileNo}
						onChange={(e) => setMobileNo(e.target.value)}
					/>
				</div>

				<div className='mt-14'>
					<input type='submit' value='Add' className=' mr-6 cursor-pointer' />
					<input
						className='cursor-pointer ml-10'
						type='button'
						value='Cancel'
						onClick={() => setIsAdding(false)}
					/>
				</div>
			</form>
		</div>
	);
}

export default Add;
