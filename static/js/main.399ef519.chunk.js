(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},45:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(13),s=n.n(o),u=n(5),i=(n(45),n(23)),b=n(6),l=n.n(b),j=n(17),f=n(11),d=n.n(f),m=n(2),p=Object(m.b)("contacts/fetchContactsRequest"),O=Object(m.b)("contacts/fetchContactsSuccess"),h=Object(m.b)("contacts/fetchContactsError"),x=Object(m.b)("contacts/addContactRequest"),C=Object(m.b)("contacts/addContactSuccess"),v=Object(m.b)("contacts/addContactError"),_=Object(m.b)("contacts/deleteContactRequest"),L=Object(m.b)("contacts/deleteContactSuccess"),w=Object(m.b)("contacts/deleteContactError"),y=Object(m.b)("contacts/changeFilter");d.a.defaults.baseURL="http://localhost:4040";var N={fetchContacts:function(){return function(){var t=Object(j.a)(l.a.mark((function t(e){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p()),t.prev=1,t.next=4,d.a.get("/contacts");case 4:n=t.sent,c=n.data,e(O(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(h(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(j.a)(l.a.mark((function n(c){var a,r,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(x()),n.prev=2,n.next=5,d.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(C(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(v(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(_()),e.prev=1,e.next=4,d.a.delete("/contacts/".concat(t));case 4:n(L(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(w(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},g=n(14),k=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},I=Object(g.a)([k,F],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),S=n(7),D=n.n(S);var E=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),b=s[0],l=s[1],j=Object(u.b)(),f=Object(u.c)(k);return Object(c.jsxs)("form",{onSubmit:function(t){(t.preventDefault(),n&&b)&&(f.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?alert("".concat(n," is already in contacts.")):(j(N.addContact(n,b)),r(""),l("")))},className:D.a.form,children:[Object(c.jsxs)("label",{className:D.a.formLabel,children:["Name",Object(c.jsx)("input",{type:"text",value:n,name:"name",className:D.a.formInput,placeholder:" ",onChange:function(t){r(t.target.value)}})]}),Object(c.jsxs)("label",{className:D.a.formLabel,children:["Number",Object(c.jsx)("input",{type:"tel",value:b,name:"number",className:D.a.formInput,placeholder:" ",onChange:function(t){l(t.target.value)}})]}),Object(c.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})]})},R=n(9),q=n.n(R);var A=function(){var t=Object(u.c)(I),e=Object(u.b)();return Object(a.useEffect)((function(){return e(N.fetchContacts())}),[e]),Object(c.jsx)("ul",{className:q.a.list,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(c.jsxs)("li",{className:q.a.listItem,children:[Object(c.jsxs)("span",{className:q.a.name,children:[a,":"]}),Object(c.jsx)("span",{className:q.a.number,children:r}),Object(c.jsx)("button",{className:q.a.button,onClick:function(){return function(t){return e(N.deleteContact(t))}(n)},children:"Delete"})]},n)}))})},T=n(22),G=n.n(T),J=function(){var t=Object(u.c)(F),e=Object(u.b)();return Object(c.jsxs)("label",{className:G.a.label,children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:t,onChange:function(t){return e(y(t.target.value))},className:G.a.input})]})};function M(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(E,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(J,{}),Object(c.jsx)(A,{})]})}var V,Z=n(16),z=n(8),B=n(34),K=n.n(B),P=n(12),U=n(3),W=Object(m.c)([],(V={},Object(P.a)(V,O,(function(t,e){return e.payload})),Object(P.a)(V,C,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(P.a)(V,L,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),V)),H=Object(m.c)("",Object(P.a)({},y,(function(t,e){return e.payload}))),Q=Object(U.c)({items:W,filter:H}),X=[].concat(Object(Z.a)(Object(m.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),[K.a]),Y=Object(m.a)({reducer:{contacts:Q},middleware:X,devTools:!1});s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u.a,{store:Y,children:Object(c.jsx)(M,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",formLabel:"ContactForm_formLabel__1hDC-",formInput:"ContactForm_formInput__1r2bF",button:"ContactForm_button__1MLZK"}},9:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",name:"ContactList_name__2WLgA",number:"ContactList_number__14V4G",listItem:"ContactList_listItem__29Cbr",button:"ContactList_button__1RuFy"}}},[[65,1,2]]]);
//# sourceMappingURL=main.399ef519.chunk.js.map