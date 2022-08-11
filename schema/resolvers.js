const { UserList, MovieList } = require("../Fake-Data");
const _ = require("../packages/loadash.min");
const resolvers = {
  Query: {
    // all user
    users() {
      return UserList;
    },
    // single user
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // all movies
    movies: () => {
      return MovieList;
    },
    // single Movie
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favourite_movies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.year_of_publication >= 2014 && movie.year_of_publication <= 2022
      );
    },
  },
};

module.exports = { resolvers };
