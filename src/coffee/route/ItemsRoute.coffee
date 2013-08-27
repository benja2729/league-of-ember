
require 'model/Item'
require 'controller/ItemsController'
require 'view/ItemsView'

App.ItemsRoute = Em.Route.extend
  model: (params) ->
    App.Item.find()