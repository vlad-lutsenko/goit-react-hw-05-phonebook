(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={inputField:"InputForm_inputField__2PQ4y",btn:"InputForm_btn__mIVe0"}},16:function(e,t,n){e.exports={headerBlock:"Header_headerBlock__3Xc6q",header:"Header_header__R7Xw6"}},23:function(e,t,n){e.exports={enter:"pop_enter__Dvtla",enterActive:"pop_enterActive__1zr69",exitActive:"pop_exitActive__3LZ1c"}},24:function(e,t,n){e.exports={input:"ContactsFilter_input__21tlx"}},26:function(e,t,n){e.exports=n(37)},3:function(e,t,n){e.exports={enter:"slide_enter__3BiMQ",enterActive:"slide_enterActive__25RuS",exitActive:"slide_exitActive__HgFSs"}},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=n(1),s=function(e){var t=e.children,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)([]),u=Object(i.a)(s,2),l=u[0],m=u[1],f=Object(a.useState)(""),p=Object(i.a)(f,2);return t({contactList:c,setContactList:o,filteredList:l,setFilteredList:m,query:p[0],setQuery:p[1]})},u=function(e){return(0,e.children)({saveToStorage:function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}},getFromStorage:function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}}})},l=n(38),m=n(16),f=n.n(m),p=n(3),d=n.n(p),_=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){c(!0)}),[]),r.a.createElement("header",{className:f.a.headerBlock},r.a.createElement(l.a,{in:n,classNames:d.a,timeout:500,mountOnEnter:!0},r.a.createElement("h1",{className:f.a.header},"Phonebook")))},b=n(13),E=n(22),g=n(14),L=n.n(g),v=n(17),h=(n(35),function(e){var t=e.contactList,n=e.setContactList,c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],l=Object(a.useState)(""),m=Object(i.a)(l,2),f=m[0],p=m[1],d=function(e){"name"===e.target.name&&u(e.target.value),"number"===e.target.name&&p(e.target.value)};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=t.map((function(e){return e.name.toLowerCase()})),a=s.toLowerCase();e.includes(a)?(v.a.configure(),v.a.error("".concat(s," is already in your contact list"))):n([{id:Object(E.v4)(),name:s,number:f}].concat(Object(b.a)(t)))}(),u(""),p("")}},r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",name:"name",value:s,onChange:d,className:L.a.inputField})),r.a.createElement("label",null,"Number:",r.a.createElement("input",{type:"text",name:"number",value:f,onChange:d,className:L.a.inputField})),r.a.createElement("button",{type:"submit",disabled:!s.length||!f.length,className:L.a.btn},"Add contact"))}),O=n(39),S=n(9),y=n.n(S),F=n(23),C=n.n(F),j=function(e){var t=e.contactList,n=e.setContactList,c=e.saveToStorage,o=e.getFromStorage,i=e.filteredList,s=e.query;Object(a.useEffect)((function(){n(o("contacts")),console.log("component did mount")}),[n,o]),Object(a.useEffect)((function(){c("contacts",t),console.log("contacts updated")}),[t,c]);var u=s.length?i:t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{in:!t.length,timeout:250,classNames:d.a,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("p",null,"Phonebook is empty")),r.a.createElement(O.a,{component:"ul",className:y.a.contactList},u.map((function(e){return r.a.createElement(l.a,{key:e.id,classNames:C.a,timeout:250},r.a.createElement("li",{className:y.a.contactListItem},r.a.createElement("span",{className:y.a.name},e.name),r.a.createElement("span",{className:y.a.number},e.number),r.a.createElement("button",{type:"button",onClick:function(){return function(e){var a=t.filter((function(t){return t.id!==e}));n(Object(b.a)(a))}(e.id)}},"\xd7")))}))))},N=n(24),x=n.n(N),w=function(e){var t=e.contactList,n=e.setFilteredList,a=e.setQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{in:t.length>1,classNames:d.a,timeout:250,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("input",{type:"text",onChange:function(e){var r=e.target.value,c=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.number.includes(r)}));a(r),n(c)},className:x.a.input,placeholder:"Enter needed name or number"})))};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(u,null,(function(e){var t=e.saveToStorage,n=e.getFromStorage;return r.a.createElement(s,null,(function(e){var a=e.contactList,c=e.setContactList,o=e.filteredList,i=e.setFilteredList,s=e.query,u=e.setQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{contactList:a,setContactList:c,saveToStorage:t}),r.a.createElement(w,{contactList:a,setFilteredList:i,setQuery:u}),r.a.createElement(j,{contactList:a,setContactList:c,saveToStorage:t,getFromStorage:n,filteredList:o,query:s}))}))})))};n(36);o.a.render(r.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,n){e.exports={contactList:"ContactList_contactList__2T83w",contactListItem:"ContactList_contactListItem__1A8WS",name:"ContactList_name__21Jni",number:"ContactList_number__2X_iO"}}},[[26,1,2]]]);
//# sourceMappingURL=main.0c750f0d.chunk.js.map