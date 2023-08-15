export const getProfile = async () => {
    const SERVER_API_URL = process.env.REACT_APP_API_BASE; 
    const response = await request.get(`${SERVER_API_URL}/profile`);
    return response;
  };
  