import axios from 'axios';

export default async function fetchDeleteCategories(id) {
  const requestUsername = `http://localhost:3001/category/${id}`;
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
