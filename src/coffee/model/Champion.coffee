
App.Champion = Em.Model.extend
  name: Em.attr String
  blurb: Em.attr String
  key: Em.attr String
  partype: Em.attr String
  title: Em.attr String
  version: Em.attr String
  image: Em.attr Object
  info: Em.attr Object
  stats: Em.attr Object
  tags: Em.attr Array

Em.merge App.Champion,
  url: 'assets/data'
  version: '3.10.3'
  rootKey: 'data'
  type: 'champion'
