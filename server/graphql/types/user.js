const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString,
}
  = require('graphql');

const { reviewType } = require('./');


// User Type
const userType = new GraphQLObjectType({
  name: 'User',
  fields() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
      school: {
        type: GraphQLString,
      },
      reviews: { type: new GraphQLList(reviewType) }
      ,
    };
  },
});

module.exports = userType;
