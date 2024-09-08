const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export default { getData };
