class Gremlin
  constructor: (options) ->
    @db = options.db

  run: (callback) ->
    @db.execute @script, @params, callback

  v: (options) ->
    @script ||= ''
    @script += "g.v(1)"
    @params ||= {}
    @params.vParam = options
    return this

  outE: ->
    @script += '.outE'
    return this

  out: (val) ->
    @script += ".out('#{val}')"
    return this

exports.db = (db) ->
  new Gremlin {db}
