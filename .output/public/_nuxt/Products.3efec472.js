import{_ as M}from"./nuxt-link.57e18026.js";import{_ as m,o as a,c as r,a as e,b as p,w as $,d as w,p as h,e as f,g as x,r as D,t as C,i as l,j as k,F as g,k as b,s as N,h as A,l as L,q as T,f as y,v as E,u as V}from"./entry.fd28c92e.js";import{_ as j}from"./Card.vue.5c1446d6.js";import{_ as G}from"./Notification.f02b805c.js";import"./useAsset.4b59c172.js";import"./skylt.43f17c4d.js";import"./speaker.7bfdc37d.js";const R={},B=s=>(h("data-v-34090473"),s=s(),f(),s),U=B(()=>e("h1",{class:"pt-3 text-center"},"New arrivals",-1)),H={class:"d-flex justify-content-center","aria-label":"breadcrumb"},O={class:"breadcrumb"},q={class:"breadcrumb-item"},z=B(()=>e("li",{class:"breadcrumb-item active","aria-current":"page"},"Products",-1));function Y(s,c){const t=M;return a(),r("div",null,[U,e("nav",H,[e("ol",O,[e("li",q,[p(t,{to:"/"},{default:$(()=>[w("Home")]),_:1})]),z])])])}const J=m(R,[["render",Y],["__scopeId","data-v-34090473"]]),K=s=>(h("data-v-fa30a20a"),s=s(),f(),s),Q={class:"d-flex"},W={class:"dropdown flex-fill px-4 px-sm-0"},X={class:"btn btn-light dropdown-toggle",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},Z={style:{color:"#f2be00"}},ee={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},te=K(()=>e("div",{class:"dropdown d-block d-lg-none d-xl-none px-4 px-sm-0"},[e("button",{class:"btn btn-light dropdown-toggle",role:"button",id:"MenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CATAGORIES")],-1)),se=x({__name:"DropDownFilters",emits:["sortItem"],setup(s,{emit:c}){const t=D("DEFAULT");function n(o){c("sortItem",o),t.value=o.toUpperCase()}return(o,_)=>(a(),r("div",Q,[e("div",W,[e("a",X,[w("SORT BY "),e("span",Z,C(l(t)),1)]),e("div",ee,[e("a",{class:"dropdown-item",onClick:_[0]||(_[0]=d=>n("newset")),value:"newset"},"Newest"),e("a",{class:"dropdown-item",onClick:_[1]||(_[1]=d=>n("price")),value:"price"},"Price"),e("a",{class:"dropdown-item",onClick:_[2]||(_[2]=d=>n("trending")),value:"trending"},"Trending")])]),te]))}});const oe=m(se,[["__scopeId","data-v-fa30a20a"]]),v=s=>(h("data-v-777edd39"),s=s(),f(),s),ne={class:"col-3 d-none d-lg-block d-xl-block"},ae={class:"card-selector"},re={class:"card-body p-5"},ce={class:"search-title"},_e=v(()=>e("h4",null,"Catagories +",-1)),de=["value"],le={class:"search-title"},ie=v(()=>e("h4",null,"Filter by +",-1)),pe={class:"colors"},ue=v(()=>e("h5",null,"Color",-1)),me=["value"],ve=v(()=>e("div",{class:"search-title"},[e("h5",null,"Price Range"),e("input",{type:"range",min:"0",max:"100",value:"50",class:"slider"})],-1)),he=x({__name:"FilterBar",setup(s){const c=k({types:[{name:"Table",value:"table"},{name:"Lamps",value:"lamp"},{name:"Chairs",value:"chair"},{name:"Sofas",value:"sofa"}],colors:[{name:"yellow",value:"#FFC015"},{name:"blue",value:"#829FAA"},{name:"white",value:"#BFB8AE"},{name:"silver",value:"#817A77"}]});return(t,n)=>(a(),r("div",ne,[e("div",ae,[e("div",re,[e("div",ce,[_e,(a(!0),r(g,null,b(l(c).types,o=>(a(),r("h6",{key:o.name,onClick:n[0]||(n[0]=()=>{}),value:o.value},C(o.name),9,de))),128))]),e("div",le,[ie,e("div",pe,[ue,(a(!0),r(g,null,b(l(c).colors,o=>(a(),r("span",{key:o.name,class:"circle",style:N(`background-color:${o.value}`),onClick:n[1]||(n[1]=()=>{}),value:o.name},null,12,me))),128))])]),ve])])]))}});const fe=m(he,[["__scopeId","data-v-777edd39"]]),xe={class:"d-flex justify-content-center mx-5 mx-sm-0 pt-1"},ge=x({__name:"MoreButton",emits:["incrementCards"],setup(s){return(c,t)=>(a(),r("div",xe,[e("button",{type:"button",onClick:t[0]||(t[0]=n=>c.$emit("incrementCards")),class:"flex-fill btn btn-outline-secondary"},"More +")]))}});const be=m(ge,[["__scopeId","data-v-7b46423c"]]),ye={class:"container mb-4"},$e={class:"mx-3"},we={key:0,class:"main-grid d-flex p-3"},Ce={class:"col-11 col-md-12 col-lg-8 mx-auto",style:{"margin-left":"25px !important"}},ke=e("h4",null,"Sorry, we can't find any product with this features",-1),Be={__name:"Grid",setup(s){const c=A(),t=k({cards:[],showCards:6});L(()=>n());const n=()=>t.cards=c.items,o=T(()=>t.cards.slice(0,t.showCards)),_=d=>(t.cards.sort((i,u)=>{if(d==="newset")return i.title.length*2-u.title.length*4;if(d==="price")return i.price-u.price;if(d==="trending")return i.type.length-u.type.length}),t.sortButton=d.toUpperCase());return(d,i)=>{const u=oe,I=fe,F=j,S=be,P=G;return a(),r("div",ye,[e("div",$e,[p(u,{onSortItem:_})]),l(t).cards.length!==0?(a(),r("div",we,[p(I),e("div",Ce,[p(F,{cards:l(o)},null,8,["cards"]),l(t).cards.length!==0?(a(),y(S,{key:0,onIncrementCards:i[0]||(i[0]=Ie=>l(t).showCards+=6)})):E("",!0)])])):(a(),y(P,{key:1,class:"my-5 py-5"},{default:$(()=>[ke]),_:1}))])}}},Le={__name:"Products",setup(s){return V({link:[{rel:"canonical",href:"https://vue-ecom.vercel.app/products"}]}),(c,t)=>{const n=J,o=Be;return a(),r("div",null,[p(n),p(o)])}}};export{Le as default};
