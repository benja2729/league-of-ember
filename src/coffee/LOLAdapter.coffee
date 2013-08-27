get = Em.get
set = Em.set

App.LOLAdapter = Em.Adapter.extend
  loadRecord: (record, id, data) ->
    rootKey = get record.constructor, 'rootKey'
    # The {{rootKey}} is an object, not an array as expected
    dataToLoad = get data, "#{rootKey}.#{id}"
    record.load id, dataToLoad

  loadRecords: (klass, records, data) ->
    rootKey = get klass, 'rootKey'
    # The {{rootKey}} is an object, not an array as expected
    dataToLoad = (for own key, value of data[rootKey]
      value['id'] = key
      value
    )
    records.load klass, dataToLoad

  find: (record, id) ->
    url = @buildUrl record.constructor
    @ajax(url).then (data) =>
      @loadRecord record, id, data
      record
  #findQuery:
  #findMany:
  findAll: (klass, records) ->
    url = @buildUrl klass
    @ajax(url).then (data) =>
      @loadRecords klass, records, data
      records
  #createRecord:
  #saveRecord:
  #deleteRecord:

  buildUrl: (klass) ->
    url = get klass, 'url'
    type = get klass, 'type'
    "#{url}/#{type}.json"

  ajaxSettings: (url, method) ->
    url: url
    type: method
    dataType: 'json'

  ajax: (url, params, method = 'GET') ->
    settings = @ajaxSettings url, method
    new Ember.RSVP.Promise (resolve, reject) ->
      if params
        if method is "GET"
          settings.data = params
        else
          settings.contentType = "application/json; charset=utf-8"
          settings.data = JSON.stringify params
      promise = Em.$.ajax settings
      promise.done (json) ->
        Em.run null, resolve, json
      promise.fail (jqXHR, textStatus, errorThrown) ->
        # https://github.com/ebryn/ember-model/issues/202
        if jqXHR
          jqXHR.then = null
        Em.run null, reject, jqXHR
      return

Em.Model.reopenClass
  adapter: App.LOLAdapter.create()