(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b268f22"],{5517:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("EditorEnumSelect",e._g(e._b({attrs:{candidate:e.finalOptions,"is-candidate-valid":e.hasCachedOptions},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"EditorEnumSelect",e.$attrs,!1),e.listenersWithoutInput))},i=[],s=(a("d3b7"),a("57df")),r=a("e7a7"),u=a("f18e"),c={name:"EditorEnumRelatesSelect",components:{EditorEnumSelect:function(){return a.e("chunk-528c22fc").then(a.bind(null,"d978"))}},mixins:[s["a"],r["a"],u["a"]],inheritAttrs:!0},l=c,h=a("2877"),o=Object(h["a"])(l,n,i,!1,null,null,null);t["default"]=o.exports},"57df":function(e,t,a){"use strict";a("13d5"),a("dca8"),a("b64b"),a("d3b7");var n=a("961b");t["a"]={props:{getCandidate:{type:Function,required:!0},isValidValue:{type:Function,default:function(){return!0}},getCacheKey:{type:Function,default:function(e){return e}},handleInvalidRelateIds:{type:Function,default:function(){}},relateData:{type:Object,required:!0},handleRelateDataChange:{type:Function}},methods:{getOptions:function(){var e=this;if(!this.hasValidIds)return this.handleInvalidRelateIds();if(!this.hasCachedOptions){var t=this.relateKeys.reduce((function(t,a){return t[a]=e.relateData[a],t}),Object.create(null)),a=JSON.parse(JSON.stringify(this.relateData));new Promise((function(a){e.getCandidate(a,t)})).then((function(t){e.setCacheOptions(Object.freeze(t),a)})).catch(n["d"])}},setCacheOptions:function(e,t){var a=this.optionsCache,i=this.relateKeys.length,s=0;while(s<i-1){var r=this.relateKeys[s++],u=this.getCacheKey(t[r],t);Object(n["c"])(a,u)||this.$set(a,u,{}),a=a[u]}var c=this.relateKeys[i-1];this.$set(a,this.getCacheKey(t[c],c),e)}},computed:{relateKeys:function(){return Object.keys(this.relateData)},finalOptions:function(){if(!this.hasValidIds||!this.hasCachedOptions)return[];var e=this.relateKeys.length,t=0,a=this.optionsCache;while(t<e){var n=this.relateKeys[t++];a=a[this.getCacheKey(this.relateData[n],n)]}return a},hasValidIds:function(){return this.isValidValue(this.relateData)},hasCachedOptions:function(){var e,t=this.optionsCache,a=this.relateKeys.length,i=0;while(i<a){var s=this.relateKeys[i++];if(e=this.getCacheKey(this.relateData[s],s),!Object(n["c"])(t,e))return!1;t=t[e]}return!0}},data:function(){return{optionsCache:{}}},watch:{relateData:{handler:function(e,t){this.handleRelateDataChange&&this.handleRelateDataChange(e,t),this.getOptions()},immediate:!0}}}},c5f5:function(e,t,a){"use strict";var n=a("5530");t["a"]={computed:{listenersWithoutInput:function(){var e=Object(n["a"])({},this.$listeners);return delete e.input,e}}}},e7a7:function(e,t,a){"use strict";t["a"]={props:{value:{required:!0}}}},f18e:function(e,t,a){"use strict";var n=a("c5f5");function i(e){return e}t["a"]={mixins:[n["a"]],props:{value:{required:!0},getModelValue:{type:Function,default:i},setModelValue:{type:Function,default:i}},created:function(){var e=this;Object.defineProperty(this,"model",{get:function(){return e.getModelValue(e.value)},set:function(t){t!==e.model&&e.$emit("input",e.setModelValue(t))}})}}}}]);