(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bf37c75"],{4028:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorArrayImage",t._b({attrs:{limit:1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"EditorArrayImage",t.$attrs,!1))},r=[],u=(n("d3b7"),n("f34e")),o={name:"EditorImage",components:{EditorArrayImage:function(){return n.e("chunk-235666d3").then(n.bind(null,"8b39"))}},mixins:[u["a"]],inheritAttrs:!0},a=o,c=n("2877"),s=Object(c["a"])(a,i,r,!1,null,null,null);e["default"]=s.exports},c5f5:function(t,e,n){"use strict";var i=n("5530");e["a"]={computed:{listenersWithoutInput:function(){var t=Object(i["a"])({},this.$listeners);return delete t.input,t}}}},f34e:function(t,e,n){"use strict";var i=n("c5f5");e["a"]={mixins:[i["a"]],props:{value:{type:[Object,String],required:!0},isMonoValid:{type:[Function],default:function(){return!0}},monoStruct:{type:Function,default:function(){return{}}}},computed:{model:{get:function(){return this.isMonoValid(this.value)?[this.value]:[]},set:function(t){t.length?this.$emit("input",t[t.length-1]):this.$emit("input",this.monoStruct())}}}}}}]);