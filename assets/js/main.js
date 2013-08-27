require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"controller/ChampionsController":[function(require,module,exports){
module.exports=require('cHdBjU');
},{}],"kU8lbj":[function(require,module,exports){
var LOLAdapter, get, set;

get = Em.get;

set = Em.set;

LOLAdapter = Em.Adapter.extend({
  loadRecord: function(record, id, data) {
    var dataToLoad, rootKey;
    rootKey = get(klass, 'rootKey');
    dataToLoad = get(data, "" + rootKey + "." + id);
    return record.load(id, dataToLoad);
  },
  loadRecords: function(klass, records, data) {
    var dataToLoad, key, rootKey, value;
    rootKey = get(klass, 'rootKey');
    dataToLoad = (function() {
      var _ref, _results;
      _ref = data[rootKey];
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(value);
      }
      return _results;
    })();
    return records.load(klass, dataToLoad);
  },
  find: function(record, id) {
    var url,
      _this = this;
    url = this.buildUrl(record.constructor);
    return this.ajax(url).then(function(data) {
      _this.loadRecord(record, id, data);
      return record;
    });
  },
  findAll: function(klass, records) {
    var url,
      _this = this;
    url = this.buildUrl(klass);
    return this.ajax(url).then(function(data) {
      _this.loadRecords(klass, records, data);
      return records;
    });
  },
  buildUrl: function(klass) {
    var type, url;
    url = get(klass, 'url');
    type = get(klass, 'type');
    return "" + url + "/" + type + ".json";
  },
  ajaxSettings: function(url, method) {
    return {
      url: url,
      type: method,
      dataType: 'json'
    };
  },
  ajax: function(url, params, method) {
    var settings;
    if (method == null) {
      method = 'GET';
    }
    settings = this.ajaxSettings(url, method);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var promise;
      if (params) {
        if (method === "GET") {
          settings.data = params;
        } else {
          settings.contentType = "application/json; charset=utf-8";
          settings.data = JSON.stringify(params);
        }
      }
      promise = Em.$.ajax(settings);
      promise.done(function(json) {
        return Em.run(null, resolve, json);
      });
      promise.fail(function(jqXHR, textStatus, errorThrown) {
        if (jqXHR) {
          jqXHR.then = null;
        }
        return Em.run(null, reject, jqXHR);
      });
    });
  }
});

