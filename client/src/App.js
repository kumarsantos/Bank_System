
import React from 'react'
import "./App.css";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import Home from "./Pages/Home";
import { Route,useHistory  } from "react-router-dom";
import Header from "./components/Navbar/Header";
import ResetPassword from "./Pages/ResetPassword";
import Deposite from "./Pages/Deposite";
import Withdraw from "./Pages/Withdraw";
import HeroSection from "./Pages/HeroSection";
import axios from 'axios'


export const UserContext = React.createContext(null);



function App() {

  const history=useHistory()
  
  
  const [userData,SetUserData]=React.useState({
    token:undefined,
    user:undefined,
    userTransactionData:undefined
  });

 

  
React.useEffect(()=>{

  const CheckedLoggedIn=async ()=>{
    let token=JSON.parse(localStorage.getItem("Token"));
    if(token===null)
    {
      localStorage.removeItem("Token");
      // history.push('/')
    }else{
  
      
   const {data}= await axios.post("http://localhost:5000/",null,{headers:{authorization:token}});
   
   if(data.token)
   {
     SetUserData({
      token:data.token,
      user:data.user
    })
    history.push("/home");
    }
    if(!data.token)
    {
      history.push("/");
    }
  }
}
  CheckedLoggedIn();
},[])

  



  
  return (
    <UserContext.Provider value={{userData,SetUserData}}>
      <Header />
      <div className="app">
        <>
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/" component={HeroSection} exact />
          
          <Route path="/home" component={Home} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/resetpass" component={ResetPassword} exact />
          <Route path="/deposite" component={Deposite} exact />
          <Route path="/withdraw" component={Withdraw} exact />
        </>
      </div>
    </UserContext.Provider>
  );
}

export  {App};
