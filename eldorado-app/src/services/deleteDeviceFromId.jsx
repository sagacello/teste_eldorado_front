import axios from 'axios';

export default async function fetchDeleteDevices(id) {
  const requestUsername = `http://localhost:3001/devices/${id}`;
  const requestHeader = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await axios.delete(requestUsername, requestHeader);
    const { data } = res;
    if (data) {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
