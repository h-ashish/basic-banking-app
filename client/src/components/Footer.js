import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){
	return(
		<div className="footer-container">

			<div className="company-logo">
			<Link to = '/' className = 'footer-logo'  >
            <i className="fas fa-piggy-bank"></i> 
          	</Link>
			</div>

			<div className="copyrights">
				<p>© Copyright 2021-2022. All rights reserved</p>
			</div>

			<div className="social-media">
			Made by Ashish H
			<a href="https://github.com/h-ashish" style={{textDecoration:"none"}}>
				<i className='fab fa-github' to="" /> 
			</a>
			<a href="https://www.linkedin.com/in/ashish-h-00632a161/" style={{textDecoration:"none"}}>
				<i className='fab fa-linkedin' />
			</a>
			</div>

		</div>
		)
}