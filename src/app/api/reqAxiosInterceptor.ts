import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import useLogOut from '@/app/(pages)/logout/useLogOut';

const reqAxios = axios.create({
  baseURL: process.env.BASE_URL,
});

const isExpired = (decodedToken: jwt.JwtPayload | string) => {
  const expiredAt = (decodedToken as jwt.JwtPayload).exp;
  return expiredAt ? expiredAt < Date.now() : true;
};

reqAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    if (token) {
      const decodedToken = jwt.decode(token);
      if (decodedToken && isExpired(decodedToken)) {
        useLogOut();
        return Promise.reject(new Error('App token expired'));
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default reqAxios;
