var neo4j = require('neo4j'),
  db = new neo4j.GraphDatabase('http://localhost:7474'),
  g = require('./lib/gremlin.js').db(db);

g.v(1).out('likes').run( function(err, node) {
  if(err) {
    console.log(err);
  }
  else {
    console.log( node[0]._data );
  }
});
