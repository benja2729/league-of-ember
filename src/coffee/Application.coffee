
window.App = Em.Application.create()

#window.App = App

App.ImageView = Em.View.extend
  tagName: 'img'
  attributeBindings: ['src']
  src: Em.computed( ->
    "http://ddragon.leagueoflegends.com/cdn/3.10.3/img/champion/" + @get('context.image.full')
  ).volatile()