webpackJsonp([0x9427c64ab85d],{105:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var o=a(27),n=i(o),l=a(45),r=i(l),d=a(44),u=i(d),c=a(79),f=i(c),p=a(78),h=i(p),g=a(2),m=i(g),y=a(10),b=i(y),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],j=function(e,t){s().observe(e),L.push([e,t])},z=null,I=function(){if(null!==z)return z;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return z=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",r=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+n+l+t+a+o+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};R.propTypes={style:b.default.object,onLoad:b.default.func};var _=function(e){function t(a){(0,n.default)(this,t);var i=(0,r.default)(this,e.call(this,a)),s=!0,o=!0,l=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,o=!1,l=!0),"undefined"==typeof window&&(s=!1,o=!1),i.state={isVisible:s,imgLoaded:o,IOSupported:l},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,s=t.className,o=t.outerWrapperClassName,n=t.style,l=void 0===n?{}:n,r=t.imgStyle,d=void 0===r?{}:r,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,g=void 0;g="boolean"==typeof f?"lightgray":f;var y=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&I()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),m.default.createElement(p,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},m.default.createElement(p,{className:(s?s:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},m.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&m.default.createElement(R,{alt:i,title:a,src:w.base64,style:y}),w.tracedSVG&&m.default.createElement(R,{alt:i,title:a,src:w.tracedSVG,style:y}),g&&m.default.createElement(p,{title:a,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(R,{alt:i,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:i,title:a},w))}})))}if(c){var S=c,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},l);return"inherit"===l.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&I()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),m.default.createElement(p,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},m.default.createElement(p,{className:(s?s:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&m.default.createElement(R,{alt:i,title:a,src:S.base64,style:y}),S.tracedSVG&&m.default.createElement(R,{alt:i,title:a,src:S.tracedSVG,style:y}),g&&m.default.createElement(p,{title:a,style:{backgroundColor:g,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&m.default.createElement(R,{alt:i,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,h.default)({alt:i,title:a,width:S.width,height:S.height},S))}})))}return null},t}(m.default.Component);_.defaultProps={fadeIn:!0,alt:"",Tag:"div"},_.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=_},131:function(e,t,a){e.exports=a.p+"static/home.349ba35c.jpg"},209:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(2),o=i(s),n=a(3),l=i(n),r=a(105),d=(i(r),a(131)),u=(i(d),function(){return o.default.createElement("div",{className:"container"},o.default.createElement("h3",{className:"s-title"},"Có lỗi xảy ra"),o.default.createElement("div",{className:"docs-note"},o.default.createElement("p",null,"Hệ thống không tìm thấy tài nguyên bạn muốn truy xuất"),o.default.createElement("p",null,"Bạn có thể về"," ",o.default.createElement("mark",null,o.default.createElement(l.default,{to:"/"},"trang chủ"))," ","để tiếp tục"),o.default.createElement("div",{className:"divider"})))});t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-js-36c8b6ba95b41fd261a7.js.map