import axios from 'axios';
import router from '../../router/router';

class AuthService {
  login(data) {
    return new Promise((resolve) => {
      // TODO Login
      setTimeout(() => {
        try {
          this.setHeadersAndToken('asdkljaslkdjlakdjalskdjlaskd');
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        resolve(true);
      }, 100);
    });
  }

  checkAuth() {
    // TODO Check auth
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  logout() {
    // TODO Logout
    try {
      this.removeHeadersAndToken();
    } catch (error) {
      console.log(error);
    }
  }

  setHeadersAndToken(token) {
    localStorage.setItem('token', token);
    axios.defaults.headers = { Authorization: `Bearer ${token}` };
    console.log(axios.defaults.headers, 'headers');
    router.push({ name: 'competitions' });
  }

  removeHeadersAndToken() {
    localStorage.removeItem('token');
    axios.defaults.headers = { Authorization: `` };
  }

  setInterceptor() {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status == 401) {
          throw error.response;
        }
      }
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}

export const authService = new AuthService();
