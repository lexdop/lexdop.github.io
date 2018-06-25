webpackJsonp([58446915265456],{111:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDifference=t.zeroPad=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(2),u=a(c),d=n(10),f=a(d),p=t.zeroPad=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return e;var n=String(e);return n.length>=t?n:("0".repeat(t)+n).slice(t*-1)},m=t.getTimeDifference=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.now,a=void 0===n?Date.now:n,r=t.precision,l=void 0===r?0:r,o=t.controlled,i=void 0!==o&&o,s="string"==typeof e?new Date(e):e,c=parseInt(1e3*(Math.max(0,i?s:s-a())/1e3).toFixed(Math.max(0,Math.min(20,l))),10),u=c/1e3;return{total:c,days:Math.floor(u/86400),hours:Math.floor(u/3600%24),minutes:Math.floor(u/60%60),seconds:Math.floor(u%60),milliseconds:Number((u%1*1e3).toFixed()),completed:c<=0}},h=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));v.call(n);var a=n.props,o=a.date,s=a.now,c=a.precision,u=a.controlled;return n.mounted=!1,n.state=i({},m(o,{now:s,precision:c,controlled:u})),n}return o(t,e),s(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.controlled||(this.interval=setInterval(this.tick,this.props.intervalDelay))}},{key:"componentWillReceiveProps",value:function(e){var t=e.date,n=e.now,a=e.precision,r=e.controlled;this.setDeltaState(m(t,{now:n,precision:a,controlled:r}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.clearInterval()}},{key:"setDeltaState",value:function(e){!this.state.completed&&e.completed&&(this.clearInterval(),this.props.onComplete&&this.props.onComplete(e)),this.mounted&&this.setState(i({},e))}},{key:"getFormattedDelta",value:function(){var e=this.state,t=e.days,n=e.hours,a=this.state,r=a.minutes,l=a.seconds,o=this.props,i=o.daysInHours,s=o.zeroPadLength;return i?(n=p(n+24*t,s),t=null):n=p(n,Math.min(2,s)),{days:t,hours:n,minutes:p(r,Math.min(2,s)),seconds:p(l,Math.min(2,s))}}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearInterval(this.interval),delete this.interval})},{key:"render",value:function(){var e=this.getFormattedDelta();if(this.props.renderer)return this.props.renderer(i({},this.props,this.state,e));if(this.state.completed&&this.props.children){var t=i({},this.props,this.state,e);return delete t.children,u.default.cloneElement(this.props.children,{countdown:t})}var n=e.days,a=e.hours,r=e.minutes,l=e.seconds;return u.default.createElement("span",null,n,null!=n?":":"",a,":",r,":",l)}}]),t}(u.default.Component),v=function(){var e=this;this.tick=function(){var t=e.props,n=t.date,a=t.now,r=t.precision,l=t.controlled,o=t.onTick,s=m(n,{now:a,precision:r,controlled:l});e.setDeltaState(i({},s)),o&&s.total>0&&o(s)}};t.default=h,h.propTypes={date:f.default.oneOfType([f.default.instanceOf(Date),f.default.string,f.default.number]).isRequired,daysInHours:f.default.bool,zeroPadLength:f.default.number,controlled:f.default.bool,intervalDelay:f.default.number,precision:f.default.number,children:f.default.any,renderer:f.default.func,now:f.default.func,onTick:f.default.func,onComplete:f.default.func},h.defaultProps={daysInHours:!1,zeroPadLength:2,controlled:!1,intervalDelay:1e3,precision:0,children:null}},76:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=a(r),o=n(3),i=(a(o),n(77)),s=(a(i),n(111)),c=a(s),u=function(e){var t=e.days,n=e.hours,a=e.minutes,r=e.seconds,o=e.completed;return o?l.default.createElement("span",null):isNaN(t)||isNaN(n)||isNaN(a)||isNaN(r)?l.default.createElement("span",null):l.default.createElement("div",{className:"district opening-time"},l.default.createElement("em",{className:"float-right"},l.default.createElement("span",null,t+" ngày "+n+" giờ "+a+" phút "+r+" giây")))},d=function(e){return l.default.createElement("div",{className:"container"},l.default.createElement("h3",{className:"s-title district-name"},e.city),l.default.createElement("div",{className:"docs-note"},l.default.createElement("p",null,"Số cửa hàng sắp đi vào hoạt động "," ",l.default.createElement("span",{className:"label label-secondary label-rounded"},e.nodes.length)),l.default.createElement("div",{className:"columns"},e.nodes.map(function(e){return l.default.createElement("div",{key:e.node.plf_id,className:"column col-6 col-xs-12"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"card-header"},l.default.createElement("div",{className:"card-title h5"},e.node.station_name),l.default.createElement("div",{className:"card-subtitle text-gray"},e.node.partner_type)),l.default.createElement("div",{className:"card-body"},l.default.createElement("div",{className:"card-subtitle text-gray"},e.node.complete_address)),l.default.createElement("div",{className:"card-footer"},l.default.createElement("a",{target:"_blank",href:"https://www.google.com/maps/search/?api=1&query="+e.node.complete_address},l.default.createElement("i",{className:"icon icon-2x icon-location"})),l.default.createElement(c.default,{date:e.node.planned_launch_date,renderer:u}))))})),l.default.createElement("div",{className:"divider"})))};t.default=d,e.exports=t.default},210:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HaNoiQuery=void 0;var r=n(2),l=a(r),o=n(3),i=(a(o),n(4)),s=a(i),c=n(76),u=a(c),d=function(e){var t=e.data,n=!!t.allLocationsXlsxSheet1;return n?l.default.createElement(u.default,{nodes:t.allLocationsXlsxSheet1.edges,city:"Hà Nội"}):l.default.createElement(s.default,null)};t.default=d;t.HaNoiQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-cua-hang-sap-mo-ha-noi-js-6883f33654e70272cd02.js.map