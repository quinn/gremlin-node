class Gremlin
  constructor: (options) ->
    @db = options.db

  run: (callback) ->
    @db.execute @script, @params, callback

  v: (val) ->
    # @params ||= {}
    # @params.vParam = options
    @_start "v(#{val})"
    return this

  V: ->
    @_start 'V'
    return this

  outE: ->
    @script += '.outE'
    return this

  out: (val) ->
    @script += '.out'
    if val then @script += "('#{val}')"
    return this

  in: (val) ->
    @script += '.in'
    if val then @script += "('#{val}')"
    return this

  _start: (str) ->
    @script ||= ''
    @script += 'g.' + str

exports.db = (db) ->
  new Gremlin {db}
