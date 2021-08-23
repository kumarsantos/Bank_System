import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'

const Deposite = () => {
    const history=useHistory()


    const [deposite,SetDeposite]=React.useState('')
    const [token,SetToken]=React.useState('')
    const [err,SetError]=React.useState('')
    const [message,SetMessage]=React.useState('')
    
  
React.useEffect(()=>{

    let token=JSON.parse(localStorage.getItem('Token'))
    if(token){

        SetToken(token)
    }
},[])
   
    const DepositeHandler=async(e)=>{
        e.preventDefault()
        const headers={
            authorization:"Bearer "+token
        }

        if(token){
            const {data}=await axios.post('http://localhost:5000/deposite',{deposite},{headers})
           
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
                <h2>DEPOSITE</h2>
                <form onSubmit={e=>DepositeHandler(e)} className="my_form">
                {err ? <div className="error">
                        <p>{err}</p>
                    </div>:
                    message ?
                    <div className="succ">
                        <p >{message}</p>
                    </div>:null}
                    <div className="amount">
                        <input type="text" placeholder="Enter Deposite Amount" value={deposite} onChange={e=>SetDeposite(e.target.value)}/>
                    </div>
                    
                   
                    <div className="botton">
                        <input type="submit" value="Submit" />
                    </div>
                    

                </form>
                    
            
            
        </div>
    )
}

export default Deposite
