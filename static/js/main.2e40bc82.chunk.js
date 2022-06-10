(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{25:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(18),r=c.n(i),s=(c(25),c(8)),o=c(3),l=c(0);var j=function(){return Object(l.jsx)("footer",{className:"page-footer light-blue lighten-3",children:Object(l.jsx)("div",{className:"footer-copyright",children:Object(l.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(l.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Link"})]})})})};var d=function(){return Object(l.jsx)("nav",{className:"light-blue lighten-3",children:Object(l.jsxs)("div",{className:"nav-wrapper",children:[Object(l.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(l.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"/contact",children:"Contacts"})})]})]})})},b=c(13),u=c(20),O=c(2);function h(e,t){var c=t.type,n=t.payload;switch(c){case"SET_GOODS":return Object(O.a)(Object(O.a)({},e),{},{goods:n||[],loading:!1});case"ADD_TO_BASKET":var a=e.order.findIndex((function(e){return e.mainId===n.mainId})),i=null;if(a<0){var r=Object(O.a)(Object(O.a)({},n),{},{quantity:1});i=[].concat(Object(u.a)(e.order),[r])}else i=e.order.map((function(e,t){return t===a?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(O.a)(Object(O.a)({},e),{},{order:i,alertName:n.displayName});case"REMOVE_FROM_BASKET":return Object(O.a)(Object(O.a)({},e),{},{order:e.order.filter((function(e){return e.mainId!==n.id}))});case"INCREMENT_QUANTITY":return Object(O.a)(Object(O.a)({},e),{},{order:e.order.map((function(e){if(e.mainId===n.id){var t=e.quantity+1;return Object(O.a)(Object(O.a)({},e),{},{quantity:t})}return e}))});case"DICREMENT_QUANTITY":return Object(O.a)(Object(O.a)({},e),{},{order:e.order.map((function(e){if(e.mainId===n.id){var t=e.quantity-1;return Object(O.a)(Object(O.a)({},e),{},{quantity:t>0?t:0})}return e}))});case"CLOSE_ALERT":return Object(O.a)(Object(O.a)({},e),{},{alertName:""});case"TOGGLE_BASKET":return Object(O.a)(Object(O.a)({},e),{},{isBasketShow:!e.isBasketShow});default:return e}}var m=Object(n.createContext)(),x={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},p=function(e){var t=e.children,c=Object(n.useReducer)(h,x),a=Object(b.a)(c,2),i=a[0],r=a[1];return i.closeAlert=function(){r({type:"CLOSE_ALERT"})},i.addToBasket=function(e){r({type:"ADD_TO_BASKET",payload:e})},i.removeFromBasket=function(e){r({type:"REMOVE_FROM_BASKET",payload:{id:e}})},i.incQuantity=function(e){r({type:"INCREMENT_QUANTITY",payload:{id:e}})},i.decQuantity=function(e){r({type:"DICREMENT_QUANTITY",payload:{id:e}})},i.handleBasketShow=function(){r({type:"TOGGLE_BASKET"})},i.setGoods=function(e){r({type:"SET_GOODS",payload:e})},Object(l.jsx)(m.Provider,{value:i,children:t})};function f(){var e=Object(n.useContext)(m),t=e.alertName,c=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[c]),Object(l.jsx)("div",{id:"toast-container",children:Object(l.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function N(e){var t=e.mainId,c=e.displayName,a=e.finalPrice,i=e.quantity,r=Object(n.useContext)(m),s=r.removeFromBasket,o=r.incQuantity,j=r.decQuantity;return Object(l.jsxs)("li",{className:"collection-item",children:[c," ",Object(l.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return j(t)},children:"remove"})," ","x",i," ",Object(l.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return o(t)},children:"add"})," ","= ",a*i," \u0440\u0443\u0431.",Object(l.jsx)("span",{className:"secondary-content",onClick:function(){return s(t)},children:Object(l.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})}function y(){var e=Object(n.useContext)(m),t=e.order,c=void 0===t?[]:t,a=e.handleBasketShow,i=void 0===a?Function.prototype:a,r=c.reduce((function(e,t){return e+t.finalPrice*t.quantity}),0);return Object(l.jsxs)("ul",{className:"collection basket-list",children:[Object(l.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(l.jsx)(N,Object(O.a)({},e),e.mainId)})):Object(l.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(l.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",r]}),Object(l.jsx)("li",{className:"collection-item ",children:Object(l.jsx)("button",{className:"btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(l.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})}function v(e){var t=Object(n.useContext)(m),c=t.order,a=void 0===c?0:c,i=t.handleBasketShow,r=void 0===i?Function.prototype:i,s=a.length;return Object(l.jsxs)("div",{className:"cart purple lighten-3 white-text",onClick:r,children:[Object(l.jsx)("i",{className:"material-icons",children:"shopping_cart"}),s?Object(l.jsx)("span",{className:"cart-quantity",children:s}):null]})}function g(e){var t=e.mainId,c=e.displayName,a=e.displayDescription,i=e.price,r=e.displayAssets,o=e.displayType,j=Object(n.useContext)(m).addToBasket,d=i.finalPrice;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{src:r[0].full_background,alt:c})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("span",{className:"card-title",children:c}),Object(l.jsx)("p",{children:a}),Object(l.jsx)("span",{className:"right",children:o})]}),Object(l.jsxs)("div",{className:"card-action",children:[Object(l.jsx)(s.b,{to:"/goods/".concat(t),className:"btn",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(l.jsx)("button",{className:"btn right",onClick:function(){return j({mainId:t,displayName:c,finalPrice:d})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(l.jsxs)("span",{className:"right",style:{fontSize:"1.2rem"},children:[d," \u0440\u0443\u0431."]})]})]})}function T(){var e=Object(n.useContext)(m).goods,t=void 0===e?[]:e;return t.length?Object(l.jsx)("div",{className:"goods",children:t.map((function(e){return Object(l.jsx)(g,Object(O.a)({},e),e.mainId)}))}):Object(l.jsx)("h3",{children:"Nothing here..."})}var k=function(){return Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"indeterminate"})})};function E(){var e=Object(n.useContext)(m),t=e.loading,c=e.order,a=e.isBasketShow,i=e.alertName,r=e.setGoods,s=Object(n.useState)(),o=Object(b.a)(s,2);o[0],o[1];return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"7c8945f2-d0afe87a-a62ef33c-b2ac59c2"}}).then((function(e){return e.json()})).then((function(e){r(e.shop)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v,{quantity:c.length}),t?Object(l.jsx)(k,{}):Object(l.jsx)(T,{}),a&&Object(l.jsx)(y,{}),i&&Object(l.jsx)(f,{})]})}function C(){return Object(l.jsx)("h1",{children:"Hello, from About page"})}function S(){return Object(l.jsx)("h1",{children:"Hello, from Contact page"})}function A(e){e.mainId;var t=e.displayName,c=e.displayDescription,n=(e.price,e.displayAssets,e.displayType),a=Object(o.f)().goBack;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("h6",{children:["Category: ",n]}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("button",{className:"btn",onClick:a,children:"Go Back"})]})}function I(){return Object(l.jsx)("h1",{children:"Page not found"})}var B=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("main",{className:"container content",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(p,{children:Object(l.jsx)(E,{})})}),Object(l.jsx)(o.a,{path:"/contact",component:S}),Object(l.jsx)(o.a,{path:"/about",component:C}),Object(l.jsx)(o.a,{path:"/goods/:id",component:A}),Object(l.jsx)(o.a,{component:I})]})}),Object(l.jsx)(j,{})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2e40bc82.chunk.js.map