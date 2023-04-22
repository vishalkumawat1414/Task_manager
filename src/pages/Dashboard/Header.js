import React from "react";

function Header({ setIsAdding }) {
	return (
		<header>
			<h1 className="text-2xl font-semibold">Online Address Book</h1>
			<div
				
				style={{ marginTop: "30px", marginBottom: "18px" }}>
				<button
					onClick={() => setIsAdding(true)}
					className='rounded-lg bg-slate-300 p-2'>
					Add New 
				</button>
			</div>
		</header>
	);
}

export default Header;
