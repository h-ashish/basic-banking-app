import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';



export default  function Home (){

	return(
		<div className="main-container" >
			<h1 className="welcome-heading">Welcome to GRIP Bank </h1>
		<div className="container">

		<div className="img-container"> </div>

		<div className="ourServices">
			{/*<h2 className="services-heading"> Our Services </h2>*/}

			<Link to="/createuser" style={{textDecoration: "none"}} className="link-style">
			<i className="fas fa-users"></i><br/>
			Create User
			</Link> 

			<Link to="/transaction" style={{textDecoration: "none"}} className="link-style">
			<i className="fas fa-rupee-sign"></i><br/>
			Make Transaction</Link>

			<Link to="/history" style={{textDecoration: "none"}} className="link-style">
			<i className="fas fa-history"></i><br/>
			Transaction History</Link>

		</div>
		</div>
		
		<Footer/>
		</div>
		)
}
