import { gql } from '@apollo/client';

export const createUser = (name: string, authId: string) => {
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