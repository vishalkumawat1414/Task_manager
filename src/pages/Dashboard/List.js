import React, { useEffect, useState } from "react";

function List({ employees, handleEdit, handleDelete, setEmployees }) {
	const [filterData, setFilterData] = useState([]); //for coping main data
	const [filterVal, setfilterVal] = useState(""); //for filter
    const[sortBy,setSortBy] = useState("");//for changing sortByvalue
    const [ascend_descend,setAscend_Descend ] = useState("");


    useEffect(()=>{
        setFilterData(employees); 
    },[]);
	

	const handelSearch = (e) => {
		if (e.target.value == "") { 
            setEmployees(filterData);
		}else{
             var fiilterResult
            if(sortBy == "mobileNo"){
                  fiilterResult = filterData.filter((item) =>
									item.mobileNo.includes(e.target.value)
								);
            }
            else{
              fiilterResult = filterData.filter((item) =>
							item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
						);

            }
            setEmployees( fiilterResult);
        }
       setfilterVal(e.target.value) // for setting value in search bar
	};

 
	return (
		<div className='contain-table'>
			<div>
				<div>
					<input
						type='radio'
						name='sort'
						id=''
						value='firstName'
						onChange={(e) => setSortBy(e.target.value)}
					/>
					ByName
				</div>
				<div>
					<input
						type='radio'
						name='sort'
						id=''
						value='mobileNo'
						onChange={(e) => setSortBy(e.target.value)}
					/>
					ByNumber
				</div>
				<div>
					<input
						className='bg-orange-200'
						type='text'
						name=''
						value={filterVal}
						placeholder='Name...'
						onInput={(e) => handelSearch(e)}
					/>
				</div>
			</div>
			<table className='striped-table'>
				<thead>
					<tr className=''>
						<th className='p-4'>No.</th>
						<th className='p-4'>First Name</th>
						<th className='p-4'>Last Name</th>
						<th className='p-4'>Mobile no./Enroll No.</th>

						<th colSpan={2} className='p-4'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{employees.length > 0 ? (
						employees.map((employee, i) => (
							<tr key={employee.id}>
								<td>{i + 1}</td>
								<td>{employee.firstName}</td>
								<td>{employee.lastName}</td>
								<td colSpan={2}>{employee.mobileNo}</td>

								<td className='ml-3'>
									<button
										onClick={() => handleEdit(employee.id)}
										className='cursor-pointer hover:bg-slate-300 rounded-lg'>
										Edit
									</button>
								</td>
								<td className='text-left'>
									<button
										onClick={() => handleDelete(employee.id)}
										className='cursor-pointer hover:bg-red-500 rounded-lg'>
										Delete
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={7}>No Employees</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default List;
