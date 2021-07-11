import axios from 'axios';

export default async function fetchCreateDevice(color, partNumber, categoryId) {
  const requestUserUrl = 'http://localhost:3001/device';

  const requestHeader = {
    'Content-Type': 'application/json',
  };

  const requestBody = {
    color,
    partNumber,
    categoryId,
  };
  try {
    const res = await axios.post(requestUserUrl, requestBody, {
      headers: requestHeader,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
}
