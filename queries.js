/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGames = /* GraphQL */ `
  query GetGames($id: ID!) {
    getGames(id: $id) {
      gameID
      bggID
      name
      description
      age
      image
      rules
      year
      players
      time
      tags
      id
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        gameID
        bggID
        name
        description
        age
        image
        rules
        year
        players
        time
        tags
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
