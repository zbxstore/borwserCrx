webpackJsonp([2],{QNc8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MyFocus"},[s("section",{staticClass:"tag-focus"},[s("h2",[t._v("分类关注")]),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),s("p",t._l(t.formatOptions,function(e,i,n){return s("span",{key:n,class:{active:e},on:{click:function(s){t.toggleFocus(i,e,n),t.sendMsgToParent()}}},[t._v(" "+t._s(i)+" ")])}))]),t._v(" "),s("section",{staticClass:"tag-set"},[s("h2",[t._v("关键词定制")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.tagSet,expression:"tagSet",modifiers:{trim:!0}}],attrs:{cols:"30",rows:"10",placeholder:'请输入关键词以"@"分割可创建多个(如:运动@食品)',maxlength:"100"},domProps:{value:t.tagSet},on:{keyup:function(e){t.tagSet=t.tagSet.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@]/g,"")},input:[function(e){e.target.composing||(t.tagSet=e.target.value.trim())},function(e){t.listenTag()}],blur:function(e){t.$forceUpdate()}}}),t._v(" "),t._e(),t._v(" "),s("p",{staticClass:"tag-model"},t._l(t.reversedTag,function(e,i){return t.tagSet.length?s("span",{key:i,on:{click:function(e){t.tagDelete(i)}}},[t._v(" "+t._s(e))]):t._e()}))])])},staticRenderFns:[]};var n=s("VU/8")({name:"MyFocus",data:function(){return{formatOptions:"",tagSet:""}},props:["propOptions"],computed:{reversedTag:function(){for(var t=this.tagSet.split("@"),e=0;e<t.length;e++)""==t[e]&&(t.splice(e,1),e-=1);return t}},mounted:function(){this.selectedCategories(),this.selectedKeywords()},methods:{toggleFocus:function(t,e,s){this.formatOptions[t]=!e},sendMsgToParent:function(){var t=[];for(var e in this.formatOptions)this.formatOptions[e]&&t.push(e);this.$emit("listenChild",t)},selectedCategories:function(){for(var t={},e=this.propOptions.categories,s=this.propOptions.selectedCategories,i=0;i<e.length;i++)t[e[i]]=!1;for(i=0;i<s.length;i++)t[s[i]]=!0;this.formatOptions=t},selectedKeywords:function(){var t;t=this.propOptions.selectedKeywords.join("@"),this.tagSet=t},tagDelete:function(t){var e=this.reversedTag[t];t?this.tagSet=this.tagSet.replace("@"+e,""):1==this.reversedTag.length?this.tagSet="":this.tagSet=this.tagSet.replace(e+"@",""),this.$emit("listenTag",this.reversedTag)},listenTag:function(){var t=this;this.$nextTick(function(){t.$emit("listenTag",t.reversedTag)})}}},i,!1,function(t){s("dXEl")},"data-v-b7b2de24",null);e.default=n.exports},dXEl:function(t,e){}});