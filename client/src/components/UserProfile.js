
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Footer from './Footer';

export default function UserProfile({oneUser}){

	const [details, setDetails] = useState({})

	useEffect(()=>{
		axios.get('/users/' + oneUser)
		.then((res)=>{
			setDetails(res.data)
		})
		.catch((err)=>{
			console.log(err)
		})
		// eslint-disable-next-line
	},[])

	return(
		<>
		<div className="userprofile-container">
			<h1> User Profile </h1>

			<div className="details-container">
				<i className="fas fa-user"></i>
				<h4>Full Name</h4>
				<p>{details.full_name} </p>
				<h4>Account Number</h4>
				<p> {details.account_num}</p>
				<h4>Balance</h4>
				<p> {details.balance}</p>
			</div>
		</div>
		<Footer/>
		</>
		)
}