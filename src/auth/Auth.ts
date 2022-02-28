import type { Auth0Error } from 'auth0-js';
import { WebAuth } from 'auth0-js';

class Auth {
  client: WebAuth;

  constructor() {
    this.client = new WebAuth({
      domain: '',
      clientID: '',
      audience: '',
      redirectUri: '',
      scope: '',
      responseType: '',
    });
  }

  signup(email: string, password: string) {
    return new Promise<any | Auth0Error>((resolve, reject) => {
      this.client.signup(
        {
          connection: '',
          email,
          password,
        },
        (error, result) => {
          error && reject(error);
          result && resolve(result);
        },
      );
    });
  }

  signin(username: string, password: string) {
    return new Promise<any | Auth0Error>((resolve, reject) => {
      this.client.login(
        {
          realm: '',
          username,
          password,
        },
        (error, result) => {
          error && reject(error);

          result && resolve(result);
        },
      );
    });
  }

  signout() {
    this.client.logout({
      clientID: '',
      returnTo: '',
    });
  }
}

export default Auth;
