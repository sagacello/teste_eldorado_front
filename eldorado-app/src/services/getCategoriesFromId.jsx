import axios from 'axios';

export default async function fetchCategoriesFromId(id) {
  const requestUsername = `http://localhost:3001/devicesCategories/${id}`;
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
