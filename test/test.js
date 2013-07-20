var should = require("should"),
  db = require('./dbMock').db,
  g = require('../lib/gremlin.js').db(db);

describe('Mock Database', function(){

  it('should exist and have execute', function(){
    should.exist(db);
  });

  describe('#execute', function(){

    it('should exist', function(){
      db.should.have.property('execute');
    });

    it('should be a method', function(){
      db.execute.should.be.a('function');
    });

    it('should return an object with script, params, and callback as properties that match arguments passed in', function(){
      var fullTestObj = db.execute('test1', 'test2', 'test3');
      fullTestObj.should.have.property('script', 'test1');
      fullTestObj.should.have.property('params', 'test2');
      fullTestObj.should.have.property('callback', 'test3');
    });
  
  });

});


describe('g', function(){
  it('should exist', function(){
    should.exist(g);
  });
});
