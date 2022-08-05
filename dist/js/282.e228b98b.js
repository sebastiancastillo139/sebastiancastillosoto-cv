"use strict";(self["webpackChunksebastiancastillosoto_cv"]=self["webpackChunksebastiancastillosoto_cv"]||[]).push([[282],{3282:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("PortfolioCardComp")],1)},i=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},e._l(e.getPortfolio,(function(t,s){return r("v-col",{key:s,attrs:{cols:"12",sm:"4"}},[r("v-card",{attrs:{href:t.link,target:"_blank"}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:t.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"350px"}},[r("v-card-title",{domProps:{textContent:e._s(t.name)}})],1)],1)],1)})),1)],1)],1)},n=[],o=r(629),l={name:"App",data:()=>({}),computed:{...(0,o.Se)(["getPortfolio"])}},c=l,d=r(1001),h=r(3453),u=r.n(h),g=r(5648),v=r(144),m=r(5827),p=r(8083),_=r(6952),f=r(3536),b=r(1431),y=r(8085),C=r(4589),k=r(3325);const B=(0,k.Z)(_.Z,(0,f.d)(["absolute","fixed","top","bottom"]),b.Z,y.Z);var V=B.extend({name:"v-progress-linear",directives:{intersect:p.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,C.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,C.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,C.kb)(this.normalizedValue,"%"),width:(0,C.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?m.Z5:m.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,C.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,C.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,r){this.isVisible=r},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,C.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),Z=V,$=v.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),x=r(3956),z=(0,k.Z)($,x.Z,g.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...x.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...g.Z.options.computed.classes.call(this)}},styles(){const e={...g.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=$.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}});(0,C.Ji)("v-card__actions"),(0,C.Ji)("v-card__subtitle"),(0,C.Ji)("v-card__text");const S=(0,C.Ji)("v-card__title");var E=r(2102),P=r(9846),w=r(7047),L=r(2877),N=(0,d.Z)(c,a,n,!1,null,null,null),R=N.exports;u()(N,{VCard:z,VCardTitle:S,VCol:E.Z,VContainer:P.Z,VImg:w.Z,VRow:L.Z});var T={name:"App",components:{PortfolioCardComp:R}},O=T,J=(0,d.Z)(O,s,i,!1,null,null,null),q=J.exports}}]);
//# sourceMappingURL=282.e228b98b.js.map