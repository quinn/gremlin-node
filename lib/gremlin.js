function Gremlin(options){
  this.db = options.db;
  return this;
}

Gremlin.prototype = {
  run: function(callback){
    console.log(this.script);
    this.db.execute(this.script, this.params, callback);
    return this;
  },

  v: function(val) {
    this._start('v(' + val + ')');
    return this;
  },

  V: function() {
    this._start('V');
    return this;
  },

  outE: function() {
    this.script += '.outE';
    return this;
  },

  out: function(val) {
    this.script += '.out';
    if(val) {
      this.script += '("' + val + '")';
    }
    return this;
  },

  in: function(val) {
    this.script += '.in';
    if(val) {
      this.script += '("' + val + '")';
    }
    return this;
  },

  _start: function(str) {
    this.script = this.script || '';
    this.script += 'g.' + str
  }
};

exports.db = function(db) {
  return new Gremlin({db: db});
};
