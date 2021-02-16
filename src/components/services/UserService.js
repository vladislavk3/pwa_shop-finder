import axios from 'axios';

class UserService {
  signup(user) {
    return axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/signup`,
      user,
    );
  }

  signin(user) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, user);
  }
}

export default new UserService();
