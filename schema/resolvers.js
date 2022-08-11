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

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const last_id = UserList[UserList.length - 1].id;
      user["id"] = last_id + 1;
      UserList.push(user);
      return user;
    },
    updateusername: (parent, args) => {
      const user_id = args.input.id;
      const newName = args.input.newName;
      const find_user = _.find(UserList, (user) => {
        if (user_id == user.id) {
          return user;
        }
      });
      find_user.name = newName;
      return find_user;
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
