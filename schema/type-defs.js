const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: nationality!
    friends: [User]
    favourite_movies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year_of_publication: Int!
    isInTheatres: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input createUserDetail {
    name: String!
    username: String!
    age: Int!
    nationality: nationality = INDIA
  }

  input updateUserNameInput {
    id: ID!
    newName: String!
  }

  type Mutation {
    createUser(input: createUserDetail!): User
    updateusername(input: updateUserNameInput!): User
    deleteUser(id: ID!): User
  }
  enum nationality {
    INDIA
    NEW_YORK
    SPAIN
    BRAZIL
  }
`;

module.exports = { typeDefs };
