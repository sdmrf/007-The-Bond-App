import axios from 'axios';

const getIpAddressData = async (ip: string): Promise<any> => {
  const url = `http://ip-api.com/json/${ip}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching IP data:', error.message);
    throw error;
  }
};

export default getIpAddressData;
