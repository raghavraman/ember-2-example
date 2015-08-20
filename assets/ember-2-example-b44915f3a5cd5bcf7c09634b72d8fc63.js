"use strict";define("ember-2-example/acceptance-tests/main",["exports","ember-cli-sri/acceptance-tests/main"],function(e,t){e["default"]=t["default"]}),define("ember-2-example/app",["exports","ember","ember/resolver","ember/load-initializers","ember-2-example/config/environment"],function(e,t,n,a,r){var o;t["default"].MODEL_FACTORY_INJECTIONS=!0,o=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](o,r["default"].modulePrefix),e["default"]=o}),define("ember-2-example/components/chat-message/component",["exports","ember"],function(e,t){var n=t["default"].GlimmerComponent,a=t["default"].computed,r=a.alias;e["default"]=n.extend({classNameBindings:["sender:received","sender::sent"],isComponentFactory:!0,message:null,sender:r("attrs.message.sender")})}),define("ember-2-example/components/chat-message/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+68ddfa2d",loc:null,moduleName:"ember-2-example/components/chat-message/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","attrs.message.body",["loc",[null,[2,2],[2,24]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"ember-2-example/components/chat-message/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),a},statements:[["component","@<div>",[],0]],locals:[],templates:[e]}}())}),define("ember-2-example/components/chat-ui/component",["exports","ember"],function(e,t){var n=t["default"].Component,a=t["default"].computed,r=t["default"].on,o=a.alias,l=a.sort;e["default"]=n.extend({classNames:["medium-10"],isGlimmerComponent:!0,conversation:o("model"),sender:o("conversation.sender"),messages:o("model.chats"),sortedMessages:l("messages",function(e,t){var n=new Date(e.timestamp),a=new Date(t.timestamp);return n>a?1:a>n?-1:0}),scrollToBottom:function(){var e=this.$(".messages-wrapper").height();this.$(".messages").animate({scrollTop:e},"slow")},startAtBottom:r("didInsertElement",function(){this.scrollToBottom()}),actions:{sendMessage:function(e){var t=this.get("messages");t.push({body:e,timestamp:new Date}),this.set("messages",t),this.notifyPropertyChange("sortedMessages"),this.scrollToBottom()}}})}),define("ember-2-example/components/chat-ui/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+68ddfa2d",loc:null,moduleName:"ember-2-example/components/chat-ui/template.hbs"},isEmpty:!0,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment();return t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:10,column:4},end:{line:12,column:4}},moduleName:"ember-2-example/components/chat-ui/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["component","<chat-message>",["message",["subexpr","readonly",[["get","message",["loc",[null,[11,30],[11,37]]]]],[],[]]],0]],locals:["message"],templates:[e]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:1,column:0},end:{line:17,column:0}},moduleName:"ember-2-example/components/chat-ui/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","primary title-bar");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","center title");var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(" ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","right");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"target","_blank"),e.setAttribute(r,"href","https://github.com/EmberPittsburgh/ember-2-example");var o=e.createTextNode("Find the Code on Github");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","messages");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","messages-wrapper");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=new Array(4);return r[0]=e.createMorphAt(a,0,0),r[1]=e.createMorphAt(a,2,2),r[2]=e.createMorphAt(e.childAt(t,[2,1]),1,1),r[3]=e.createMorphAt(t,4,4,n),r},statements:[["content","sender.firstName",["loc",[null,[2,28],[2,48]]]],["content","sender.lastName",["loc",[null,[2,49],[2,68]]]],["block","each",[["get","sortedMessages",["loc",[null,[10,12],[10,26]]]]],[],0,null,["loc",[null,[10,4],[12,13]]]],["inline","message-input",[],["value",["subexpr","@mut",[["get","newMessage",["loc",[null,[16,22],[16,32]]]]],[],[]],"sendMessage",["subexpr","action",["sendMessage"],[],["loc",[null,[16,45],[16,67]]]]],["loc",[null,[16,0],[16,69]]]]],locals:[],templates:[e]}}())}),define("ember-2-example/components/conversation-item/component",["exports","ember"],function(e,t){var n=t["default"].computed,a=n.oneWay;e["default"]=t["default"].Component.extend({tagName:"li",sender:a("conversation.sender")})}),define("ember-2-example/components/conversation-item/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-2-example/components/conversation-item/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["inline","link-to",[["get","sender.firstName",["loc",[null,[1,10],[1,26]]]],"conversations.chat",["get","conversation",["loc",[null,[1,48],[1,60]]]]],[],["loc",[null,[1,0],[1,62]]]]],locals:[],templates:[]}}())}),define("ember-2-example/components/conversation-list/component",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({classNames:["grid-frame"],isGlimmerComponent:!0})}),define("ember-2-example/components/conversation-list/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:6,column:8},end:{line:8,column:8}},moduleName:"ember-2-example/components/conversation-list/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","conversation-item",[],["conversation",["subexpr","@mut",[["get","conversation",["loc",[null,[7,43],[7,55]]]]],[],[]]],["loc",[null,[7,10],[7,57]]]]],locals:["conversation"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"ember-2-example/components/conversation-list/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","grid-block medium-2 sidebar");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","grid-content");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("section");e.setAttribute(r,"class","block-list");var o=e.createTextNode("\n      ");e.appendChild(r,o);var o=e.createElement("header"),l=e.createTextNode("Conversations");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n      ");e.appendChild(r,o);var o=e.createElement("ul"),l=e.createTextNode("\n");e.appendChild(o,l);var l=e.createComment("");e.appendChild(o,l);var l=e.createTextNode("      ");e.appendChild(o,l),e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0,1,1,3]),1,1),a[1]=e.createMorphAt(t,2,2,n),a},statements:[["block","each",[["get","model",["loc",[null,[6,16],[6,21]]]]],[],0,null,["loc",[null,[6,8],[8,17]]]],["content","outlet",["loc",[null,[14,0],[14,10]]]]],locals:[],templates:[e]}}())}),define("ember-2-example/components/message-input/component",["exports","ember"],function(e,t){var n=t["default"].Component;e["default"]=n.extend({value:"",sendMessage:null,actions:{submit:function(){var e=this.get("value");this.attrs.sendMessage(e),this.set("value","")}}})}),define("ember-2-example/components/message-input/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.2.0-canary+68ddfa2d",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-2-example/components/message-input/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(" ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"class","button");var a=e.createTextNode("Send");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(2);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createElementMorph(a),e.insertBoundary(t,0),r},statements:[["inline","input",[],["value",["subexpr","@mut",[["get","value",["loc",[null,[1,14],[1,19]]]]],[],[]],"enter",["subexpr","action",["submit"],[],["loc",[null,[1,26],[1,43]]]]],["loc",[null,[1,0],[1,45]]]],["element","action",["submit"],[],["loc",[null,[1,64],[1,83]]]]],locals:[],templates:[]}}())}),define("ember-2-example/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-2-example/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-2-example/conversations/chat/route",["exports","ember","ic-ajax"],function(e,t,n){var a=t["default"].Route;e["default"]=a.extend({model:function(e){return n["default"]({url:"/api/conversations/"+e.chat_id}).then(function(e){var t=e.conversation;return t})},renderTemplate:function(){this.render({component:"chat-ui"})}})}),define("ember-2-example/conversations/route",["exports","ember","ic-ajax"],function(e,t,n){var a=t["default"].Route;e["default"]=a.extend({model:function(){return n["default"]({url:"/api/conversations"}).then(function(e){var t=e.conversations;return t})},redirect:function(){this.transitionTo("conversations.chat",1)},renderTemplate:function(){this.render({component:"conversation-list"})}})}),define("ember-2-example/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("ember-2-example/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("ember-2-example/initializers/ember-cli-mirage",["exports","ember-2-example/config/environment","ember-2-example/mirage/config","ember-cli-mirage/server","ember-cli-mirage/utils/read-modules"],function(e,t,n,a,r){function o(e,t){var n=e[t]||{};return _.keys(n).length>0}function l(e,t){var n="undefined"!=typeof t.enabled,a=i(e,t);return n?t.enabled:a}function i(e,t){var n="development"===e&&!t.usingProxy,a="test"===e;return n||a}e["default"]={name:"ember-cli-mirage",initialize:function(e,i){var s=t["default"].environment;if(l(s,t["default"]["ember-cli-mirage"])){var m=r["default"](t["default"].modulePrefix),d=o(m,"factories"),c=m.scenarios.hasOwnProperty("default"),u=o(m,"models"),p=new a["default"]({environment:s,modelsMap:u?m.models:null});p.loadConfig(n["default"]),"test"===s&&n.testConfig&&p.loadConfig(n.testConfig),"test"===s&&d?p.loadFactories(m.factories):"test"!==s&&c&&d?(p.loadFactories(m.factories),m.scenarios["default"](p)):p.db.loadData(m.fixtures)}}}}),define("ember-2-example/initializers/export-application-global",["exports","ember","ember-2-example/config/environment"],function(e,t,n){function a(e,a){if(n["default"].exportApplicationGlobal!==!1){var r,o=n["default"].exportApplicationGlobal;r="string"==typeof o?o:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=a,a.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("ember-2-example/instance-initializers/app-version",["exports","ember-2-example/config/environment","ember"],function(e,t,n){var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var o=a(e.toString());n["default"].libraries.register(o,t["default"].APP.version),r=!0}}}}),define("ember-2-example/mirage/config",["exports"],function(e){e["default"]=function(){this.namespace="/api",this.get("/conversations","conversations"),this.get("/conversations/:id","conversation")}}),define("ember-2-example/mirage/factories/chat",["exports","ember-cli-mirage"],function(e,t){e["default"]=t["default"].Factory.extend({sender:null,body:t.faker.lorem.sentence,timestamp:t.faker.date.recent})}),define("ember-2-example/mirage/factories/conversation",["exports","ember-cli-mirage"],function(e,t){e["default"]=t["default"].Factory.extend({sender:null,chats:null})}),define("ember-2-example/mirage/factories/user",["exports","ember-cli-mirage"],function(e,t){e["default"]=t["default"].Factory.extend({firstName:t.faker.name.firstName,lastName:t.faker.name.lastName})}),define("ember-2-example/mirage/scenarios/default",["exports"],function(e){e["default"]=function(e){for(var t=Math.floor(8*Math.random())+2,n=0;t>n;n++){var a=e.create("user"),r=e.createList("chat",10),o=e.createList("chat",10,{sender:a});e.create("conversation",{sender:a,chats:r.concat(o)})}}}),define("ember-2-example/router",["exports","ember","ember-2-example/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("conversations",{path:"/"},function(){this.route("chat",{path:"/chat/:chat_id"})})}),e["default"]=a}),define("ember-2-example/config/environment",["ember"],function(e){var t="ember-2-example";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("ember-2-example/tests/test-helper"):require("ember-2-example/app")["default"].create({name:"ember-2-example",version:"0.0.0+af2f99c6"});