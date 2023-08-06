import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../services/auth-thunks";

function RegisterScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const handleRegister = async () => {
    try {
        const user = await dispatch(registrationThunk({ username, password, firstName, lastName, }));
        if (user.error) {
            alert("The username is used. Please enter a new one.")
        } else {
            navigate("/tuiter/login");
        }
    } catch (e) {
        alert(e);
    }
  };

 return ( 
   <div>
   <h1>Register Screen</h1>
   
   <div className="mt-2">
    <label>Username</label>
    <input className="form-control" type="text" value={username}
     onChange={(event) => setUsername(event.target.value)}/>
   </div>
   
   <div className="mt-2">
    <label>First Name</label>
    <input className="form-control" type="text" value={firstName}
     onChange={(event) => setFirstName(event.target.value)}/>
   </div>

   <div className="mt-2">
    <label>Last Name</label>
    <input className="form-control" type="text" value={lastName}
     onChange={(event) => setLastName(event.target.value)}/>
   </div>

   <div className="mt-2">
     <label>Password</label>
     <input className="form-control" type="password" value={password}
       onChange={(event) => setPassword(event.target.value)}/>
   </div>

   <button className="btn btn-primary mt-2" onClick={handleRegister}>
     Register
   </button>
  </div>
 );
}

export default RegisterScreen;