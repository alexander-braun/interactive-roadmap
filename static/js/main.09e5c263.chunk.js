(this["webpackJsonproadmap-interactive"]=this["webpackJsonproadmap-interactive"]||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),d=n(9),m=n.n(d),r=n(6),o=n(10),a=n(1),l=(n(15),n(5)),s=n(32),h=n(3);var y=Object(i.memo)((function(e){var t=e.comment,n=e.id,d=e.index,m=Object(h.c)(),o=Object(i.useState)(t),a=Object(r.a)(o,2),l=a[0],s=a[1],y=Object(i.useState)(!1),p=Object(r.a)(y,2),f=p[0],b=p[1],O=Object(i.useRef)(null),j=function(){b(!f)};return c.a.createElement("li",null,c.a.createElement("textarea",{onChange:function(e){return s(e.target.value)},rows:2,maxLength:100,value:l,className:"comments-textarea",onFocus:j,onBlur:j}),c.a.createElement("button",{ref:O,className:"save-comment-button ".concat(f?"focus":""),type:"submit",onClick:function(){l.length&&m(function(e,t,n){return{type:"CHANGE_COMMENT",comment:e,id:t,index:n}}(l,n,d))}},"Save"))}));var p=Object(i.memo)((function(e){var t=e.child,n=Object(h.c)();return c.a.createElement(c.a.Fragment,null,t.mainKnot?null:c.a.createElement("div",{className:"comments-row"},t.comments&&c.a.createElement("ul",null,t.comments.map((function(e,n){return c.a.createElement(y,{key:Object(s.a)(),comment:e,index:n,id:t.id})}))),c.a.createElement("div",{className:"add-comment-button",onClick:function(e){return i=t.id,void n(function(e,t){return{type:"ADD_COMMENT",comment:e,id:t}}("",i));var i}},"Add Comment")))}));var f=Object(i.memo)((function(e){var t=e.child,n=Object(l.a)(e,["child"]);return c.a.createElement("div",{className:"elem ".concat(function(e){var t=[];return e.mainKnot?t.push("center"):e.mainKnot||t.push("element"),"not-recommended"!==e.recommended&&"not-recommended-none"!==e.recommended||t.push("notRecommended"),"option"===e.recommended&&t.push("option"),"not-strict"===e.recommended&&t.push("not-strict"),"not-recommended-option"===e.recommended&&t.push("not-recommended-option"),t}(t).join(" ")),id:t.id},!t.mainKnot&&"none"!==t.recommended&&"not-recommended-none"!==t.recommended&&c.a.createElement("div",{className:"indication-circle"},"\u2713"),!n.subchildren&&c.a.createElement("div",{className:"add-circle"},"+"),t.mainKnot&&c.a.createElement("div",{className:"inner-text"},t.title),t.mainKnot?null:c.a.createElement("div",{className:"heading"},c.a.createElement("div",{className:"inner-text"},t.title),c.a.createElement("div",{className:"due-date"},"26.05.2022")),c.a.createElement(p,{child:t}),t.mainKnot?null:c.a.createElement("div",{className:"bottom-row"},c.a.createElement("div",{className:"importance"},"Importance: 10"),c.a.createElement("div",{className:"status"},t.finished?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"green-dot"}),c.a.createElement("div",{className:"status-text"},"Done")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"red-dot"}),c.a.createElement("div",{className:"status-text"},"Pending")))))}));var b=Object(i.memo)((function(e){var t=e.children,n=Object(l.a)(e,["children"]);return Array.isArray(t)&&0===t.length?null:c.a.createElement("div",{className:"section__side-elements"},Array.isArray(t)?t.map((function(e){return c.a.createElement(f,{key:Object(s.a)(),child:e,subchildren:n.subchildren})})):c.a.createElement(f,{child:t,subchildren:n.subchildren}))}));var O=Object(i.memo)((function(e){var t=e.sections,n=t[0],i=t[1],d=t[2],m=function(e){if(!i)return[];if(1===i.length)return i;var t=Math.ceil(i.length/2);return"left"===e?i.slice(0,t):i.slice(t)},r=function(e){for(var t=[],n=[],c=0;c<i.length;c++){var m=i[c].children;if(m.length)for(var r=0;r<m.length;r++)c<Math.ceil(i.length/2)?t.push(m[r].id):n.push(m[r].id)}if(!d)return[];if(1===d.length){if("left"===e&&t.indexOf(d[0].id)>=0)return d;if("right"===e&&n.indexOf(d[0].id)>=0)return d}if("left"===e){for(var o=[],a=0;a<d.length;a++)t.indexOf(d[a].id)>=0&&o.push(d[a]);return o}for(var l=[],s=0;s<d.length;s++)n.indexOf(d[s].id)>=0&&l.push(d[s]);return l};return c.a.createElement("div",{className:"section"},c.a.createElement(b,{children:r("left"),subchildren:!0}),c.a.createElement(b,{children:m("left")}),c.a.createElement(b,{children:n,center:!0}),c.a.createElement(b,{children:1===i.length?[]:m("right")}),c.a.createElement(b,{children:r("right"),subchildren:!0}))}));var j=Object(i.memo)((function(e){var t=window.pageYOffset,n=e.center?"0":"5,15",i=e.center?"4":"2.5";return c.a.createElement("svg",{style:{position:"absolute"},className:"svg",width:"100%"},c.a.createElement("line",{x1:e.childRect.x>e.parentRect.x&&!e.center?e.parentRect.x+e.parentRect.width-5:e.center?e.parentRect.x+e.parentRect.width/2:e.parentRect.x+5,y1:e.parentRect.y+e.parentRect.height/2+t,x2:e.childRect.x<e.parentRect.x&&!e.center?e.childRect.x+e.childRect.width:e.center?e.childRect.x+e.childRect.width/2:e.childRect.x,y2:e.childRect.y+e.childRect.height/2+t,stroke:"#2b78e4",strokeDasharray:n,strokeLinecap:"round",strokeWidth:i}))}));var u=Object(i.memo)((function(e){var t=e.ids;return Object(l.a)(e,["ids"]),c.a.createElement("div",{className:"svgs"},t.map((function(e){return function(e){var t=document.getElementById(e[0]),n=document.getElementById(e[1]);if(t&&n){var i=t.getBoundingClientRect(),d=n.getBoundingClientRect();return t.classList.contains("center")&&n.classList.contains("center")?c.a.createElement(j,{key:Object(s.a)(),center:!0,parentRect:i,childRect:d}):c.a.createElement(j,{key:Object(s.a)(),parentRect:i,childRect:d})}return null}(e)})))})),g=n(17),v=n.n(g);var E=Object(i.memo)(Object(h.b)((function(e){return{data:e.data}}))((function(e){var t=e.data,n=Object(i.useCallback)((function(){var e,n={},i=Object(a.a)(t);try{for(i.s();!(e=i.n()).done;){var c,d=e.value,m=d,r=[],l=[],s=Object(a.a)(d.children);try{for(s.s();!(c=s.n()).done;){var h=c.value;h.children&&l.push.apply(l,Object(o.a)(h.children)),r.push(h)}}catch(y){s.e(y)}finally{s.f()}n[d.title]=[m,r,l]}}catch(y){i.e(y)}finally{i.f()}return n}),[t]),d=Object(i.useState)([]),m=Object(r.a)(d,2),l=m[0],h=m[1],y=Object(i.useState)({}),p=Object(r.a)(y,2),f=p[0],b=p[1];return Object(i.useEffect)((function(){b(n())}),[n]),c.a.createElement("div",{className:"map"},Object.keys(f).map((function(e){return c.a.createElement(O,{key:Object(s.a)(),sections:f[e]})})),c.a.createElement(v.a,{onResize:function(){h(function(){for(var e=[],n="",i=0;i<t.length;i++){var c=t[i],d=c.id;n.length&&e.push([n,d]),n=d;var m,r=Object(a.a)(c.children);try{for(r.s();!(m=r.n()).done;){var o=m.value,l=o.id;if(e.push([d,l]),o.children){var s,h=Object(a.a)(o.children);try{for(h.s();!(s=h.n()).done;){var y=s.value;e.push([l,y.id])}}catch(p){h.e(p)}finally{h.f()}}}}catch(p){r.e(p)}finally{r.f()}}return e}())}}),c.a.createElement(u,{ids:l}))})));var S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null))},R=n(2),x=n(18),N=n(19),C=[{title:"Front-end",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[]},{title:"Internet",type:"category",finished:!1,id:Object(s.a)(),importance:10,technologiesTags:[],goalDate:"20.01.2022",comments:["this is hard"],resources:["http://www.youtube.com"],order:!0,mainKnot:!0,children:[{title:"How does the internet work?",type:"element",children:[],id:Object(s.a)(),finished:!0,comments:[]},{title:"What is Domain Name?",type:"element",children:[],comments:["Redo this","whats going on here","this is a comment"],id:Object(s.a)(),finished:!1},{title:"What is hosting?",type:"element",children:[],id:Object(s.a)(),finished:!1,comments:[]},{title:"DNS and how it works?",type:"element",children:[],id:Object(s.a)(),finished:!1,comments:[]},{title:"What is HTTP?",type:"element",children:[],id:Object(s.a)(),finished:!1,comments:[]},{title:"Browsers and how they work?",type:"element",children:[],id:Object(s.a)(),finished:!1,comments:[]}]},{title:"HTML",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Learn the basics",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[]},{title:"Writing Semantic HTML",type:"element",id:Object(s.a)(),recommended:"not-strict",children:[],finished:!1,comments:[]},{title:"Forms and Validations",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[]},{title:"Conventions and Best Practices",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[]},{title:"Accessibility",type:"element",id:Object(s.a)(),children:[],recommended:"not-strict",finished:!1,comments:[]},{title:"SEO Basics",type:"element",id:Object(s.a)(),children:[],finished:!1,recommended:"not-strict",comments:[]}]},{title:"CSS",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Learn the basics",type:"element",id:Object(s.a)(),children:[],comments:[]},{title:"Making Layouts",type:"element",id:Object(s.a)(),finished:!1,children:[],comments:[]},{title:"Responsive design and Media Queries",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[{title:"Floats",type:"element",id:Object(s.a)(),finished:!1,children:[],comments:[]},{title:"Positioning",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Display",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Box Model",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"CSS Grid",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Flex Box",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]}]}]},{title:"Javascript",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Syntax and Basic Constructs",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Learn DOM Manipulation",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Learn Fetch API / Ajax (XHR)",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"ES6+ and modular Javascript",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Understand these concepts",type:"element",finished:!1,id:Object(s.a)(),comments:[],children:[{title:"Hoisting",type:"element",id:Object(s.a)(),finished:!1,children:[],comments:[]},{title:"Event Bubbling",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Scope",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Prototype",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Shadow DOM",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"strict",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]}]}]},{title:"Version Control Systems",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Repo hosting services",type:"category",id:Object(s.a)(),recommended:"none",finished:!1,comments:[],children:[{title:"GitHub",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"GitLab",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-option"},{title:"Bitbucket",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-option"}]},{title:"Basic Usage of Git",type:"category",id:Object(s.a)(),finished:!1,children:[],comments:[]}]},{title:"Web Security Knowledge",type:"category",id:Object(s.a)(),mainKnot:!0,recommended:"not-strict",finished:!1,comments:[],children:[{title:"HTTPS",type:"element",id:Object(s.a)(),children:[],comments:[],recommended:"not-strict"},{title:"Content Security Policy",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"CORS",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"OWASP Security Risks",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"}]},{title:"Package Managers",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"npm",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"yarn",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]}]},{title:"CSS Architecture",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"BEM",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"OOCSS",type:"element",id:Object(s.a)(),children:[],comments:[],finished:!1,recommended:"not-recommended-none"},{title:"SMACSS",type:"element",id:Object(s.a)(),finished:!1,children:[],comments:[],recommended:"not-recommended-none"}]},{title:"CSS Preprocessors",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Sass",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"PostCSS",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"Less",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Build Tools",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Linters and Formatters",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[{title:"Prettier",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"ESLint",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"StandardJS",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Task Runners",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[{title:"npm scripts",type:"category",id:Object(s.a)(),finished:!1,children:[],comments:[]},{title:"Gulp",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Module Bundlers",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[{title:"Webpack",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Rollup",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Parcel",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]}]},{title:"Pick a Framework",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"React.js",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[{title:"Redux",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"MobX",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]},{title:"Angular",type:"element",id:Object(s.a)(),recommended:"option",finished:!1,comments:[],children:[{title:"RxJS",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"NgRx",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]},{title:"Vue.js",type:"element",id:Object(s.a)(),recommended:"option",finished:!1,comments:[],children:[{title:"VueX",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]}]},{title:"Modern CSS",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Styled Components",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"CSS Modules",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Styled JSX",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Emotion",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Radium",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"},{title:"Glamorous",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Web Components",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],recommended:"not-strict",children:[{title:"HTML Templates",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"Custom Elements",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"Shadow DOM",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"}]},{title:"CSS Frameworks",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Reactstrap",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Material UI",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Tailwind CSS",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Chakra UI",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Bootstrap",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Materialize CSS",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Bulma",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]},{title:"Testing your Apps",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,comments:[],children:[{title:"Jest",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"react-testing-library",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Cypress",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Enzyme",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Mocha",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"},{title:"Chai",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"},{title:"Ava",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"},{title:"Jasmine",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Type Checkers",type:"category",id:Object(s.a)(),mainKnot:!0,recommended:"not-strict",finished:!1,comments:[],children:[{title:"TypeScript",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"Flow",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Progressive Web Apps",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,recommended:"not-strict",comments:[],children:[{title:"Calculating, Measuring, improving Performance",type:"category",id:Object(s.a)(),recommended:"not-strict",finished:!1,comments:[],children:[{title:"Storage",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Web Sockets",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Service Workers",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Location",type:"element",id:Object(s.a)(),comments:[],finished:!1,children:[]},{title:"Notifications",type:"element",id:Object(s.a)(),comments:[],finished:!1,children:[]},{title:"Device Orientation",type:"element",id:Object(s.a)(),comments:[],finished:!1,children:[]},{title:"Payments",type:"element",id:Object(s.a)(),finished:!1,children:[],comments:[]},{title:"Credentials",type:"element",id:Object(s.a)(),finished:!1,children:[],comments:[]}]},{title:"Web API's used in PWAs",type:"category",id:Object(s.a)(),recommended:"not-strict",finished:!1,comments:[],children:[{title:"PRPL Pattern",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"RAIL Model",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Performance Metrics",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Using Lighthouse",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Using DevTools",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]}]}]},{title:"Server Side Rendering",type:"category",id:Object(s.a)(),mainKnot:!0,recommended:"not-strict",finished:!1,comments:[],children:[{title:"React.js",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[{title:"Next.js",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"After.js",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Angular",type:"element",id:Object(s.a)(),recommended:"option",finished:!1,comments:[],children:[{title:"Universal",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]},{title:"Vue.js",type:"element",id:Object(s.a)(),recommended:"option",finished:!1,comments:[],children:[{title:"Nuxt.js",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]}]},{title:"GraphQL",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,recommended:"not-strict",comments:[],children:[{title:"Apollo",type:"category",id:Object(s.a)(),finished:!1,children:[],comments:[]},{title:"Relay Modern",type:"category",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]},{title:"Static Site Generators",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,recommended:"not-strict",comments:[],children:[{title:"Next.js",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"GatsbyJS",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Nuxt.js",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Vuepress",type:"element",id:Object(s.a)(),children:[],recommended:"option",comments:[],finished:!1},{title:"Jekyll",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"},{title:"Hugo",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"option"}]},{title:"Mobile Applications",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,recommended:"not-strict",comments:[],children:[{title:"React Native",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Native Script",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Flutter",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Ionic",type:"element",id:Object(s.a)(),finished:!1,comments:[],children:[]}]},{title:"Desktop Applications",type:"category",id:Object(s.a)(),mainKnot:!0,finished:!1,recommended:"not-strict",comments:[],children:[{title:"Electron",type:"category",id:Object(s.a)(),finished:!1,comments:[],children:[]},{title:"Carlo",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"},{title:"Proton Native",type:"element",id:Object(s.a)(),children:[],finished:!1,comments:[],recommended:"not-recommended-none"}]},{title:"Web Assembly",type:"category",id:Object(s.a)(),mainKnot:!0,children:[],finished:!1,comments:[],recommended:"not-strict"},{title:"Keep Learning",type:"category",id:Object(s.a)(),mainKnot:!0,children:[],comments:[],finished:!1}],M=Object(R.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=Object(o.a)(e);switch(t.type){case"ADD_COMMENT":var i,c=Object(a.a)(n);try{for(c.s();!(i=c.n()).done;){var d=i.value;if(d.id===t.id){if(d.comments.length>0&&!d.comments[d.comments.length-1])break;return d.comments.push(t.comment),n}if(d.children){var m,r=Object(a.a)(d.children);try{for(r.s();!(m=r.n()).done;){var l=m.value;if(l.id===t.id){if(l.comments.length>0&&!l.comments[l.comments.length-1])break;return l.comments.push(t.comment),n}if(l.children){var s,h=Object(a.a)(l.children);try{for(h.s();!(s=h.n()).done;){var y=s.value;if(y.id===t.id){if(y.comments.length>0&&!y.comments[y.comments.length-1])break;return y.comments.push(t.comment),n}}}catch(S){h.e(S)}finally{h.f()}}}}catch(S){r.e(S)}finally{r.f()}}}}catch(S){c.e(S)}finally{c.f()}return n;case"CHANGE_COMMENT":var p,f=Object(a.a)(n);try{for(f.s();!(p=f.n()).done;){var b=p.value;if(b.id===t.id)return b.comments[t.index]=t.comment,n;if(b.children){var O,j=Object(a.a)(b.children);try{for(j.s();!(O=j.n()).done;){var u=O.value;if(u.id===t.id)return u.comments[t.index]=t.comment,n;if(u.children){var g,v=Object(a.a)(u.children);try{for(v.s();!(g=v.n()).done;){var E=g.value;if(E.id===t.id)return E.comments[t.index]=t.comment,n}}catch(S){v.e(S)}finally{v.f()}}}}catch(S){j.e(S)}finally{j.f()}}}}catch(S){f.e(S)}finally{f.f()}return n;default:return e}}}),k=[N.a],K=Object(R.createStore)(M,{},Object(x.composeWithDevTools)(R.applyMiddleware.apply(void 0,k)));m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h.a,{store:K},c.a.createElement(S,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.09e5c263.chunk.js.map