import { gql } from '@apollo/client';

export const GET_ME = gql`
 {
    me {
      _id
      username
      email
      savedItems {
        categories
        storageLocation
        addedDate
        expirationDate
        name
        quantity
      }
    }
  }
`;