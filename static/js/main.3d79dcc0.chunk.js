(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),o=c(2),i=c(1),l=(c(10),c(11),c(12),c(5)),d=c.n(l),r=c(0),a=function(e){var t=e.todos,c=e.selectUser,s=e.query,n=e.done,o=t.filter((function(e){var t=s.toLowerCase(),c=e.title.toLowerCase().includes(t);switch(n){case"active":return c&&!e.completed;case"completed":return c&&e.completed;default:return c}}));return Object(r.jsxs)("div",{className:"TodoList",children:[Object(r.jsx)("h2",{children:"Todos:"}),Object(r.jsx)("div",{className:"TodoList__list-container",children:Object(r.jsx)("ul",{className:"TodoList__list",children:o.map((function(e){return Object(r.jsxs)("li",{className:d()("TodoList__item",{"TodoList__item--unchecked":!1===e.completed,"TodoList__item--checked":!0===e.completed}),children:[" ",Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(r.jsx)("p",{children:e.title})]}),Object(r.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){c(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},u=(c(14),"https://mate.academy/students-api"),j=function(e){var t=e.userId,c=e.selectUser,s=Object(i.useState)(),n=Object(o.a)(s,2),l=n[0],d=n[1];return Object(i.useEffect)((function(){(function(e){return fetch("".concat(u,"/users/").concat(e)).then((function(e){return e.json()}))})(t).then((function(e){d(e)}))}),[t]),Object(r.jsxs)("div",{className:"CurrentUser",children:[Object(r.jsx)("h2",{className:"CurrentUser__title",children:Object(r.jsx)("span",{children:null===l||void 0===l?void 0:l.id})}),Object(r.jsx)("h3",{className:"CurrentUser__name",children:null===l||void 0===l?void 0:l.name}),Object(r.jsx)("p",{className:"CurrentUser__email",children:null===l||void 0===l?void 0:l.email}),Object(r.jsx)("p",{className:"CurrentUser__phone",children:null===l||void 0===l?void 0:l.phone}),Object(r.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){c(0)},children:"Clear"})]})},b=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),l=Object(o.a)(n,2),d=l[0],b=l[1],h=Object(i.useState)(""),O=Object(o.a)(h,2),p=O[0],m=O[1],x=Object(i.useState)("0"),_=Object(o.a)(x,2),f=_[0],v=_[1],N=function(e){s(e)};return Object(i.useEffect)((function(){fetch("".concat(u,"/todos")).then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"App__box",children:[Object(r.jsx)("h1",{children:"Please fill out the fields to find needed todo:"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"todo",children:"Serch Todo:"}),Object(r.jsx)("input",{className:"input",placeholder:"Please enter Todo",type:"text",value:p,id:"todo",onChange:function(e){m(e.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"selectStatus",children:"Select status:"}),Object(r.jsxs)("select",{name:"done",value:f,id:"selectStatus",onChange:function(e){v(e.target.value)},children:[Object(r.jsx)("option",{value:"0",disabled:!0,children:"Please select status"}),Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(r.jsx)("div",{className:"App__sidebar",children:d&&Object(r.jsx)(a,{todos:d,selectUser:N,query:p,done:f})}),Object(r.jsx)("div",{className:"App__content",children:Object(r.jsx)("div",{className:"App__content-container",children:c?Object(r.jsx)(j,{userId:c,selectUser:N}):"No user selected"})})]})};n.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.3d79dcc0.chunk.js.map