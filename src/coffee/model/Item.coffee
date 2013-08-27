
# TODO: Add support for other rootKeys like groups
App.Item = Em.Model.extend
  colloq: Em.attr String
  consumeOnFull: Em.attr Boolean
  consumeable: Em.attr Boolean
  consumed: Em.attr Boolean
  depth: Em.attr Number
  description: Em.attr String
  from: Em.attr Array
  gold: Em.attr Object
  group: Em.attr String
  hideFromAll: Em.attr Boolean
  inStore: Em.attr Boolean
  into: Em.attr Array
  maps: Em.attr Object
  name: Em.attr String
  plaintext: Em.attr String
  requiredChampion: Em.attr String
  rune: Em.attr Object
  specialRecipe: Em.attr Number
  stacks: Em.attr Number
  stats: Em.attr Object
  tags: Em.attr Array
  # Not in basic rootKey
  image: Em.attr Object

Em.merge App.Item,
  url: 'assets/data'
  version: '3.10.3'
  rootKey: 'data'
  type: 'item'
