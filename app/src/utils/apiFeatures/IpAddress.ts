import axios from 'axios';

const IpAddress = async ({ip}: any) => {
  const url = `https://ipapi.co/${ip}/json/`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching IP data:', error.message);
    throw error;
  }
};

export default IpAddress;
