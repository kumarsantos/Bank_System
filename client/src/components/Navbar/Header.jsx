import React, { useContext } from 'react'
import { UserContext } from '../../App'
import {Link,useHistory} from 'react-router-dom'

const Header = () => {

const history=useHistory()
    const {userData,SetUserData}=useContext(UserContext)

    

    React.useEffect(()=>{
        
    },[localStorage.getItem('Token')])

    const logout=(e)=>{
        
        localStorage.removeItem("Token");
        localStorage.removeItem('user')
        SetUserData({token:null,user:null})
        history.push('/login')
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <h2><Link to='/' className="heading">BANKING SYS</Link></h2>
                </div>
                <div className="menu_sec">
                    {!userData.user ?
                    (
                        <><div><Link to="/register" className="btn login">Create Acc.</Link></div>
                        <div><Link to="/login" className="btn login">Login</Link></div></>):
                    (<>
                    <div><Link to="/withdraw"className="btn">Withdraw</Link></div>
                    <div><Link to="/deposite" className="btn">Deposite</Link></div>
                    <div><Link to="/login" className="btn logout" onClick={e=>logout(e)} >Logout</Link></div>                    
                    </>)
                    }
                </div>

            </nav>
        </>
    )
}

export default Header
