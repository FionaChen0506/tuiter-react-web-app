import axios from 'axios';
//const TUITS_API = 'http://localhost:4000/api/tuits'; // location of HTTP services
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
    const tuits = response.data; // extract JSON array from response from server
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`) // append tuit's ID to URL
    return response.data
}

// service function accepts tuit to send server
// send HTTP PUT request appending tuit's ID to URL, and embed tuit object in BODY return tuit update to update in reducer's state's store
export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}