function DbMock(){}

DbMock.prototype.execute = function(){
  return {
    script: arguments[0],
    params: arguments[1],
    callback: arguments[2]
  }
}

exports.db = new DbMock();
