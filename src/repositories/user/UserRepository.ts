import { gql } from '@apollo/client';
import { useLazyQuery, useMutation } from '@apollo/client';

class UserRepository {
  /** @mutation */
  createUser() {
    return useMutation<{ name: string }>(gql`
      mutation CreateUser($name: String!, $authId: String!) {
        createUser(params: { name: $name, authId: $authId }) {
          name
        }
      }
    `);
  }

  /** @lazyQuery */
  getCurrentUser() {
    return useLazyQuery<{ name: string }>(gql`
      query {
        getUser(userId: null) {
          name
        }
      }
    `);
  }
}

export default UserRepository;
