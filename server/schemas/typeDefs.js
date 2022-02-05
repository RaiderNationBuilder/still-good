const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
<<<<<<< HEAD
  password: String
  saveItem: [String]
=======
  itemCount: Int
  savedItems: [Item]
>>>>>>> 018b3200d98a3406da10bf3821a5ff923addc8ee
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
input SavedItemInput {
  _id: ID
  categories: String
  storageLocation: String
  name: String
  quantity: Int
  addedDate: String
  expirationDate: String
}
input UpdateItemInput {
  _id: ID
  categories: String
  storageLocation: String
  name: String
  quantity: Int
  addedDate: String
  expirationDate: String
}

type Mutation { 
  login(email: String!, password: String!): Auth
  addUser(email: String!, password: String!): Auth
  saveItem(input: SavedItemInput): Item
  updateItem(input: UpdateItemInput): Item
  removeItem(_id: ID): Item
}
`;


module.exports = typeDefs;