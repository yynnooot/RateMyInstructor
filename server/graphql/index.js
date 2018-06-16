var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queryType = require('./queries/user').queryType;
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
