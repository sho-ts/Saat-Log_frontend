import { gql } from '@apollo/client';

export const createUserQuery = (name: string, authId: string) => {
  return gql`
    mutation {
      createUser(params: {
        name: "${name}"
        authId: "auth0|${authId}"
      }) {
        name
      }
    }
  `;
};

export const getUserQuery = () => {
  return gql`
    query {
      getUser(userId: null) {
        name
      }
    }
  `
}