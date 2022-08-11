const MovieList = [
  {
    id: 1,
    name: "Avengers End Game",
    year_of_publication: 2019,
    isInTheatres: true,
  },
  {
    id: 5,
    name: "Interstellar",
    year_of_publication: 2014,
    isInTheatres: true,
  },
  {
    id: 2,
    name: "Moon Knight",
    year_of_publication: 2022,
    isInTheatres: false,
  },
  {
    id: 3,
    name: "The Batman",
    year_of_publication: 2022,
    isInTheatres: true,
  },
  {
    id: 4,
    name: "Iron Man 1 ",
    year_of_publication: 2009,
    isInTheatres: true,
  },
];
const UserList = [
  {
    id: 1,
    name: "John",
    username: "Johncena",
    age: 21,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Rio",
        username: "rio kannan",
        age: 22,
        nationality: "NEW_YORK",
      },
    ],
    // favourite_movies: [MovieList[0], MovieList[4]],
  },
  {
    id: 2,
    name: "Rio",
    username: "rio kannan",
    age: 22,
    nationality: "NEW_YORK",
  },
  {
    id: 3,
    name: "Rock",
    username: "therock",
    age: 30,
    nationality: "SPAIN",
  },
  {
    id: 4,
    name: "Brock",
    username: "Lesnar",
    age: 33,
    nationality: "BRAZIL",
  },
];

module.exports = { UserList, MovieList };
