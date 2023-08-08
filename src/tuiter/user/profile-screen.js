import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [savedProfile, setSavedProfile] = useState(currentUser);

  const handleUpdateChange = (event, field) => {
    const newProfile = { ...profile, [field]: event.target.value };
    setProfile(newProfile);
  };

  // const save = () => {
  //   dispatch(updateUserThunk(profile));
  // };
  
  //const save = async () => { await dispatch(updateUserThunk(profile)); };

  const save = async () => {
    const updateResponse = await dispatch(updateUserThunk(profile));
    const fetchResponse = await dispatch(profileThunk());
    
    if (updateResponse.payload && fetchResponse.payload) {
      setProfile(fetchResponse.payload); // Updates local state with fetched data
    }
  };
  

  // const save = async () => {
  //   await dispatch(updateUserThunk(profile)); // Makes API call to update backend
  //   const { payload } = await dispatch(profileThunk()); // Fetch the updated profile
  //   setProfile(payload); // Update the local state with the fetched data
  // };

  // useEffect(() => {
  //   async function fetchProfile() {
  //     const { payload } = await dispatch(profileThunk());
  //     setProfile(payload);
  //   }
  useEffect( () => {
    const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    };
   loadProfile();
}, []);

  //   fetchProfile();
  // }, [dispatch]);


  return (
    <div>
    <h1>Profile Screen</h1>
    {!profile && <h5> Please log in to see Profile.</h5>}
    {profile && (<div>
      <div>
       <label>First Name</label>
       {/* <input type="text" value={profile.firstName}
        onChange={(event) => {
         const newProfile = {
          ...profile, firstName: event.target.value,
         };
         setProfile(newProfile);
        }}/> */}

        <input
            type="text"
            value={profile.firstName}
            onChange={(event) => handleUpdateChange(event, "firstName")}
        />

      </div>
      <div>
       <label>Last Name</label>
       {/* <input type="text" value={profile.lastName}
        onChange={(event) => {
         const newProfile = {
          ...profile, lastName: event.target.value,
         };
         setProfile(newProfile);
        }}/> */}

        <input
            type="text"
            value={profile.lastName}
            onChange={(event) => handleUpdateChange(event, "lastName")}
        />

      </div></div>
    )}
    <button
     onClick={() => {
       dispatch(logoutThunk());
       navigate("/tuiter/login");
     }}>                   Logout</button>
    <button onClick={save}>Save  </button>
   </div>
  ); 
}
export default ProfileScreen;