/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGames = /* GraphQL */ `
  mutation CreateGames(
    $input: CreateGamesInput!
    $condition: ModelGamesConditionInput
  ) {
    createGames(input: $input, condition: $condition) {
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
export const updateGames = /* GraphQL */ `
  mutation UpdateGames(
    $input: UpdateGamesInput!
    $condition: ModelGamesConditionInput
  ) {
    updateGames(input: $input, condition: $condition) {
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
export const deleteGames = /* GraphQL */ `
  mutation DeleteGames(
    $input: DeleteGamesInput!
    $condition: ModelGamesConditionInput
  ) {
    deleteGames(input: $input, condition: $condition) {
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
