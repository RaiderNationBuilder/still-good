const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  email: String
  itemCount: Int
  savedBooks: [Item]
}
type Item {
  _id: ID
  categories: [String]
  storageLocation: String
  name: String
  quantity: Int
  addedDate: String
  expirationDate: String
}
type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  test: String
  users: [User]
  user(username: String!): User
}

type QuerySuper {
  test: String
}

type Mutation { 
  login(email: String!, password: String!): Auth
  addUser(email: String!, password: String!): Auth
  saveItem(_id: ID, categories: String!, storageLocation: String!, name: String, quantity: Int, addedDate: String!, expirationDate: String): Item
  removeItem(_id: ID): Item
}
`;


module.exports = typeDefs;