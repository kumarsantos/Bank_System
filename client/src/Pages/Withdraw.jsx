import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'

const Withdraw = () => {
    const history=useHistory()


    const [withdraw,SetWithdraw]=React.useState('')
    const [token,SetToken]=React.useState('')
    const [err,SetError]=React.useState('')
    const [message,SetMessage]=React.useState('')
    
  
React.useEffect(()=>{

    let token=JSON.parse(localStorage.getItem('Token'))
    if(token){

        SetToken(token)
    }
},[])
   
    const withdrawHandler=async(e)=>{
        e.preventDefault()
        const headers={
            authorization:"Bearer "+token
        }

        if(token){
            const {data}=await axios.post('http://localhost:5000/withdraw',{withdraw},{headers})
           
                
                if(data.message){

                    SetMessage(data.message)
                  
                         setTimeout(()=>{
                                history.push("/home")
                        },1000)
                }
                if(data.err){

                    SetError(data.err)
                  
                }
              
            
        }
 }
    return (
        
            <div className="login_form">
                <h2>WITHDRAW</h2>
                <form onSubmit={e=>withdrawHandler(e)} className="my_form">
                {err ? <div className="error">
                        <p>{err}</p>
                    </div>:
                    message ?
                    <div className="succ">
                        <p >{message}</p>
                    </div>:null}
                    <div className="amount">
                        <input type="text" placeholder="Enter Deposite Amount" value={withdraw} onChange={e=>SetWithdraw(e.target.value)}/>
                    </div>
                    
                   
                    <div className="botton">
                        <input type="submit" value="Submit" />
                    </div>
                    

                </form>
                    
            
            
        </div>
    )
}

export default Withdraw
