import React from 'react';
import Footer from './Footer';
import axios from 'axios';
export default function CreateUser(){

	

	const addUser = (e)=>{
		e.preventDefault();
		const userOb = {
			full_name: e.target.fullName.value,
			account_num: e.target.accNum.value,
			balance: e.target.balance.value
		}
		axios.post('/users',userOb)
			.then((res)=>{
				alert('User added Succesfully');
				e.target.fullName.value = "";
				e.target.accNum.value = "";
				e.target.balance.value = "";
			})
			.catch((err)=>{
				alert("User Already Exists");
			})

	}
	return(
		<>
		<div className="createuser-container">
			<h1> Create a user </h1>

			<form className="form-container" onSubmit={addUser}>
				<label htmlFor="full-name"> Enter Full Name: </label><br/>
				<input type="text" id="full-name" name="fullName" placeholder='Full Name'/><br/>

				<label htmlFor="acc-num"> Enter Account Number: </label><br/>
				<input type="number" id="acc-num" name="accNum" min={100000} max={999999} placeholder='Account Number'/><br/>

				<label htmlFor="balance"> Enter Balance Amount (Rs.) : </label><br/>
				<input type="number" id="balance" name="balance" min={1} placeholder='Balance'/><br/>
				<button> Add User </button>
			</form>

		</div>
			<Footer/>
		</>
		)
}
