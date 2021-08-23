import React, { useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
// import { Transaction } from '../../../server/models/UserModel';


const Home = () => {

    const history=useHistory()      
    const {SetUserData,userData}=useContext(UserContext)    
    
  React.useEffect(()=>{    
    
    let Token=JSON.parse(localStorage.getItem('Token'));
    if(!Token){
        localStorage.removeItem('Token')
        localStorage.removeItem('user')
        history.push("/login")
    }else{
        const fetchdata=async()=>{
            const headers={authorization:"Bearer "+Token}
            let {data}= await axios.get('http://localhost:5000/alldata',{headers})        
            
            SetUserData({
                    token:Token,
                    user:JSON.parse(localStorage.getItem("user")),
                    userTransactionData:data
                })
                
              }
                     
            fetchdata()
        }
    },[])   

    return (
        <div className="home">
            <h2>USER INFORMATION</h2>
            <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Opening Amount</th>
                    <th>Deposite</th>
                    <th>Withdrawal</th>
                    <th>Intrest</th>
                    <th>Outstanding Bal.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData?.userTransactionData?.map((data,i)=>{
                                                        
                            return (
                                <tr key={data._id}>
                                <td>{data.createdAt.split("T")[0]}</td>
                                <td>{data.openingamount}</td>
                                <td>{data.depositedamount}</td>
                                <td>{data.withdrawalamount}</td>
                                <td>{data.interest}</td>
                                <td>{data.outstanding}</td>
                                </tr>)
                        })

}
                   
                </tbody>
            </table>
            
            
        </div>
    )
}

export default Home
