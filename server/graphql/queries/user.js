const { GraphQLObjectType, GraphQLList } = require('graphql');
const User = require('../../models/user');
const userType = require('../types/user'); // cannot import from index??

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields() {
    return {
      users: {
        type: new GraphQLList(userType),
        async resolve() {
          const users = await User.find().populate({ path: 'reviews' });
          if (!users) {
            throw new Error('Error');
          }
          return users;
        },
      },
    };
  },
});
