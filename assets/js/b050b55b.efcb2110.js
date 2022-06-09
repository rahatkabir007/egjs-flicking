"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27561],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),N=p(n),u=a,g=N["".concat(o,".").concat(u)]||N[u]||d[u]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=N;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},50746:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],c={custom_edit_url:null},o=void 0,p={unversionedId:"api/EVENTS",id:"api/EVENTS",title:"EVENTS",description:"EVENTS",source:"@site/docs/api/EVENTS.mdx",sourceDirName:"api",slug:"/api/EVENTS",permalink:"/egjs-flicking/docs/next/api/EVENTS",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ERROR_CODE",permalink:"/egjs-flicking/docs/next/api/ERROR_CODE"},next:{title:"ALIGN",permalink:"/egjs-flicking/docs/next/api/ALIGN"}},m={},d=[{value:"EVENTS",id:"EVENTS",level:3}],N={toc:d};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const EVENTS\n")),(0,l.kt)("h3",{id:"EVENTS"},"EVENTS"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Event type object with event name strings of ",(0,l.kt)("a",{parentName:"p",href:"Flicking"},"Flicking")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"HOLD_START"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"holdStart"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"holdStart event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"HOLD_END"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"holdEnd"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"holdEnd event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"MOVE_START"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"moveStart"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"moveStart event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"MOVE"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"move"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"move event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"MOVE_END"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"moveEnd"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"moveEnd event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WILL_CHANGE"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"willChange"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"willChange event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"CHANGED"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"changed"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"changed event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"WILL_RESTORE"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"willRestore"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"willRestore event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"RESTORED"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"restored"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"restored event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SELECT"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"select"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"select event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NEED_PANEL"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"needPanel"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"needPanel event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PANEL_CHANGE"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"panelChange"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"panelChange event")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { EVENTS } from "@egjs/flicking";\nEVENTS.MOVE_START; // "moveStart"\n')))}u.isMDXComponent=!0}}]);