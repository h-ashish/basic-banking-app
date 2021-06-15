import React from 'react';
import Footer from './Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Users({setOneUser}){

  const [userData, setUserData] = useState([])
 
  useEffect(()=>{
    axios.get('/users')
    .then((res)=>{
      setUserData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  // console.log(userData);

	return(
		<>
		<div className="users-container">
		<h1> Users List</h1>
		<table >
        <thead>
            <tr>
                <th>UID</th>
                <th>Full Name</th>
                <th>Account Number</th>
                <th>Balance (Rs.)</th>
                <th>Profile</th>
            </tr>
        </thead>
        <tbody>
          {
            userData.map((val, index)=>{
              return(
                <tr key={index}>
                   <td >{index +1}</td>
                   <td>{val.full_name}</td>
                   <td>{val.account_num}</td>
                   <td>{val.balance}</td>
                   <td><Link 
                   to="/userprofile" 
                   style={{textDecoration: "none"}} 
                   className="userprofile-link"><button onClick={()=>{setOneUser(val._id)}}> view </button> </Link></td>
              </tr> 
              )
            })
          }
              
        </tbody>
      </table>

		</div>
		<Footer/>

		</>
		)
}
