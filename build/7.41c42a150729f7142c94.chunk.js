webpackJsonp([7],{"./app/components/Checkbox/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),l=n.n(a),u=n("./node_modules/classnames/index.js"),s=n.n(u),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=c("div",{className:"input"}),p=function(e){function t(e,n){o(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.state={active:!1},i}return i(t,e),d(t,[{key:"set_state",value:function(e){this.setState({active:e}),this.props.handler(e)}},{key:"click_handler",value:function(){this.set_state(!this.state.active)}},{key:"render",value:function(){return console.log("draw checkbox"),c("label",{htmlFor:"tba",className:s()("checkbox","has-check",this.get_state_class()),onClick:this.click_handler.bind(this)},void 0,f)}},{key:"get_state_class",value:function(){return this.state.active?"active":void 0}}]),t}(l.a.Component);t.a=p},"./app/components/VideoManagerItem/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),l=n.n(a),u=n("./app/components/Checkbox/index.js"),s=n("./node_modules/react-router/es/index.js"),c=n("./node_modules/react-immutable-render-mixin/lib/index.js"),d=(n.n(c),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=d("td",{},void 0,"102 MB"),m=d("td",{},void 0,d("ul",{className:"list-j"},void 0,d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-trash"})," ",d("span",{},void 0,"Remove"))),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-pencil"})," ",d("span",{},void 0,"Edit"))),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-paperclip"})," ",d("span",{},void 0,"Attach"))),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-dots"})," ",d("span",{},void 0,"More")),d("ul",{},void 0,d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-resize"})," Move")),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-copy2"})," Copy files")),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-paperclip"})," Copy Links")),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-pencil"})," Rename")),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-flag2"})," Subtiles")),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-embed"})," Embeds")),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-picture"})," Change Splash")))))),v=d("td",{}),h=d("td",{},void 0,"102 MB"),b=d("td",{},void 0,"-"),y=d("td",{},void 0,"-"),_=d("td",{},void 0,d("ul",{className:"list-j"},void 0,d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-trash"})," ",d("span",{},void 0,"Remove"))),d("li",{},void 0,d("a",{href:"./"},void 0,d("i",{className:"icon-pencil"})," ",d("span",{},void 0,"Edit"))))),j=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"shouldComponentUpdate",value:function(e,t){return!n.i(c.shallowEqualImmutable)(this.props.item,e.item)}},{key:"render",value:function(){var e=this.props.item;return console.log("draw item"),"folder"==e.type?this.render_folder(e):this.render_file(e)}},{key:"set_state",value:function(e){this.refs.checkbox.set_state(e)}},{key:"render_file",value:function(e){var t=this;return d("tr",{},void 0,d("td",{},void 0,l.a.createElement(u.a,{ref:"checkbox",handler:function(n){return t.props.handler(e,"checkbox_event",n)}})),d("td",{},void 0,e.name),p,d("td",{},void 0,e.uploaded),d("td",{},void 0,e.downloads),m)}},{key:"render_folder",value:function(e){var t=this;return d("tr",{},void 0,v,d("td",{onClick:function(){return t.props.handler(e,"folder_click")}},void 0,d(s.b,{to:"/video-manager/"+e.id},void 0,e.name)),h,b,y,_)}}]),t}(l.a.Component);t.a=j},"./app/components/VideoManagerList/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),l=n.n(a),u=n("./app/components/VideoManagerItem/index.js"),s=n("./app/components/VideoManagerListController/index.js"),c=n("./app/components/Checkbox/index.js"),d=n("./node_modules/react-immutable-render-mixin/lib/index.js"),f=(n.n(d),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=f("th",{width:"350px"},void 0,"Name"),v=f("th",{},void 0,"Size"),h=f("th",{},void 0,"Uploaded at"),b=f("th",{},void 0,"Downloads"),y=f("th",{className:"cell-c"}),_=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"shouldComponentUpdate",value:function(e,t){return!n.i(d.shallowEqualImmutable)(this.props.files,e.files)}},{key:"on_item_event",value:function(e,t,n){"checkbox_event"==t&&this.refs.controller.on_event({item:e,selected:n})}},{key:"on_event",value:function(e){console.log("on event",e),this.refs.controller.set_state_all(e)}},{key:"set_state",value:function(e,t){this.refs["item_"+e].set_state(t)}},{key:"render",value:function(){var e=this;return console.log("draw list"),f("div",{},void 0,l.a.createElement(s.a,{files:this.props.files,set_state:this.set_state.bind(this),ref:"controller"}),f("table",{className:"table-b"},void 0,f("thead",{},void 0,f("tr",{},void 0,f("th",{className:"cell-a"},void 0,f(c.a,{handler:this.on_event.bind(this)})),m,v,h,b,y)),f("tbody",{},void 0,Object.keys(e.props.files).map(function(t){var n=e.props.files[t];return l.a.createElement(u.a,{ref:"item_"+n.id,key:n.id,item:n,handler:e.on_item_event.bind(e)})}))))}}]),t}(l.a.Component);t.a=_},"./app/components/VideoManagerListController/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/react.js"),l=n.n(a),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/immutable/dist/immutable.js"),d=c.Map,f=(c.List,c.Set),p=u("div",{}),m=function(e){function t(e,n){o(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.state={data:d({count:0,items:f()})},i}return i(t,e),s(t,[{key:"set_state_all",value:function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=this.props.files[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var a=r.value;"file"==a.type&&this.props.set_state(a.id,e)}}catch(e){n=!0,o=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}}},{key:"on_event",value:function(e){e.selected?this.setState(function(t){var n=t.data;return{data:n.update("items",function(t){return t.add(e.item.id)})}}):this.setState(function(t){var n=t.data;return{data:n.update("items",function(t){return t.remove(e.item.id)})}})}},{key:"render",value:function(){return console.log("VideoManagerListController render",this.state.data.get("items").toJS()),p}}]),t}(l.a.Component);t.a=m},"./app/containers/VideoManagerPage/index.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{loaded:function(){return e(n.i(p.a)())},dispatch:e}}var l=n("./node_modules/react/react.js"),u=n.n(l),s=n("./node_modules/react-redux/lib/index.js"),c=(n.n(s),n("./app/containers/VideoManagerPage/selectors.js")),d=n("./node_modules/element-class/index.js"),f=n.n(d),p=n("./app/containers/ModalsContainer/actions.js"),m=n("./app/components/VideoManagerList/index.js");n.d(t,"VideoManagerPage",function(){return _});var v=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=v("form",{action:"./",method:"post",className:"heading-a"},void 0,v("h1",{className:"header-c mb-c"},void 0,"Videos Manager"),v("div",{className:"form-f"},void 0,v("p",{},void 0,v("input",{type:"text",id:"ffa",name:"ffa",placeholder:"Search"}),v("button",{type:"submit"},void 0,"Submit")))),y=v("p",{className:"link-b text-center"},void 0,v("a",{href:"./"},void 0,"Load More (400 left)")),_=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"componentDidMount",value:function(){f()(document.documentElement).add("a"),f()(document.documentElement).add("b"),f()(document.documentElement).add("c")}},{key:"componentWillUnmount",value:function(){f()(document.documentElement).remove("a"),f()(document.documentElement).remove("b"),f()(document.documentElement).remove("c")}},{key:"create_folder",value:function(){console.log("create")}},{key:"render",value:function(){return v("article",{id:"content"},void 0,b,v("p",{className:"link-a b text-right"},void 0,v("a",{className:"a",onClick:this.create_folder},void 0,"Create Folder")),v(m.a,{files:this.props.files}),y)}}]),t}(u.a.Component),j=n.i(c.a)();t.default=n.i(s.connect)(j,a)(_)},"./app/containers/VideoManagerPage/selectors.js":function(e,t,n){"use strict";var o=n("./node_modules/reselect/es/index.js"),r=function(){return function(e){return e.get("videoManagerPage")}},i=function(){return n.i(o.a)(r(),function(e){return e.toJS()})};t.a=i},"./node_modules/classnames/index.js":function(e,t,n){var o,r;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},"./node_modules/element-class/index.js":function(e,t){function n(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1}function o(e){if(!(this instanceof o))return new o(e);e||(e={}),e.nodeType&&(e={el:e}),this.opts=e,this.el=e.el||document.body,"object"!=typeof this.el&&(this.el=document.querySelector(this.el))}e.exports=function(e){return new o(e)},o.prototype.add=function(e){var t=this.el;if(t){if(""===t.className)return t.className=e;var o=t.className.split(" ");return n(o,e)>-1?o:(o.push(e),t.className=o.join(" "),o)}},o.prototype.remove=function(e){var t=this.el;if(t&&""!==t.className){var o=t.className.split(" "),r=n(o,e);return r>-1&&o.splice(r,1),t.className=o.join(" "),o}},o.prototype.has=function(e){var t=this.el;if(t){var o=t.className.split(" ");return n(o,e)>-1}},o.prototype.toggle=function(e){var t=this.el;t&&(this.has(e)?this.remove(e):this.add(e))}},"./node_modules/react-immutable-render-mixin/lib/immutableRenderDecorator.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=function(t){function n(){return r(this,n),i(this,Object.getPrototypeOf(n).apply(this,arguments))}return a(n,t),u(n,[{key:"render",value:function(){return c.default.createElement(e,this.props,this.props.children)}}]),n}(s.Component);return t.prototype.shouldComponentUpdate=f.default,t}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=l;var s=n("./node_modules/react/react.js"),c=o(s),d=n("./node_modules/react-immutable-render-mixin/lib/shouldComponentUpdate.js"),f=o(d)},"./node_modules/react-immutable-render-mixin/lib/immutableRenderMixin.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react-immutable-render-mixin/lib/shouldComponentUpdate.js"),i=o(r);t.default={shouldComponentUpdate:i.default}},"./node_modules/react-immutable-render-mixin/lib/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.shallowEqualImmutable=t.shouldComponentUpdate=t.immutableRenderDecorator=t.default=void 0;var r=n("./node_modules/react-immutable-render-mixin/lib/shouldComponentUpdate.js"),i=o(r),a=n("./node_modules/react-immutable-render-mixin/lib/shallowEqualImmutable.js"),l=o(a),u=n("./node_modules/react-immutable-render-mixin/lib/immutableRenderMixin.js"),s=o(u),c=n("./node_modules/react-immutable-render-mixin/lib/immutableRenderDecorator.js"),d=o(c);t.default=s.default,t.immutableRenderDecorator=d.default,t.shouldComponentUpdate=i.default,t.shallowEqualImmutable=l.default},"./node_modules/react-immutable-render-mixin/lib/shallowEqualImmutable.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e===t||u(e,t))return!0;if("object"!==("undefined"==typeof e?"undefined":i(e))||null===e||"object"!==("undefined"==typeof t?"undefined":i(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var r=Object.prototype.hasOwnProperty.bind(t),a=0;a<n.length;a++)if(!r(n[a])||!u(e[n[a]],t[n[a]]))return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.default=r;var a=n("./node_modules/immutable/dist/immutable.js"),l=o(a),u=l.default.is.bind(l.default)},"./node_modules/react-immutable-render-mixin/lib/shouldComponentUpdate.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return!(0,a.default)(this.props,e)||!(0,a.default)(this.state,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n("./node_modules/react-immutable-render-mixin/lib/shallowEqualImmutable.js"),a=o(i)}});