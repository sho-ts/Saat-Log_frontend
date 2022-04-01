import type { Auth0Error, Auth0DecodedHash } from 'auth0-js';
import { WebAuth } from 'auth0-js';
import { v4 } from 'uuid';

class Auth {
  client: WebAuth;

  constructor() {
    this.client = new WebAuth({
      domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
      clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
      redirectUri: process.env.NEXT_PUBLIC_AUTH0_LOGIN_REDIRECT_URL!,
      scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
      responseType: process.env.NEXT_PUBLIC_AUTH0_RESPONSE_TYPE,
    });
  }

  parseHash() {
    return new Promise<Auth0DecodedHash>((resolve, reject) => {
      if (!window.location.hash) reject(new Error('hashがないです'));

      this.client.parseHash({ hash: window.location.hash }, (err, result) => {
        if (err || !result) reject(err || new Error('resultがないです'));

        localStorage.setItem('idToken', `${result?.idToken}`);
        resolve(result!);
      });
    });
  }

  signup(email: string, password: string) {
    return new Promise<any | Auth0Error>((resolve, reject) => {
      this.client.signup(
        {
          connection: process.env.NEXT_PUBLIC_AUTH0_CONNECTION!,
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
    const nonce = v4();
    localStorage.setItem('nonce', nonce);

    return new Promise<any | Auth0Error>((resolve, reject) => {
      this.client.login(
        {
          username,
          password,
          nonce,
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
      clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
      returnTo: process.env.NEXT_PUBLIC_AUTH0_LOGOUT_REDIRECT_URL!,
    });
  }

  getIdToken() {
    return localStorage.getItem('idToken');
  }

  checkIdToken() {
    const idToken = localStorage.getItem('idToken');
    const nonce = localStorage.getItem('nonce');

    return new Promise<boolean>((resolve, reject) => {
      if (idToken && nonce) {
        this.client.validateToken(idToken, nonce, (err, result) => {
          result && resolve(true);

          err && reject(err);
        });
      } else {
        reject('IDトークンがないです');
      }
    });
  }
}

export default Auth;
