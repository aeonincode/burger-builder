import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-7877d.firebaseio.com/',
});

export default instance;
