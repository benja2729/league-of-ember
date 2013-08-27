
require 'model/Champion'
require 'controller/ChampionsController'
require 'view/ChampionsView'

App.ChampionsRoute = Em.Route.extend
  model: (params) ->
    App.Champion.find()