"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43196],{72360:function(n,e,t){t.d(e,{Z:function(){return a}});var i=t(67294),l=t(86010),r="tabItem_OmH5";function a(n){var e=n.children,t=n.hidden,a=n.className;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,a),hidden:t},e)}},9877:function(n,e,t){t.d(e,{Z:function(){return g}});var i=t(87462),l=t(67294),r=t(72389),a=t(67392),o=t(7094),s=t(12466),u=t(86010),c="tabList_uSqn",p="tabItem_LplD";function m(n){var e,t,r,m=n.lazy,g=n.block,f=n.defaultValue,v=n.values,d=n.groupId,k=n.className,j=l.Children.map(n.children,(function(n){if((0,l.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:j.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,a.l)(h,(function(n,e){return n.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(e=null!=f?f:null==(t=j.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(r=j[0])?void 0:r.props.value;if(null!==y&&!h.some((function(n){return n.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),E=w.tabGroupChoices,F=w.setTabGroupChoices,N=(0,l.useState)(y),Z=N[0],S=N[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=E[d];null!=O&&O!==Z&&h.some((function(n){return n.value===O}))&&S(O)}var _=function(n){var e=n.currentTarget,t=x.indexOf(e),i=h[t].value;i!==Z&&(C(e),S(i),null!=d&&F(d,i))},D=function(n){var e,t=null;switch(n.key){case"ArrowRight":var i=x.indexOf(n.currentTarget)+1;t=x[i]||x[0];break;case"ArrowLeft":var l=x.indexOf(n.currentTarget)-1;t=x[l]||x[x.length-1]}null==(e=t)||e.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":g},k)},h.map((function(n){var e=n.value,t=n.label,r=n.attributes;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:Z===e?0:-1,"aria-selected":Z===e,key:e,ref:function(n){return x.push(n)},onKeyDown:D,onFocus:_,onClick:_},r,{className:(0,u.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":Z===e})}),null!=t?t:e)}))),m?(0,l.cloneElement)(j.filter((function(n){return n.props.value===Z}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},j.map((function(n,e){return(0,l.cloneElement)(n,{key:e,hidden:n.props.value!==Z})}))))}function g(n){var e=(0,r.Z)();return l.createElement(m,(0,i.Z)({key:String(e)},n))}},4220:function(n,e,t){t.d(e,{Z:function(){return w}});var i=t(63366),l=t(67294),r=t(9877),a=t(72360),o=t(25710),s=function(n,e){return void 0===e&&(e='"'),"string"==typeof n?""+e+n+e:n},u=function(n,e){return void 0===e&&(e="class"),n.class?" "+e+'="'+n.class+'"':""},c=function(n,e){return void 0===e&&(e=!1),n.style?e?" style={{ "+Object.keys(n.style).map((function(e){return e+": "+s(n.style[e])})).join(", ")+" }}":' style="'+Object.keys(n.style).map((function(e){return e+": "+n.style[e]+";"})).join(" ")+'"':""},p=function(n){return""+Object.keys(n).map((function(e){return e+": "+s(n[e],"'")})).join(", ")},m=function(n,e){var t=void 0===e?{}:e,i=t.prefix,l=t.includeFlicking,r=void 0===l||l?[["Flicking","@egjs/"+(i?i+"-":"")+"flicking"]]:[];return n&&r.push.apply(r,n),""+r.map((function(n){return Array.isArray(n)?"import "+n[0]+' from "'+n[1]+'";':'import "'+n+'";'})).join("\n")},g=function(n){return n.map((function(n){return"new "+n[0]+"("+(n[1]?"{ "+p(n[1])+" }":"")})).join(", ")+")"},f=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,p=void 0===a?{}:a,g=n.plugins,f=void 0===g?[]:g,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=function(n){return""+Object.keys(n).map((function(e){return e+": "+s(n[e])})).join(",\n  ")},b=Object.keys(p).map((function(n){return"const "+n+" = "+p[n]+";\n"})).join(""),y=e?'const flicking = new Flicking("#flick", {\n  '+h(e)+"\n});\n\n":'const flicking = new Flicking("#flick")',w=f.length>0?"flicking.addPlugins("+f.map((function(n){return"new "+n[0]+"("+(n[1]?"{\n  "+h(n[1])+"\n}":"")+")"}))+");":"",E=[].concat(f.map((function(n){return["{ "+n[0]+" }","@egjs/flicking-plugins"]})),j),F=Object.keys(r).map((function(n){return'flicking.on("'+n+'", '+r[n]+")\n"})).join(""),N=t.filter((function(n){return n.isSlot}));return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"html"},'<div id="flick" class="flicking-viewport'+(!1===e.horizontal?" vertical":"")+'">\n  <div class="flicking-camera">\n    '+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n    ")+"\n  </div>"+(N.length?"\n  "+N.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  "):"")+"\n</div>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-js",title:"js"},(m(E)+"\n\n"+b+y+w+F).trim()))},v=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,p=n.plugins,f=n.siblings,v=n.imports,d=void 0===v?[]:v,k=p?"\n  private _plugins = ["+g(p)+"];\n":"",j=t.filter((function(n){return n.isSlot})),h=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],b=Object.keys(s).map((function(n){return"\nconst "+n+" = "+s[n]+";"})).join("");b&&(b+="\n"),p&&h.push(["{ "+p.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]),h.push.apply(h,d);var y=j.length?"\n      <ViewportSlot>\n        "+j.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n        ")+"\n      </ViewportSlot>":"",w=Object.keys(r).map((function(n){return" on"+(n[0].toUpperCase()+n.slice(1))+"={"+r[n]+"}"})).join("");return l.createElement(o.Z,{className:"language-jsx",title:"DemoComponent.jsx"},m(h,{includeFlicking:!1})+"\n"+b+"\nexport default class DemoComponent extends Component {"+k+"\n  public render() {\n    return "+(f?"<>\n    ":"")+"<Flicking"+(e?" "+Object.keys(e).map((function(n){return n+"="+("string"==typeof e[n]?'"'+e[n]+'"':"{"+e[n]+"}")})).join(" "):"")+(p?" plugins={this._plugins}":"")+w+">\n      "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n      ")+y+"\n    </Flicking>"+(f?"\n    "+f.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n    ")+"\n    </>":"")+";\n  }\n}")},d=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=p(e),b=f?",\n  data() {\n    return {\n      plugins: ["+g(f)+"]\n    }\n  }":"",y=[].concat((null!=f?f:[]).map((function(n){return["{ "+n[0]+" }","@egjs/flicking-plugins"]})),j),w=Object.keys(s),E=w.length>0?",\n  methods: {\n    "+w.map((function(n){return n+": "+s[n].split("\n").map((function(n,e){return e>0?"    "+n:n})).join("\n")})).join(",\n")+"\n  }":"",F=Object.keys(r).map((function(n){return" @"+n.replace(/([A-Z])/g,"-$1").toLowerCase()+'="'+r[n]+'"'})).join("");return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"template"},"<Flicking"+(e?' :options="{ '+h+' }"':"")+(f?' :plugins="plugins"':"")+F+">\n  "+t.map((function(n){return"<"+n.tag+(n.isSlot?' slot="viewport"':"")+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  ")+"\n</Flicking>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-js",title:"script"},m(y,{prefix:"vue"})+"\n\nexport default {\n  components: {\n    Flicking\n  }"+b+E+"\n}"))},k=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=p(e),b=f?"\n  public plugins: Plugin[] = ["+g(f)+"];\n":"",y=[["{ Component }","@angular/core"],[f?"Flicking, { Plugin }":"Flicking","@egjs/ngx-flicking"]];f&&y.push(["{ "+f.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]);var w=Object.keys(s),E=w.length>0?"\n"+w.map((function(n){return(n+" = "+s[n]).split("\n").map((function(n){return"  "+n})).join("\n")}))+"\n":"",F=j.filter((function(n){return!Array.isArray(n)})),N=F.length?",\n  styleUrls: [\n"+F.map((function(n){return'    "../node_modules/'+n+'"'}))+"\n  ]":"";y.push.apply(y,j.filter((function(n){return Array.isArray(n)})));var Z=Object.keys(r).map((function(n){return" ("+n+')="'+r[n]+'($event)"'})).join("");return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"demo.component.html"},"<ngx-flicking"+(e?' [options]="{ '+h+' }"':"")+(f?' [plugins]="plugins"':"")+Z+">\n  "+t.map((function(n){return"<"+n.tag+" "+(n.isSlot?"in-viewport":"flicking-panel")+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  ")+"\n</ngx-flicking>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-ts",title:"demo.component.ts"},m(y,{includeFlicking:!1})+"\n\n@Component({\n  templateUrl: './demo.component.html'"+N+"\n})\nexport class DemoComponent {"+b+E+"}"))},j=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=p(e),b=t.filter((function(n){return n.isSlot})),y=f?",\n  data() {\n    return {\n      plugins: ["+g(f)+"]\n    }\n  }":"",w=b.length?"\n  <template #viewport>\n    "+b.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n    ")+"\n  </template>":"",E=[].concat((null!=f?f:[]).map((function(n){return["{ "+n[0]+" }","@egjs/flicking-plugins"]})),j),F=Object.keys(s),N=F.length>0?",\n  methods: {\n    "+F.map((function(n){return n+": "+s[n].split("\n").map((function(n,e){return e>0?"    "+n:n})).join("\n")})).join(",\n")+"\n  }":"",Z=Object.keys(r).map((function(n){return" @"+n.replace(/([A-Z])/g,"-$1").toLowerCase()+'="'+r[n]+'"'})).join("");return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"template"},"<Flicking"+(e?' :options="{ '+h+' }"':"")+(f?' :plugins="plugins"':"")+Z+">\n  "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  ")+w+"\n</Flicking>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-js",title:"script"},m(E,{prefix:"vue3"})+"\n\nexport default {\n  components: {\n    Flicking\n  }"+y+N+"\n}"))},h=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,p=n.plugins,f=n.siblings,v=n.imports,d=void 0===v?[]:v,k=p?"\n  private _plugins = ["+g(p)+"];\n":"",j=t.filter((function(n){return n.isSlot})),h=[["{ Component }","preact"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/preact-flicking"]],b=Object.keys(s).map((function(n){return"\nconst "+n+" = "+s[n]+";"})).join("");b&&(b+="\n"),p&&h.push(["{ "+p.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]),h.push.apply(h,d);var y=j.length?"\n      <ViewportSlot>\n        "+j.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n        ")+"\n      </ViewportSlot>":"",w=Object.keys(r).map((function(n){return" on"+(n[0].toUpperCase()+n.slice(1))+"={"+r[n]+"}"})).join("");return l.createElement(o.Z,{className:"language-jsx",title:"DemoComponent.jsx"},m(h,{includeFlicking:!1})+"\n"+b+"\nexport default class DemoComponent extends Component {"+k+"\n  public render() {\n    return "+(f?"<>\n    ":"")+"<Flicking"+(e?" "+Object.keys(e).map((function(n){return n+"="+("string"==typeof e[n]?'"'+e[n]+'"':"{"+e[n]+"}")})).join(" "):"")+(p?" plugins={this._plugins}":"")+w+">\n      "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n      ")+y+"\n    </Flicking>"+(f?"\n    "+f.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n    ")+"\n    </>":"")+";\n  }\n}")},b=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=n.imports,k=void 0===d?[]:d,j=p(e),h=f?"\n\nconst plugins = ["+g(f)+"];":"",b=t.filter((function(n){return n.isSlot})),y=Object.keys(s).map((function(n){return"\nconst "+n+" = "+s[n]+";"})).join("").replace(/(\s+)e\./g,"$1e.detail."),w=[["Flicking, { FlickingPanel }","@egjs/svelte-flicking"]];f&&w.push(["{ "+f.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]),w.push.apply(w,k);var E=Object.keys(r).map((function(n){return" on:"+n+"={"+r[n]+"}"})).join(""),F=b.length?'\n  <svelte:fragment slot="viewport">\n    '+b.map((function(n){return"<"+n.tag+u(n)+c(n,!0)+">"+n.content+"</"+n.tag+">"})).join("\n    ")+"\n  </svelte:fragment>":"";return l.createElement(o.Z,{className:"language-jsx",title:"DemoComponent.jsx"},'<script lang="ts">\n'+m(w,{includeFlicking:!1})+h+y+"\n<\/script>\n\n<Flicking"+(e?" options={{ "+j+" }}":"")+(f?" plugins={plugins}":"")+E+">\n  "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<FlickingPanel"+u(n)+c(n)+">"+n.content+"</FlickingPanel>"})).join("\n  ")+F+"\n</Flicking>"+(v?"\n"+v.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):""))},y=["js","react","vue","vue3","angular","preact","svelte"],w=function(n){var e=n.js,t=n.react,o=n.vue,s=n.vue3,u=n.angular,c=n.preact,p=n.svelte,m=(0,i.Z)(n,y);return l.createElement(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}]},l.createElement(a.Z,{value:"js"},e||l.createElement(f,m)),l.createElement(a.Z,{value:"react"},t||l.createElement(v,m)),l.createElement(a.Z,{value:"vue"},o||l.createElement(d,m)),l.createElement(a.Z,{value:"vue3"},s||l.createElement(j,m)),l.createElement(a.Z,{value:"angular"},u||l.createElement(k,m)),l.createElement(a.Z,{value:"preact"},c||l.createElement(h,m)),l.createElement(a.Z,{value:"svelte"},p||l.createElement(b,m)))}},97724:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var i=t(87462),l=t(63366),r=(t(67294),t(3905)),a=t(4220),o=["components"],s={title:"Rendering elements inside the wrapper element",id:"viewport-slot",slug:"/viewport-slot",custom_edit_url:null,sidebar_position:8},u=void 0,c={unversionedId:"tutorials/viewport-slot",id:"version-4.8.1/tutorials/viewport-slot",title:"Rendering elements inside the wrapper element",description:"You can place elements inside the .flicking-viewport element like the following:",source:"@site/versioned_docs/version-4.8.1/tutorials/viewport-slot.mdx",sourceDirName:"tutorials",slug:"/viewport-slot",permalink:"/egjs-flicking/docs/viewport-slot",draft:!1,editUrl:null,tags:[],version:"4.8.1",sidebarPosition:8,frontMatter:{title:"Rendering elements inside the wrapper element",id:"viewport-slot",slug:"/viewport-slot",custom_edit_url:null,sidebar_position:8},sidebar:"docs",previous:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/docs/ssr"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/migration-from-v3"}},p={},m=[],g={toc:m};function f(n){var e=n.components,t=(0,l.Z)(n,o);return(0,r.kt)("wrapper",(0,i.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can place elements inside the ",(0,r.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," element like the following:"),(0,r.kt)(a.Z,{options:{circular:!0},panels:[{tag:"div",class:"panel",content:"1"},{tag:"div",class:"panel",content:"2"},{tag:"div",class:"panel",content:"3"},{tag:"span",class:"item-inside-viewport",content:"",isSlot:!0},{tag:"span",class:"item-inside-viewport",content:"",isSlot:!0}],mdxType:"SourceCode"}))}f.isMDXComponent=!0}}]);