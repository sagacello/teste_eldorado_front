import axios from 'axios';

export default async function fetchCreateCategory(name) {
  const requestUserUrl = 'http://localhost:3001/category';

  const requestHeader = {
    'Content-Type': 'application/json',
  };

  const requestBody = {
   name,
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
