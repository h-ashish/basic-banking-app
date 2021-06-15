import React from 'react';
import Footer from './Footer';
import axios from 'axios'
export default function Transfer(){

	let val1;
	let val2;

	const transferFrom = (e) =>{
		e.preventDefault()
		const Ob1 = {
			account_num: e.target.transferFrom.value,
			balance: e.target.amount.value
		}
		
		axios.get(`/usersacc/${Ob1.account_num}`)
		.then((res)=>{
			val1 = Number(res.data.balance)
			// console.log(val1);

			if(Ob1.balance < val1){
			const UserOb1 = {
			balance: val1 - Number(e.target.amount.value)
			}
			// console.log(UserOb1);

			axios.put(`/users/${Ob1.account_num}`,UserOb1)
			.then((res)=>{
				transferTo(e);
			})

			} else {
				alert("Insufficient Balance");
			}
		})
		.catch((err)=>{
			alert('Invalid User');
		})	
	}

	const transferTo = (e) =>{
		// e.preventDefault()

		const Ob2 = {
			transferFrom: e.target.transferFrom.value,
			transferTo: e.target.transferTo.value,
			amount: e.target.amount.value,
			createdAt : new Date().toLocaleString('en-US',{timeZone: 'IST'})
		}
		
		axios.get(`/usersacc/${Ob2.transferTo}`)
		.then((res)=>{
			val2 = Number(res.data.balance);
			// console.log(val2);

			const UserOb2 = {
			balance: val2 + Number(e.target.amount.value)
			}
			console.log(UserOb2);

			axios.put(`/users/${Ob2.transferTo}`,UserOb2)
			.then((res)=>{
				alert('Transfer Succesfully');

				axios.post('/transfer',Ob2)
				.then((res)=>{
					console.log(res.data);
				})
				.catch((err)=>{
					console.log(err.toString())
				})
			})
		})
		.catch((err)=>{
			console.log(err)
		})
	}


	const transferAmount = (e) => {
		if(e.target.transferFrom.value === e.target.transferTo.value){
			alert("Account numbers cannot be the same!");
		} else {
			transferFrom(e);
		}
		
	}

	return(
		<>
		<div className="transfer-container">
			<h1> Transfer Money </h1>

			<form className="transfer-form-container" onSubmit={transferAmount}>
				<label htmlFor="transfer-from" > Transfer From: </label><br/>
				<input type="number" id="transfer-from" name="transferFrom" min={100000} max={999999} placeholder='Account Number'/><br/>

				<label htmlFor="transfer-to"> Transfer To: </label><br/>
				<input type="number" id="transfer-to" name="transferTo" min={100000} max={999999} placeholder='Account Number'/><br/>

				<label htmlFor="amount"> Enter Amount (Rs.) : </label><br/>
				<input type="number" id="amount" name="amount" placeholder='Amount' min={1}/><br/>
				<button> Transfer </button>
			</form>

		</div>
			<Footer/>
		</>
		)
}
