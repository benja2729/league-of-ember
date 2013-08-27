require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"model/Champion":[function(require,module,exports){
module.exports=require('7N8O7N');
},{}],2:[function(require,module,exports){
var App;

require('templates');

App = Em.Application.create();


},{"templates":"Mhc1fx"}],"7N8O7N":[function(require,module,exports){
module.exports = console;


},{}],"Mhc1fx":[function(require,module,exports){
Ember.TEMPLATES["_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("LeagueSim");
  }

  data.buffer.push("\n<header class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <nav class=\"navbar-collapse collapse\" id=\"navbar-main\">\n      <ul class=\"nav navbar-nav\">\n\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"themes\">Themes <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"themes\">\n            <li><a tabindex=\"-1\" href=\"./default/\">Default</a></li>\n            <li class=\"divider\"></li>\n            <li><a tabindex=\"-1\" href=\"./amelia/\">Amelia</a></li>\n            <li><a tabindex=\"-1\" href=\"./cerulean/\">Cerulean</a></li>\n            <li><a tabindex=\"-1\" href=\"./cosmo/\">Cosmo</a></li>\n            <li><a tabindex=\"-1\" href=\"./cyborg/\">Cyborg</a></li>\n            <li><a tabindex=\"-1\" href=\"./flatly/\">Flatly</a></li>\n            <li><a tabindex=\"-1\" href=\"./journal/\">Journal</a></li>\n            <li><a tabindex=\"-1\" href=\"./readable/\">Readable</a></li>\n            <li><a tabindex=\"-1\" href=\"./simplex/\">Simplex</a></li>\n            <li><a tabindex=\"-1\" href=\"./slate/\">Slate</a></li>\n            <li><a tabindex=\"-1\" href=\"./spacelab/\">Spacelab</a></li>\n            <li><a tabindex=\"-1\" href=\"./united/\">United</a></li>\n          </ul>\n        </li>\n\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"http://builtwithbootstrap.com/\" target=\"_blank\">Built With Bootstrap</a></li>\n        <li><a href=\"https://wrapbootstrap.com/?ref=bsw\" target=\"_blank\">WrapBootstrap</a></li>\n      </ul>\n\n    </nav>\n\n  </div> <!-- .container -->\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  
});
},{}],"templates":[function(require,module,exports){
module.exports=require('Mhc1fx');
},{}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdmFyL2xpYi9zdGlja3NoaWZ0LzUyMTZlNzE1NTk3M2NhMjEyODAwMDk1NC9hcHAtcm9vdC9kYXRhLzU5MTY4MS9zcmMvY29mZmVlL21haW4uY29mZmVlIiwiL3Zhci9saWIvc3RpY2tzaGlmdC81MjE2ZTcxNTU5NzNjYTIxMjgwMDA5NTQvYXBwLXJvb3QvZGF0YS81OTE2ODEvc3JjL2NvZmZlZS9tb2RlbC9DaGFtcGlvbi5jb2ZmZWUiLCIvdmFyL2xpYi9zdGlja3NoaWZ0LzUyMTZlNzE1NTk3M2NhMjEyODAwMDk1NC9hcHAtcm9vdC9kYXRhLzU5MTY4MS9zcmMvaGFuZGxlYmFycy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsR0FBQSxDQUFBOztBQUFBLENBQUEsTUFBQSxJQUFBOztBQUVBLENBRkEsQ0FFUSxDQUFSLEdBQU0sS0FBYzs7OztBQ0ZwQixDQUFPLEVBQVUsR0FBWCxDQUFOOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSAndGVtcGxhdGVzJ1xuXG5BcHAgPSBFbS5BcHBsaWNhdGlvbi5jcmVhdGUoKSIsIm1vZHVsZS5leHBvcnRzID0gY29uc29sZSIsIkVtYmVyLlRFTVBMQVRFU1tcIl9oZWFkZXJcIl0gPSBFbWJlci5IYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIGFub255bW91cyhIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbnRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBFbWJlci5IYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9ICcnLCBzdGFjazEsIHN0YWNrMiwgaGFzaENvbnRleHRzLCBoYXNoVHlwZXMsIG9wdGlvbnMsIHNlbGY9dGhpcywgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3Npbmc7XG5cbmZ1bmN0aW9uIHByb2dyYW0xKGRlcHRoMCxkYXRhKSB7XG4gIFxuICBcbiAgZGF0YS5idWZmZXIucHVzaChcIkxlYWd1ZVNpbVwiKTtcbiAgfVxuXG4gIGRhdGEuYnVmZmVyLnB1c2goXCJcXG48aGVhZGVyIGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG4gICAgICBcIik7XG4gIGhhc2hDb250ZXh0cyA9IHsnY2xhc3MnOiBkZXB0aDB9O1xuICBoYXNoVHlwZXMgPSB7J2NsYXNzJzogXCJTVFJJTkdcIn07XG4gIG9wdGlvbnMgPSB7aGFzaDp7XG4gICAgJ2NsYXNzJzogKFwibmF2YmFyLWJyYW5kXCIpXG4gIH0saW52ZXJzZTpzZWxmLm5vb3AsZm46c2VsZi5wcm9ncmFtKDEsIHByb2dyYW0xLCBkYXRhKSxjb250ZXh0czpbZGVwdGgwXSx0eXBlczpbXCJTVFJJTkdcIl0saGFzaENvbnRleHRzOmhhc2hDb250ZXh0cyxoYXNoVHlwZXM6aGFzaFR5cGVzLGRhdGE6ZGF0YX07XG4gIHN0YWNrMiA9ICgoc3RhY2sxID0gaGVscGVycy5saW5rVG8gfHwgZGVwdGgwLmxpbmtUbyksc3RhY2sxID8gc3RhY2sxLmNhbGwoZGVwdGgwLCBcImluZGV4XCIsIG9wdGlvbnMpIDogaGVscGVyTWlzc2luZy5jYWxsKGRlcHRoMCwgXCJsaW5rVG9cIiwgXCJpbmRleFwiLCBvcHRpb25zKSk7XG4gIGlmKHN0YWNrMiB8fCBzdGFjazIgPT09IDApIHsgZGF0YS5idWZmZXIucHVzaChzdGFjazIpOyB9XG4gIGRhdGEuYnVmZmVyLnB1c2goXCJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNuYXZiYXItbWFpblxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8bmF2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXItbWFpblxcXCI+XFxuICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIiBpZD1cXFwidGhlbWVzXFxcIj5UaGVtZXMgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9hPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwidGhlbWVzXFxcIj5cXG4gICAgICAgICAgICA8bGk+PGEgdGFiaW5kZXg9XFxcIi0xXFxcIiBocmVmPVxcXCIuL2RlZmF1bHQvXFxcIj5EZWZhdWx0PC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcbiAgICAgICAgICAgIDxsaT48YSB0YWJpbmRleD1cXFwiLTFcXFwiIGhyZWY9XFxcIi4vYW1lbGlhL1xcXCI+QW1lbGlhPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIHRhYmluZGV4PVxcXCItMVxcXCIgaHJlZj1cXFwiLi9jZXJ1bGVhbi9cXFwiPkNlcnVsZWFuPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIHRhYmluZGV4PVxcXCItMVxcXCIgaHJlZj1cXFwiLi9jb3Ntby9cXFwiPkNvc21vPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIHRhYmluZGV4PVxcXCItMVxcXCIgaHJlZj1cXFwiLi9jeWJvcmcvXFxcIj5DeWJvcmc8L2E+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGEgdGFiaW5kZXg9XFxcIi0xXFxcIiBocmVmPVxcXCIuL2ZsYXRseS9cXFwiPkZsYXRseTwvYT48L2xpPlxcbiAgICAgICAgICAgIDxsaT48YSB0YWJpbmRleD1cXFwiLTFcXFwiIGhyZWY9XFxcIi4vam91cm5hbC9cXFwiPkpvdXJuYWw8L2E+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGEgdGFiaW5kZXg9XFxcIi0xXFxcIiBocmVmPVxcXCIuL3JlYWRhYmxlL1xcXCI+UmVhZGFibGU8L2E+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGEgdGFiaW5kZXg9XFxcIi0xXFxcIiBocmVmPVxcXCIuL3NpbXBsZXgvXFxcIj5TaW1wbGV4PC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIHRhYmluZGV4PVxcXCItMVxcXCIgaHJlZj1cXFwiLi9zbGF0ZS9cXFwiPlNsYXRlPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIHRhYmluZGV4PVxcXCItMVxcXCIgaHJlZj1cXFwiLi9zcGFjZWxhYi9cXFwiPlNwYWNlbGFiPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIHRhYmluZGV4PVxcXCItMVxcXCIgaHJlZj1cXFwiLi91bml0ZWQvXFxcIj5Vbml0ZWQ8L2E+PC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvbGk+XFxuXFxuICAgICAgPC91bD5cXG5cXG4gICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFxcXCI+XFxuICAgICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cDovL2J1aWx0d2l0aGJvb3RzdHJhcC5jb20vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+QnVpbHQgV2l0aCBCb290c3RyYXA8L2E+PC9saT5cXG4gICAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL3dyYXBib290c3RyYXAuY29tLz9yZWY9YnN3XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+V3JhcEJvb3RzdHJhcDwvYT48L2xpPlxcbiAgICAgIDwvdWw+XFxuXFxuICAgIDwvbmF2PlxcblxcbiAgPC9kaXY+IDwhLS0gLmNvbnRhaW5lciAtLT5cXG48L2hlYWRlcj5cIik7XG4gIHJldHVybiBidWZmZXI7XG4gIFxufSk7XG5cbkVtYmVyLlRFTVBMQVRFU1tcImFwcGxpY2F0aW9uXCJdID0gRW1iZXIuSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiBhbm9ueW1vdXMoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG50aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgRW1iZXIuSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIHZhciBzdGFjazEsIGhhc2hUeXBlcywgaGFzaENvbnRleHRzLCBvcHRpb25zLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG5cblxuICBoYXNoVHlwZXMgPSB7fTtcbiAgaGFzaENvbnRleHRzID0ge307XG4gIG9wdGlvbnMgPSB7aGFzaDp7fSxjb250ZXh0czpbZGVwdGgwXSx0eXBlczpbXCJTVFJJTkdcIl0saGFzaENvbnRleHRzOmhhc2hDb250ZXh0cyxoYXNoVHlwZXM6aGFzaFR5cGVzLGRhdGE6ZGF0YX07XG4gIGRhdGEuYnVmZmVyLnB1c2goZXNjYXBlRXhwcmVzc2lvbigoKHN0YWNrMSA9IGhlbHBlcnMucGFydGlhbCB8fCBkZXB0aDAucGFydGlhbCksc3RhY2sxID8gc3RhY2sxLmNhbGwoZGVwdGgwLCBcImhlYWRlclwiLCBvcHRpb25zKSA6IGhlbHBlck1pc3NpbmcuY2FsbChkZXB0aDAsIFwicGFydGlhbFwiLCBcImhlYWRlclwiLCBvcHRpb25zKSkpKTtcbiAgXG59KTsiXX0=
;