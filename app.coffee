neo4j = require('neo4j')
db = new neo4j.GraphDatabase('http://localhost:7474')
g = require('./lib/gremlin.coffee').db(db)

g.v(1).outE().run (err, node) ->
  console.log node

