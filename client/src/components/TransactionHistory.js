import React,{useEffect, useState} from 'react';
import Footer from './Footer';
import axios from 'axios';

export default function TransactionHistory(){

	const [tranferData, setTranferData] = useState([])

    useEffect(()=>{
    axios.get('/transfer')
    .then((res)=>{
      setTranferData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

return(
    <>
    <div className="users-container">
    <h1> Transaction History</h1>
    <table >
        <thead>
            <tr>
                <th>UID</th>
                <th>Payer Account</th>
                <th>Reciever Account</th>
                <th>Amount</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
        {
            tranferData.map((val, index)=>{
                return(
                        <tr key={index}>
                           <td>{index+1}</td>
                           <td>{val.transferFrom}</td>
                           <td>{val.transferTo}</td>
                           <td>{val.amount}</td>
                           <td>{val.createdAt}</td>
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
