import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $authId: String!) {
    createUser(params: { name: $name, authId: $authId }) {
      name
    }
  }
`;

export const getUserQuery = () => {
  return gql`
    query {
      getUser(userId: null) {
        name
      }
    }
  `;
};
