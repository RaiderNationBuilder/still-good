import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql `
  mutation addUser($username: String!,$email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_ITEM = gql `
  mutation saveItem ($input: SavedItemInput) {
    saveItem (input: $input) {
      _id
      username
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

export const UPDATE_ITEM = gql `
  mutation updateItem ($input: UpdateItemInput) {
    updateItem (input: $input) {
      _id
      username
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

export const REMOVE_ITEM = gql`
  mutation removeItem ($_id: ID! ) {
    removeItem(_id: $_id) {
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