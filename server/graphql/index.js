const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { queryType } = require('./queries/user');
// var mutation = require('./mutations/index');

const userSchema = new GraphQLSchema({
  query: queryType,
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: {
  //     name:'test'
  //   }
  // })
})


module.exports = { userSchema };
