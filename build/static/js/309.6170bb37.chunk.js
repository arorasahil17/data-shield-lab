"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[309],{4278:function(e,s,r){r.r(s),r.d(s,{default:function(){return p}});var a=r(9434),t=r(4165),n=r(5861),i=r(9439),l=r(2791),o=r(1009),c=r(7689),d=r(9085),u=(r(5462),r(184)),m=function(){var e=(0,l.useState)(!0),s=(0,i.Z)(e,2),r=s[0],m=s[1],h=(0,l.useState)(""),p=(0,i.Z)(h,2),x=p[0],f=p[1],v=(0,l.useState)(""),j=(0,i.Z)(v,2),g=j[0],N=j[1],w=(0,l.useState)(""),b=(0,i.Z)(w,2),y=b[0],C=b[1],P=(0,l.useState)(""),S=(0,i.Z)(P,2),Z=S[0],F=S[1],L=(0,l.useState)(""),k=(0,i.Z)(L,2),q=k[0],I=k[1],T=(0,l.useState)(""),O=(0,i.Z)(T,2),E=O[0],$=O[1],z=(0,l.useState)(""),A=(0,i.Z)(z,2),D=A[0],H=A[1],R=(0,l.useState)(""),B=(0,i.Z)(R,2),U=B[0],G=B[1],J=(0,l.useState)(""),K=(0,i.Z)(J,2),M=K[0],Q=K[1],V=(0,l.useState)({}),W=(0,i.Z)(V,2),X=W[0],Y=W[1],_=(0,l.useState)({}),ee=(0,i.Z)(_,2),se=ee[0],re=ee[1],ae=(0,a.I0)(),te=(0,c.s0)(),ne=(0,a.v9)((function(e){return e.user})),ie=null===ne||void 0===ne?void 0:ne.error;(0,l.useEffect)((function(){d.Am.error(ie)}),[ie]);var le=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){var r,a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),r={},console.log("Hello"),e.prev=3,a="+91".concat(E),(n={firstName:x,lastName:g,email:y,password:Z,confirmPassword:q,userType:D,contactNumber:a}).firstName||(r.firstName="First name is required.",console.log(r)),n.lastName||(r.lastName="Last name is required."),n.email?/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(n.email)||(r.email="Invalid email address."):r.email="Email address is required.",n.password?n.password.length<6&&(r.password="Password must be at least 6 characters long."):r.password="Password is required.",n.confirmPassword?n.password!==n.confirmPassword&&(r.confirmPassword="Passwords do not match."):r.confirmPassword="Confirm password is required.",n.contactNumber?/^\+91\d{10}$/.test(n.contactNumber)||(r.contactNumber="Invalid contact number."):r.contactNumber="Contact number is required.",n.userType?["student","professional","other"].includes(n.userType)||(r.userType="Invalid user type."):r.userType="User type is required.",Y(r),!(Object.keys(r).length>0)){e.next=16;break}return e.abrupt("return");case 16:ae((0,o.a$)(n,te)),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0.errors);case 22:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(s){return e.apply(this,arguments)}}();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Ix,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,theme:"light"}),(0,u.jsx)("div",{className:"container my-5 form-container",children:(0,u.jsx)("div",{className:"row justify-content-center",style:{gap:100},children:r?(0,u.jsxs)("div",{className:"col-md-4 form-col",children:[(0,u.jsx)("h4",{className:"fw-bold form-head",children:"Login"}),(0,u.jsx)("p",{className:"global-text",style:{fontSize:15},children:"If you have an account with us, please login"}),(0,u.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var s={emailLogin:U,passwordLogin:M},r={};s.emailLogin?/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(s.emailLogin)||(r.email="Invalid email address."):r.email="Email address is required.",s.passwordLogin?s.passwordLogin.length<6&&(r.password="Password must be at least 6 characters long."):r.password="Password is required.",re(r),Object.keys(r).length>0||ae((0,o.pH)(s,te))},children:[(0,u.jsx)("label",{htmlFor:"",children:"Email"}),(0,u.jsx)("input",{type:"text",value:U,className:"input",onChange:function(e){return G(e.target.value)}}),se.email?(0,u.jsx)("div",{className:"error-message",children:se.email}):null,(0,u.jsx)("label",{htmlFor:"",className:"mt-3",children:"Password"}),(0,u.jsx)("input",{type:"password",value:M,className:"input",onChange:function(e){return Q(e.target.value)}}),se.password&&(0,u.jsx)("div",{className:"error-message",children:se.password}),(0,u.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:"form-btn",children:"Login"})}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)("a",{href:".",className:"forgot-password",children:"Forgot Password?"})})]})]}),(0,u.jsx)("button",{className:"btn register mt-3",onClick:function(){return m(!1)},children:"Register New Account"})]}):(0,u.jsxs)("div",{className:"col-md-5 register-form",children:[(0,u.jsx)("h4",{className:"fw-bold form-head",children:"Register"}),(0,u.jsx)("p",{className:"global-text",style:{fontSize:15},children:"If you don't have an account, please register"}),(0,u.jsxs)("form",{action:"",onSubmit:function(e){return le(e)},children:[(0,u.jsxs)("div",{className:"d-flex gap-5 form-div",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",children:"First Name"}),(0,u.jsx)("input",{type:"text",value:x,onChange:function(e){return f(e.target.value)},className:"input"}),X.firstName?(0,u.jsx)("div",{className:"error-message",children:X.firstName}):null]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",className:"",children:"Last Name"}),(0,u.jsx)("input",{type:"text",value:g,onChange:function(e){return N(e.target.value)},className:"input"}),X.lastName&&(0,u.jsx)("div",{className:"error-message",children:X.lastName})]})]}),(0,u.jsxs)("div",{className:"d-flex gap-5 form-div",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",children:"Email"}),(0,u.jsx)("input",{type:"text",value:y,onChange:function(e){return C(e.target.value)},className:"input"}),X.email&&(0,u.jsx)("div",{className:"error-message",children:X.email})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",children:"Contact Number"}),(0,u.jsx)("input",{type:"number",value:E,onChange:function(e){return $(e.target.value)},className:"input"}),X.contactNumber&&(0,u.jsx)("div",{className:"error-message",children:X.contactNumber})]})]}),(0,u.jsxs)("div",{className:"d-flex gap-5 form-div",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",children:"Password"}),(0,u.jsx)("input",{type:"password",value:Z,onChange:function(e){return F(e.target.value)},className:"input"}),X.password&&(0,u.jsx)("div",{className:"error-message",children:X.password})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"",children:"Confirm-Password"}),(0,u.jsx)("input",{type:"password",value:q,onChange:function(e){return I(e.target.value)},className:"input"}),X.confirmPassword&&(0,u.jsx)("div",{className:"error-message",children:X.confirmPassword})]})]}),(0,u.jsx)("label",{className:"mt-3",children:"I am a?"}),(0,u.jsxs)("select",{value:D,onChange:function(e){return H(e.target.value)},className:"input",children:[(0,u.jsx)("option",{value:"",children:"select"}),(0,u.jsx)("option",{value:"student",children:"Student"}),(0,u.jsx)("option",{value:"professional",children:"Professional"}),(0,u.jsx)("option",{value:"other",children:"Other"})]}),X.userType&&(0,u.jsx)("div",{className:"error-message",children:X.userType}),(0,u.jsx)("div",{className:"d-flex justify-content-between ",children:(0,u.jsx)("div",{children:(0,u.jsx)("button",{type:"submit",className:"form-btn",children:"Sign up"})})})]}),(0,u.jsx)("button",{className:"register btn mt-3",onClick:function(){return m(!0)},children:"Login with an existing account"})]})})})]})},h=r(7557),p=function(){var e=(0,a.v9)((function(e){return e.user.isLoading}));return(0,u.jsx)(u.Fragment,{children:e?(0,u.jsx)(h.Z,{}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{})})})}}}]);
//# sourceMappingURL=309.6170bb37.chunk.js.map