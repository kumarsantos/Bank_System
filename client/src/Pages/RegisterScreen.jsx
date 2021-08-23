import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../App'


const RegisterScreen = () => {
    const history=useHistory()
    const {userData,SetUserData}=useContext(UserContext)
    const [username,SetName]=React.useState('')
    const [openingamount,SetAmount]=React.useState('')
    const [email,SetEmail]=React.useState('')
    const [password,SetPassword]=React.useState('')
    const [category,Setcategory]=React.useState('')
    const [succ,SetSucc]=React.useState()
    const [err,SetError]=React.useState()




    React.useEffect(()=>{
       if(!userData.user){
           history.push('/register')
       }else{
           history.push('/home')
       }


        
    },[])
   
    const registerHandler=async(e)=>{
        let token1;
        e.preventDefault()
        const userRegisteration={email,username,password,openingamount,category}
        const {data}=await axios.post('http://localhost:5000/register',userRegisteration);
        
        token1=data.token
        
        if(token1){
            SetSucc(data.message)
            localStorage.setItem('Token',JSON.stringify(token1))
            localStorage.setItem('user',JSON.stringify(data.useraccount))
            history.push('/home')
        }else{
            SetError(data.err)
            history.push('/register')
        }
        




    }
    return (
        
            <div className="login_form">
                <h2>USER REGISTERATION</h2>
                <form onSubmit={e=>registerHandler(e)} className="my_form">
                {err ? <div className="error">
                        <p>{err}</p>
                    </div>:
                    succ ?
                    <div className="succ">
                        <p >{err}</p>
                    </div>:null}
                    <div className="name">
                        <input type="text" placeholder="Enter your Name" value={username} onChange={e=>SetName(e.target.value)}/>
                    </div>
                    <div className="emial">
                        <input type="email" placeholder="Enter your Email" value={email} onChange={e=>SetEmail(e.target.value)}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Enter your Password" value={password} onChange={e=>SetPassword(e.target.value)}/>
                    </div>
                    <div className="balance">
                        <input type="text" placeholder="Enter Opening amount" value={openingamount} onChange={e=>SetAmount(e.target.value)}/>
                    </div>
                    <div className="category">
                        <select onClick={e=>Setcategory(e.target.value)} >
                            <option disabled selected="selected" hidden value="none">Select an Option</option>
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

export default RegisterScreen
