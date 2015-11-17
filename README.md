[![Build Status](https://travis-ci.org/SteveCastle/pancake-stack.svg?branch=master)](https://travis-ci.org/SteveCastle/pancake-stack)

# pancake-stack
A tasty full stack reactive application platform for fast, real time applications. Written functionally with Redux to manage state.

##Containers
Docker container for deploying application server.

##Data
PostgreSQL for relational data, and RethinkDB for realtime non critical data.

##Message Queue
RabitMQ to handle async application actions.

##Cache
Redis for caching.

##Static Files
Static Files deployed to AWS S3.

## API Documentation
RAML for definining application API specs.

##Application Server
Express.js and Socket.io for realtime api.

##Client
Fast and responsive React application with redux state management.

##Build Tooling
Build the front end js app as either a web app or react-native application with gulp.js.  Deploy servers in various configurations
with ansible.
