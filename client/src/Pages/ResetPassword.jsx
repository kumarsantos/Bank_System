import axios from 'axios'
import React from 'react'
import {Link,useHistory} from 'react-router-dom'


const ResetPassword = () => {

    const history=useHistory()
    const [email,SetEmail]=React.useState('')
    const [newpassword,SetPassword]=React.useState('')
    const [confirmpassword,SetConfirmPassword]=React.useState('')
    const [category,SetCategory]=React.useState('')

    const [err,SetError]=React.useState('')
    const [message,SetMessage]=React.useState('')

   React.useEffect(()=>{},[])

    const ResetHandler=async(e)=>{
        e.preventDefault()   

            const resetpassword={email,newpassword,confirmpassword,category}
            const res=await axios.put("http://localhost:5000/forgetpassword",resetpassword);
            const {data}=res
            if(data.message){
                SetMessage(data.message)
                localStorage.removeItem('Token')
                localStorage.removeItem('user')
                
                setTimeout(()=>{history.push('/login')},2000)
            }
            if(data.err){
                SetError(data.err)
            }
            
    }
    return (
        
            <div className="login_form">
                <h2>RESET PASSWORD</h2>
                <form onSubmit={e=>ResetHandler(e)} className="my_form">
                {err ? <div className="error">
                        <p>{err}</p>
                    </div>:
                    message ?
                    <div className="succ">
                        <p >{message}</p>
                    </div>:null}
                    <div className="emial">
                        <input type="email" placeholder="Enter your Email" value={email} onChange={e=>SetEmail(e.target.value)}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Enter New Password" value={newpassword} onChange={e=>SetPassword(e.target.value)}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Confirm  Password" value={confirmpassword} onChange={e=>SetConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="category">
                        <select  onClick={e=>SetCategory(e.target.value)} >
                            <option disabled selected="selected" hidden >Select an Option</option>
                            <option>Saving Account</option>
                            <option>Current Account</option>
                            
                            </select>
                    </div>
                   
                    <div className="botton">
                        <input type="submit" value="Submit" />
                    </div>
                    

                </form>
                    
            
            
        </div>
    )
}

export default ResetPassword;
