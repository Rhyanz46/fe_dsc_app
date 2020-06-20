import { getToken } from './get_token';

export default {
  guest (to, from, next) {
    if (getToken()){
      next(false);
    }else{
      next()
    }
  },
  auth (to, from, next) {
    if (!getToken()){
      next({
        path: '/login',
        query: {
          redirect: 'Login'
        }
      });
    }
    else{
      next();
    }
  }
};
