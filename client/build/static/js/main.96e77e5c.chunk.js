(this.webpackJsonpfitbot=this.webpackJsonpfitbot||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),o=(a(34),a(4)),i=a.n(o),l=a(7),u=a(2),j=(a(36),a(3)),d=a(6),h=a(8),b=a.n(h),O=a(0),p=function(){var e=Object(n.useContext)(w),t=e.userData,a=e.SetUserData,r=Object(j.e)(),s=c.a.useState(""),o=Object(u.a)(s,2),h=o[0],p=o[1],m=c.a.useState(""),x=Object(u.a)(m,2),v=x[0],f=x[1],g=c.a.useState(""),S=Object(u.a)(g,2),N=S[0],y=S[1],k=c.a.useState(),E=Object(u.a)(k,2),I=E[0],C=E[1],D=c.a.useState(),T=Object(u.a)(D,2),A=T[0],J=T[1];c.a.useEffect((function(){t.user&&r.push("/home")}),[]);var _=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:h,password:v,category:N},e.next=4,b.a.post("http://localhost:5000/login",n);case 4:c=e.sent,s=c.data,(o=s.token)?(a({token:o,user:s.user}),J(s.message),localStorage.setItem("Token",JSON.stringify(o)),localStorage.setItem("user",JSON.stringify(s.user)),r.push("/home")):(C(s.err),r.push("/login"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"login_form",children:[Object(O.jsx)("h2",{children:"USER LOGIN"}),Object(O.jsxs)("form",{onSubmit:function(e){return _(e)},className:"my_form",children:[I?Object(O.jsx)("div",{className:"error",children:Object(O.jsx)("p",{children:I})}):A?Object(O.jsx)("div",{className:"succ",children:Object(O.jsx)("p",{children:I})}):null,Object(O.jsx)("div",{className:"emial",children:Object(O.jsx)("input",{type:"email",placeholder:"Enter your Email",value:h,onChange:function(e){return p(e.target.value)}})}),Object(O.jsx)("div",{className:"password",children:Object(O.jsx)("input",{type:"password",placeholder:"Enter your Password",value:v,onChange:function(e){return f(e.target.value)}})}),Object(O.jsx)("div",{className:"category",children:Object(O.jsxs)("select",{onClick:function(e){return y(e.target.value)},children:[Object(O.jsx)("option",{disabled:!0,selected:"selected",hidden:!0,value:"none",children:"Select an Option"}),Object(O.jsx)("option",{children:"Saving Account"}),Object(O.jsx)("option",{children:"Current Account"})]})}),Object(O.jsx)("div",{className:"botton",children:Object(O.jsx)("input",{type:"submit",value:"Submit"})}),Object(O.jsx)(d.b,{to:"/resetpass",className:"forgetpass",children:"Forget Password..."})]})]})},m=function(){var e=Object(j.e)(),t=Object(n.useContext)(w),a=t.userData,r=(t.SetUserData,c.a.useState("")),s=Object(u.a)(r,2),o=s[0],d=s[1],h=c.a.useState(""),p=Object(u.a)(h,2),m=p[0],x=p[1],v=c.a.useState(""),f=Object(u.a)(v,2),g=f[0],S=f[1],N=c.a.useState(""),y=Object(u.a)(N,2),k=y[0],E=y[1],I=c.a.useState(""),C=Object(u.a)(I,2),D=C[0],T=C[1],A=c.a.useState(),J=Object(u.a)(A,2),_=J[0],P=J[1],F=c.a.useState(),R=Object(u.a)(F,2),U=R[0],B=R[1];c.a.useEffect((function(){a.user?e.push("/home"):e.push("/register")}),[]);var L=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,c,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={email:g,username:o,password:k,openingamount:m,category:D},t.next=4,b.a.post("http://localhost:5000/register",c);case 4:r=t.sent,s=r.data,(n=s.token)?(P(s.message),localStorage.setItem("Token",JSON.stringify(n)),localStorage.setItem("user",JSON.stringify(s.useraccount)),e.push("/home")):(B(s.err),e.push("/register"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"login_form",children:[Object(O.jsx)("h2",{children:"USER REGISTERATION"}),Object(O.jsxs)("form",{onSubmit:function(e){return L(e)},className:"my_form",children:[U?Object(O.jsx)("div",{className:"error",children:Object(O.jsx)("p",{children:U})}):_?Object(O.jsx)("div",{className:"succ",children:Object(O.jsx)("p",{children:U})}):null,Object(O.jsx)("div",{className:"name",children:Object(O.jsx)("input",{type:"text",placeholder:"Enter your Name",value:o,onChange:function(e){return d(e.target.value)}})}),Object(O.jsx)("div",{className:"emial",children:Object(O.jsx)("input",{type:"email",placeholder:"Enter your Email",value:g,onChange:function(e){return S(e.target.value)}})}),Object(O.jsx)("div",{className:"password",children:Object(O.jsx)("input",{type:"password",placeholder:"Enter your Password",value:k,onChange:function(e){return E(e.target.value)}})}),Object(O.jsx)("div",{className:"balance",children:Object(O.jsx)("input",{type:"text",placeholder:"Enter Opening amount",value:m,onChange:function(e){return x(e.target.value)}})}),Object(O.jsx)("div",{className:"category",children:Object(O.jsxs)("select",{onClick:function(e){return T(e.target.value)},children:[Object(O.jsx)("option",{disabled:!0,selected:"selected",hidden:!0,value:"none",children:"Select an Option"}),Object(O.jsx)("option",{children:"Saving Account"}),Object(O.jsx)("option",{children:"Current Account"})]})}),Object(O.jsx)("div",{className:"botton",children:Object(O.jsx)("input",{type:"submit",value:"Submit"})})]})]})},x=function(){var e,t=Object(j.e)(),a=Object(n.useContext)(w),r=a.SetUserData,s=a.userData;return c.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("Token"));e?function(){var t=Object(l.a)(i.a.mark((function t(){var a,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={authorization:"Bearer "+e},t.next=3,b.a.get("http://localhost:5000/alldata",{headers:a});case 3:n=t.sent,c=n.data,r({token:e,user:JSON.parse(localStorage.getItem("user")),userTransactionData:c});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()():(localStorage.removeItem("Token"),localStorage.removeItem("user"),t.push("/login"))}),[]),Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)("h2",{children:"USER INFORMATION"}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{children:"Opening Amount"}),Object(O.jsx)("th",{children:"Deposite"}),Object(O.jsx)("th",{children:"Withdrawal"}),Object(O.jsx)("th",{children:"Intrest"}),Object(O.jsx)("th",{children:"Outstanding Bal."})]})}),Object(O.jsx)("tbody",{children:null===s||void 0===s||null===(e=s.userTransactionData)||void 0===e?void 0:e.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.createdAt.split("T")[0]}),Object(O.jsx)("td",{children:e.openingamount}),Object(O.jsx)("td",{children:e.depositedamount}),Object(O.jsx)("td",{children:e.withdrawalamount}),Object(O.jsx)("td",{children:e.interest}),Object(O.jsx)("td",{children:e.outstanding})]},e._id)}))})]})]})},v=function(){var e=Object(j.e)(),t=Object(n.useContext)(w),a=t.userData,r=t.SetUserData;c.a.useEffect((function(){}),[localStorage.getItem("Token")]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("h2",{children:Object(O.jsx)(d.b,{to:"/",className:"heading",children:"BANKING SYS"})})}),Object(O.jsx)("div",{className:"menu_sec",children:a.user?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/withdraw",className:"btn",children:"Withdraw"})}),Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/deposite",className:"btn",children:"Deposite"})}),Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/login",className:"btn logout",onClick:function(t){return localStorage.removeItem("Token"),localStorage.removeItem("user"),r({token:null,user:null}),void e.push("/login")},children:"Logout"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/register",className:"btn login",children:"Create Acc."})}),Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/login",className:"btn login",children:"Login"})})]})})]})})},f=function(){var e=Object(j.e)(),t=c.a.useState(""),a=Object(u.a)(t,2),n=a[0],r=a[1],s=c.a.useState(""),o=Object(u.a)(s,2),d=o[0],h=o[1],p=c.a.useState(""),m=Object(u.a)(p,2),x=m[0],v=m[1],f=c.a.useState(""),g=Object(u.a)(f,2),S=g[0],N=g[1],w=c.a.useState(""),y=Object(u.a)(w,2),k=y[0],E=y[1],I=c.a.useState(""),C=Object(u.a)(I,2),D=C[0],T=C[1];c.a.useEffect((function(){}),[]);var A=function(){var t=Object(l.a)(i.a.mark((function t(a){var c,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={email:n,newpassword:d,confirmpassword:x,category:S},t.next=4,b.a.put("http://localhost:5000/forgetpassword",c);case 4:r=t.sent,(s=r.data).message&&(T(s.message),localStorage.removeItem("Token"),localStorage.removeItem("user"),setTimeout((function(){e.push("/login")}),2e3)),s.err&&E(s.err);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"login_form",children:[Object(O.jsx)("h2",{children:"RESET PASSWORD"}),Object(O.jsxs)("form",{onSubmit:function(e){return A(e)},className:"my_form",children:[k?Object(O.jsx)("div",{className:"error",children:Object(O.jsx)("p",{children:k})}):D?Object(O.jsx)("div",{className:"succ",children:Object(O.jsx)("p",{children:D})}):null,Object(O.jsx)("div",{className:"emial",children:Object(O.jsx)("input",{type:"email",placeholder:"Enter your Email",value:n,onChange:function(e){return r(e.target.value)}})}),Object(O.jsx)("div",{className:"password",children:Object(O.jsx)("input",{type:"password",placeholder:"Enter New Password",value:d,onChange:function(e){return h(e.target.value)}})}),Object(O.jsx)("div",{className:"password",children:Object(O.jsx)("input",{type:"password",placeholder:"Confirm  Password",value:x,onChange:function(e){return v(e.target.value)}})}),Object(O.jsx)("div",{className:"category",children:Object(O.jsxs)("select",{onClick:function(e){return N(e.target.value)},children:[Object(O.jsx)("option",{disabled:!0,selected:"selected",hidden:!0,children:"Select an Option"}),Object(O.jsx)("option",{children:"Saving Account"}),Object(O.jsx)("option",{children:"Current Account"})]})}),Object(O.jsx)("div",{className:"botton",children:Object(O.jsx)("input",{type:"submit",value:"Submit"})})]})]})},g=function(){var e=Object(j.e)(),t=c.a.useState(""),a=Object(u.a)(t,2),n=a[0],r=a[1],s=c.a.useState(""),o=Object(u.a)(s,2),d=o[0],h=o[1],p=c.a.useState(""),m=Object(u.a)(p,2),x=m[0],v=m[1],f=c.a.useState(""),g=Object(u.a)(f,2),S=g[0],N=g[1];c.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("Token"));e&&h(e)}),[]);var w=function(){var t=Object(l.a)(i.a.mark((function t(a){var c,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c={authorization:"Bearer "+d},!d){t.next=9;break}return t.next=5,b.a.post("http://localhost:5000/deposite",{deposite:n},{headers:c});case 5:r=t.sent,(s=r.data).message&&(N(s.message),setTimeout((function(){e.push("/home")}),1e3)),s.err&&v(s.err);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"login_form",children:[Object(O.jsx)("h2",{children:"DEPOSITE"}),Object(O.jsxs)("form",{onSubmit:function(e){return w(e)},className:"my_form",children:[x?Object(O.jsx)("div",{className:"error",children:Object(O.jsx)("p",{children:x})}):S?Object(O.jsx)("div",{className:"succ",children:Object(O.jsx)("p",{children:S})}):null,Object(O.jsx)("div",{className:"amount",children:Object(O.jsx)("input",{type:"text",placeholder:"Enter Deposite Amount",value:n,onChange:function(e){return r(e.target.value)}})}),Object(O.jsx)("div",{className:"botton",children:Object(O.jsx)("input",{type:"submit",value:"Submit"})})]})]})},S=function(){var e=Object(j.e)(),t=c.a.useState(""),a=Object(u.a)(t,2),n=a[0],r=a[1],s=c.a.useState(""),o=Object(u.a)(s,2),d=o[0],h=o[1],p=c.a.useState(""),m=Object(u.a)(p,2),x=m[0],v=m[1],f=c.a.useState(""),g=Object(u.a)(f,2),S=g[0],N=g[1];c.a.useEffect((function(){var e=JSON.parse(localStorage.getItem("Token"));e&&h(e)}),[]);var w=function(){var t=Object(l.a)(i.a.mark((function t(a){var c,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c={authorization:"Bearer "+d},!d){t.next=9;break}return t.next=5,b.a.post("http://localhost:5000/withdraw",{withdraw:n},{headers:c});case 5:r=t.sent,(s=r.data).message&&(N(s.message),setTimeout((function(){e.push("/home")}),1e3)),s.err&&v(s.err);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"login_form",children:[Object(O.jsx)("h2",{children:"WITHDRAW"}),Object(O.jsxs)("form",{onSubmit:function(e){return w(e)},className:"my_form",children:[x?Object(O.jsx)("div",{className:"error",children:Object(O.jsx)("p",{children:x})}):S?Object(O.jsx)("div",{className:"succ",children:Object(O.jsx)("p",{children:S})}):null,Object(O.jsx)("div",{className:"amount",children:Object(O.jsx)("input",{type:"text",placeholder:"Enter Deposite Amount",value:n,onChange:function(e){return r(e.target.value)}})}),Object(O.jsx)("div",{className:"botton",children:Object(O.jsx)("input",{type:"submit",value:"Submit"})})]})]})},N=function(){var e=Object(j.e)(),t=Object(n.useContext)(w),a=(t.userData,t.SetUserData);return c.a.useEffect((function(){var t=JSON.parse(localStorage.getItem("Token"));t?(a({token:t,user:JSON.parse(localStorage.getItem("user"))}),e.push("/home")):(a({token:null,user:null}),e.push("/"))}),[]),Object(O.jsxs)("div",{className:"hero_section",children:[Object(O.jsx)("h1",{children:"Welcome"}),Object(O.jsx)("p",{children:"Please Login.."})]})},w=c.a.createContext(null);function y(){var e=Object(j.e)(),t=c.a.useState({token:void 0,user:void 0,userTransactionData:void 0}),a=Object(u.a)(t,2),n=a[0],r=a[1];return c.a.useEffect((function(){(function(){var t=Object(l.a)(i.a.mark((function t(){var a,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(a=JSON.parse(localStorage.getItem("Token")))){t.next=5;break}localStorage.removeItem("Token"),t.next=11;break;case 5:return t.next=7,b.a.post("http://localhost:5000/",null,{headers:{authorization:a}});case 7:n=t.sent,(c=n.data).token&&(r({token:c.token,user:c.user}),e.push("/home")),c.token||e.push("/");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(O.jsxs)(w.Provider,{value:{userData:n,SetUserData:r},children:[Object(O.jsx)(v,{}),Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{path:"/login",component:p,exact:!0}),Object(O.jsx)(j.a,{path:"/",component:N,exact:!0}),Object(O.jsx)(j.a,{path:"/home",component:x,exact:!0}),Object(O.jsx)(j.a,{path:"/register",component:m,exact:!0}),Object(O.jsx)(j.a,{path:"/resetpass",component:f,exact:!0}),Object(O.jsx)(j.a,{path:"/deposite",component:g,exact:!0}),Object(O.jsx)(j.a,{path:"/withdraw",component:S,exact:!0})]})})]})}var k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(d.a,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),k()}},[[61,1,2]]]);
//# sourceMappingURL=main.96e77e5c.chunk.js.map