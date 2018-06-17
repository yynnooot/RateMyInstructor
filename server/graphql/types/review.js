const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
}
  = require('graphql');

const reviewType = new GraphQLObjectType({
  name: 'reviews',
  fields() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      status: {
        type: GraphQLString,
      },
      rating: {
        type: GraphQLInt,
      },
    };
  },
});

module.exports = reviewType;
