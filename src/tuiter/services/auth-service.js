import axios from "axios";
//const SERVER_API_URL = process.env.REACT_APP_API_BASE; // get the URL to the remote API
const SERVER_API_URL = 'https://tuiter-node-server-app-pv83.onrender.com/api'
const USERS_URL = `${SERVER_API_URL}/users`; // URL to auth controller

const api = axios.create({ withCredentials: true }); // configure axios to support cookies

export const login = async ({ username, password }) => { // for passing credentials
 // implement login service function
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 const user = response.data;
 return user;
};

// export const login = async ({ username, password }) => {
//     try {
//       console.log('Login request sent:', username, password);
//       const response = await api.post(`${USERS_URL}/login`, { username, password });
//       const user = response.data;
//       console.log('Login response:', user);
//       return user;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };
  

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    //const response = await api.get(`${USERS_URL}/profile`);
    return response;
};

export const updateUser = async (user) => {
    //const response = await api.put(`${USERS_URL}/${user._id}`, user);
    const response = await api.put(`${USERS_URL}`, user);
    return response.data;
};

export const register = async ({ username, password, firstName, lastName }) => {
    const response = await api.post(`${USERS_URL}/register`, {
        username, password, firstName, lastName
      });
      return response.data; //response.data is user
}