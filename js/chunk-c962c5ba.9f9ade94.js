(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c962c5ba","chunk-2d21ee9d"],{"18cb":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("4de4"),n("4160"),n("d81d"),n("b0c0"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0");var o=n("2b0e");function i(e,t){t instanceof o["default"]&&(t=t.$options.components),Array.isArray(e)||(e=Object.keys(e).map((function(t){return{name:e[t].name,component:e[t].component}}))),e.forEach((function(e){t[e.name]=e.component}));var n=e.filter((function(e){var t=e.component;return"function"===typeof t&&!t.cid})).map((function(e){var n=e.component,o=e.name;return n().then((function(e){t[o]=e.default?e.default:e}))}));return Promise.all(n)}},"4de4":function(e,t,n){"use strict";var o=n("23e7"),i=n("b727").filter,r=n("1dde"),c=n("ae40"),a=r("filter"),s=c("filter");o({target:"Array",proto:!0,forced:!a||!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},7646:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button",e._b({on:{click:e.handleClick}},"el-button",e.triggerConfig,!1),[e._v(" "+e._s(e.triggerConfig.text)+" ")])},i=[],r=(n("d3b7"),n("5530")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},"el-dialog",e.dialogConfig,!1),[!e.hasInjectComponent||e.componentsInjected?n("MetaFieldsLayout",e._b({attrs:{fields:e.fields,"field-layout-list":e.fieldLayoutList,mode:"info"},scopedSlots:e._u([{key:"label",fn:function(t){var o=t.field;return[n("Labels",{attrs:{"label-name":e.fields[o].labelName,component:e.injectedLabelComponents[o],label:e.labelMap[o]}})]}},{key:"default",fn:function(t){var o=t.field;return[n("Views",{attrs:{view:e.fields[o].view,record:e.record,field:o,component:e.injectedViewComponents[o]}})]}}],null,!1,3846990759)},"MetaFieldsLayout",e.fieldsLayoutConfig,!1)):e._e()],1)},a=[],s=(n("b64b"),n("18cb")),u=n("cf84"),l=n("b28e"),d={name:"SingletonDocumentOperatorInfoDialog",components:{MetaFieldsLayout:function(){return n.e("chunk-2d0d6400").then(n.bind(null,"726e"))},Views:function(){return n.e("chunk-78869c5a").then(n.bind(null,"7b19"))},Labels:function(){return n.e("chunk-2d0a2d1b").then(n.bind(null,"0016"))}},props:{visible:{type:Boolean,default:!1},dialogConfig:{type:Object,default:function(){return{}}},fields:{type:Object,required:!0},fieldLayoutList:{type:Array,required:!0},record:{type:Object,required:!0},fieldsLayoutConfig:{type:Object,default:function(){return{}}}},state:{labelMap:{},needInjectLabelComponentsList:[],needInjectViewComponentsMap:{},hasInjectLabelComponents:!0,hasInjectViewComponents:!0,get hasInjectComponent(){return this.hasInjectLabelComponents||this.hasInjectViewComponents}},data:function(){return{labelComponentsInjected:!1,viewComponentsInjected:!1}},computed:{componentsInjected:function(){return this.labelComponentsInjected&&this.viewComponentsInjected}},watch:{fields:{handler:"init",immediate:!0}},methods:{init:function(){this.labelMap=Object(u["a"])(this.fields,Object.keys(this.fields),"info"),this.needInjectLabelComponentsList=Object(u["b"])(this.labelMap),this.needInjectViewComponentsMap=Object(l["a"])(this.fields,Object.keys(this.fields)),this.hasInjectLabelComponents=this.needInjectLabelComponentsList.length>0,this.hasInjectViewComponents=Object.keys(this.needInjectViewComponentsMap).length>0,this.injectLabelComponents(),this.injectViewComponents()},injectLabelComponents:function(){var e=this;this.injectedLabelComponents={},this.labelComponentsInjected=!1,this.hasInjectLabelComponents?Object(s["a"])(this.needInjectLabelComponentsList,this.injectedLabelComponents).then((function(){e.labelComponentsInjected=!0})):this.labelComponentsInjected=!0},injectViewComponents:function(){var e=this;this.injectedViewComponents={},this.viewComponentsInjected=!1,this.hasInjectViewComponents?Object(s["a"])(this.needInjectViewComponentsMap,this.injectedViewComponents).then((function(){e.viewComponentsInjected=!0})):this.viewComponentsInjected=!0}}},f=d,b=n("2877"),p=Object(b["a"])(f,c,a,!1,null,null,null),m=p.exports,h=n("961b"),j={name:"DocumentOperatorInfo",inheritAttrs:!0,props:{getDetailInfo:{type:Function,required:!0},data:{type:Object,required:!0},triggerConfig:{type:Object,default:function(){return{}}}},state:{fieldLayoutList:[],record:{}},methods:{handleClick:function(){var e=this;new Promise((function(t,n){e.getDetailInfo(t,e.data)})).then((function(t){var n=t.fieldLayoutList,o=t.record;e.fieldLayoutList=n,e.record=o,e.$singleton(m,Object(r["a"])({},e.$attrs,{visible:!0,fieldLayoutList:e.fieldLayoutList,record:e.record}),e)})).catch(h["d"])}}},y=j,v=Object(b["a"])(y,o,i,!1,null,null,null);t["default"]=v.exports},ade3:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},b28e:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("13d5"),n("b0c0");var o=n("5530");function i(e,t){return t.reduce((function(t,n){var i=e[n].view;if(i&&i.component){var r=Object(o["a"])({},i);r.name=n,t[n]=r}return t}),{})}},cf84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));n("caad"),n("13d5"),n("b64b"),n("2532");function o(e,t,n){return t.reduce((function(t,o){var i=e[o].label;if(i)if(i[n])t[o]=i[n];else if(i.default){var r=i.default.exclude;Array.isArray(r)&&r.includes(n)||(t[o]=i.default)}return t}),{})}function i(e){return Object.keys(e).reduce((function(t,n){return e[n].component&&t.push({name:n,component:e[n].component}),t}),[])}},d81d:function(e,t,n){"use strict";var o=n("23e7"),i=n("b727").map,r=n("1dde"),c=n("ae40"),a=r("map"),s=c("map");o({target:"Array",proto:!0,forced:!a||!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,n){var o=n("23e7"),i=n("83ab"),r=n("56ef"),c=n("fc6a"),a=n("06cf"),s=n("8418");o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,o=c(e),i=a.f,u=r(o),l={},d=0;while(u.length>d)n=i(o,t=u[d++]),void 0!==n&&s(l,t,n);return l}})},e439:function(e,t,n){var o=n("23e7"),i=n("d039"),r=n("fc6a"),c=n("06cf").f,a=n("83ab"),s=i((function(){c(1)})),u=!a||s;o({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return c(r(e),t)}})}}]);