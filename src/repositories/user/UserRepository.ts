import { gql } from '@apollo/client';

class UserRepository {
  /** @mutation */
  CREATE_USER = gql`
    mutation CreateUser($name: String!, $authId: String!) {
      createUser(params: { name: $name, authId: $authId }) {
        name
      }
    }
  `;

  /** @lazyQuery */
  GET_USER = gql`
    query {
      getUser(userId: null) {
        name
        userId
      }
    }
  `;
}

export default UserRepository;
