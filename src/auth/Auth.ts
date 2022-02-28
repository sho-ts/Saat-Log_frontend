import type { Auth0Error } from 'auth0-js';
import { WebAuth } from 'auth0-js';

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
    return new Promise<any | Auth0Error>((resolve, reject) => {
      this.client.login(
        {
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
      clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
      returnTo: process.env.NEXT_PUBLIC_AUTH0_LOGOUT_REDIRECT_URL!,
    });
  }
}

export default Auth;