module.exports = LOLAdapter;


},{}],"cHdBjU":[function(require,module,exports){
var ChampionsController;

ChampionsController = Em.ArrayController.extend({
  init: function() {
    window.Champion = this;
    return this._super();
  }
});

module.exports = ChampionsController;


},{}],"templates":[function(require,module,exports){
module.exports=require('Mhc1fx');
},{}],"qBdupb":[function(require,module,exports){



},{}],"helper/championImage":[function(require,module,exports){
module.exports=require('qBdupb');
},{}],7:[function(require,module,exports){
var App;

require('templates');

Em.Model.reopenClass({
  adapter: require('adapter/LOLAdapter').create()
});

window.App = App = Em.Application.create();

App.Router.map(function() {
  return this.resource('champions', {
    path: 'champions'
  }, function() {
    return this.resource('champion', {
      path: ':champion_id'
    }, function() {});
  });
});

App.Champion = require('model/Champion');

App.ChampionsRoute = require('route/ChampionsRoute');

App.ChampionsController = require('controller/ChampionsController');

App.ChampionsView = require('view/ChampionsView');

App.ChampionView = Em.View.extend();

App.ImageView = Em.View.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  src: Em.computed(function() {
    return "http://ddragon.leagueoflegends.com/cdn/3.10.3/img/champion/" + this.get('context.image.full');
  }).volatile()
});


},{"adapter/LOLAdapter":"kU8lbj","controller/ChampionsController":"cHdBjU","model/Champion":"7N8O7N","route/ChampionsRoute":"ey1VVl","templates":"Mhc1fx","view/ChampionsView":"kv+Ht+"}],"7N8O7N":[function(require,module,exports){
var Champion;

Champion = Em.Model.extend({
  name: Em.attr(String),
  blurb: Em.attr(String),
  key: Em.attr(String),
  partype: Em.attr(String),
  title: Em.attr(String),
  version: Em.attr(String),
  image: Em.attr(Object),
  info: Em.attr(Object),
  stats: Em.attr(Object),
  tags: Em.attr(Array)
});

Em.merge(Champion, {
  url: 'data',
  version: '3.10.3',
  rootKey: 'data',
  type: 'champion'
});

module.exports = Champion;


},{}],"adapter/LOLAdapter":[function(require,module,exports){
module.exports=require('kU8lbj');
},{}],"ey1VVl":[function(require,module,exports){
var ChampionsRoute;

ChampionsRoute = Em.Route.extend({
  model: function(params) {
    return App.Champion.find();
  }
});

module.exports = ChampionsRoute;


},{}],"route/ChampionsRoute":[function(require,module,exports){
module.exports=require('ey1VVl');
},{}],"kv+Ht+":[function(require,module,exports){
var ChampionsView;

ChampionsView = Em.View.extend();

module.exports = ChampionsView;


},{}],"view/ChampionsView":[function(require,module,exports){
module.exports=require('kv+Ht+');
},{}],"model/Champion":[function(require,module,exports){
module.exports=require('7N8O7N');
},{}],"Mhc1fx":[function(require,module,exports){
Ember.TEMPLATES["_header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("LeagueSim");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Champions");
  }

  data.buffer.push("\n<header class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <nav class=\"navbar-collapse collapse\" id=\"navbar-main\">\n      <ul class=\"nav navbar-nav\">\n\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"themes\">Themes <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"themes\">\n            <li><a tabindex=\"-1\" href=\"./default/\">Default</a></li>\n            <li class=\"divider\"></li>\n            <li><a tabindex=\"-1\" href=\"./amelia/\">Amelia</a></li>\n            <li><a tabindex=\"-1\" href=\"./cerulean/\">Cerulean</a></li>\n            <li><a tabindex=\"-1\" href=\"./cosmo/\">Cosmo</a></li>\n            <li><a tabindex=\"-1\" href=\"./cyborg/\">Cyborg</a></li>\n            <li><a tabindex=\"-1\" href=\"./flatly/\">Flatly</a></li>\n            <li><a tabindex=\"-1\" href=\"./journal/\">Journal</a></li>\n            <li><a tabindex=\"-1\" href=\"./readable/\">Readable</a></li>\n            <li><a tabindex=\"-1\" href=\"./simplex/\">Simplex</a></li>\n            <li><a tabindex=\"-1\" href=\"./slate/\">Slate</a></li>\n            <li><a tabindex=\"-1\" href=\"./spacelab/\">Spacelab</a></li>\n            <li><a tabindex=\"-1\" href=\"./united/\">United</a></li>\n          </ul>\n        </li>\n        <li>\n          ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "champions", options) : helperMissing.call(depth0, "linkTo", "champions", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"http://builtwithbootstrap.com/\" target=\"_blank\">Built With Bootstrap</a></li>\n        <li><a href=\"https://wrapbootstrap.com/?ref=bsw\" target=\"_blank\">WrapBootstrap</a></li>\n      </ul>\n\n    </nav>\n\n  </div> <!-- .container -->\n</header>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
  data.buffer.push("\n<div class=\"body\">\n<div class=\"container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["champion"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(": ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ImageView", {hash:{
    'classNames': ("pull-right img-polaroid")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blurb", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>");
  return buffer;
  
});

Ember.TEMPLATES["champions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n      <li>\n        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "champion", "", options) : helperMissing.call(depth0, "linkTo", "champion", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </li>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(": ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  }

  data.buffer.push("\n<div class=\"row\">\n  <aside class=\"col-lg-3\">\n    <ol>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ol>\n  </aside>\n  <section class=\"col-lg-9\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </section>\n</div>");
  return buffer;
  
});
},{}]},{},[7])
;