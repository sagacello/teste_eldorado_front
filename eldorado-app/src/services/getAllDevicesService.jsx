import axios from 'axios';

export default async function fetchDevices() {
  const requestUsername = `http://localhost:3001/devicesCategories`;
  const requestHeader = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await axios.get(requestUsername, requestHeader);
    const { data } = res;
    if (data) {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
