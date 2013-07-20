# gremlin-node

Proof-of-concept for using gremlin syntax in javascript. 

## Getting started
This is meant to sit on top of an existing neo4j database created with node-neo4j.

```javascript
var neo4j = require('neo4j'),
  db = new neo4j.GraphDatabase('http://localhost:7474'),
  g = require('./lib/gremlin.js').db(db);
```

Now, you should be able to start using gremlin syntax.  Some of the syntax has been altered to account for the fact that Groovy has some syntax available to it that JavaScript does not.

```javascript
g.v(1).out('likes').run( function(err, node) {
  if(err) {
    // deal with your problems
  }
  else {
    // the node object is what would be returned from a regular node-neo4j query
    console.log( node[0]._data );
  }
});
```


## Running the tests
Mocha is the testing framework with should.js for better assertion syntax.

    $ npm test


