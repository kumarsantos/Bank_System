import React,{useContext} from 'react'
import { useHistory } from 'react-router'
import {UserContext} from '../App'

const HeroSection = () => {
    const history=useHistory()
    const {userData,SetUserData}=useContext(UserContext)

    React.useEffect(()=>{
        let token=JSON.parse(localStorage.getItem('Token'));
        if(token){
            SetUserData({
                token:token,
                user:JSON.parse(localStorage.getItem('user'))
            })
            history.push('/home')
        }else{
            SetUserData({
                token:null,
                user:null
            })
            history.push('/')
        }        
    },[])
    return (
        <div className="hero_section">
            <h1>Welcome</h1>
            <p>Please Login..</p>
        </div>
    )
}

export default HeroSection
