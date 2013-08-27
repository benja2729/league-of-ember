
require 'route/ChampionsRoute'
require 'route/ItemsRoute'

App.Router.map ->
  #@resource 'champion', path: ':champion_id', ->
  @resource 'champions', path: 'champions', ->
    @resource 'champion', path: ':champion_id', ->
  @resource 'items', path: 'items', ->
    @resource 'item', path: ':item_id', ->