const { GraphQLObjectType } = require('graphql');
const { GraphQLList } = require('graphql');
const User = require('../../models/user');
const { userType } = require('../types/user');

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields() {
    return {
      users: {
        type: new GraphQLList(userType),
        async resolve() {
          const users = await User.find();
          if (!users) {
            throw new Error('Error');
          }
          return users;
        },
      },
    };
  },
});
