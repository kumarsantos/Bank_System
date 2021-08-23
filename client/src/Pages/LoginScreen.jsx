import React,{useContext} from 'react'
import { UserContext } from '../App'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'


const LoginScreen = () => {
    const {userData,SetUserData}=useContext(UserContext)
    // console.log(userData)
    const history=useHistory();

    const [email,SetEmail]=React.useState('')
    const [password,SetPassword]=React.useState('')
    const [category,Setcategory]=React.useState('')
    const [err,SetError]=React.useState()
    const [succ,SetSucc]=React.useState()
    // const [userLoggedIn,SetuserLoggedIn]=React.useState('')
    
    React.useEffect(()=>{
        if(userData.user){
            history.push('/home')
        }
    },[])
   
    const loginHandler= async(e)=>{

        e.preventDefault()
        
             
        const loginUser={email,password,category}
        const {data}=await axios.post('http://localhost:5000/login',loginUser);
        
        let token1=data.token
        
        if(token1){
            SetUserData({
                token:token1,
                user:data.user,
                category:data.category
            })
            SetSucc(data.message)
            localStorage.setItem('Token',JSON.stringify(token1))
            localStorage.setItem('user',JSON.stringify(data.user))
            history.push('/home')
        }else{
            SetError(data.err)
            history.push('/login')
        }
       
        


    }
    return (
        
            <div className="login_form">
                <h2>USER LOGIN</h2>
                <form onSubmit={e=>loginHandler(e)} className="my_form">
                    {err ? <div className="error">
                        <p>{err}</p>
                    </div>:
                    succ ?
                    <div className="succ">
                        <p >{err}</p>
                    </div>:null}
                    
        
                    
                    <div className="emial">
                        <input type="email" placeholder="Enter your Email" value={email} onChange={e=>SetEmail(e.target.value)}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Enter your Password" value={password} onChange={e=>SetPassword(e.target.value)}/>
                    </div>
                    <div className="category">
                        <select onClick={e=>Setcategory(e.target.value)}>
                            <option disabled selected="selected" hidden value="none">Select an Option</option>
                            <option>Saving Account</option>
                            <option>Current Account</option>
                            
                            </select>
                    </div>
                    <div className="botton">
                        <input type="submit" value="Submit" />
                    </div>
                    <Link to="/resetpass" className="forgetpass">Forget Password...</Link>

                </form>
                    
            
            
        </div>
    )
}

export default LoginScreen
