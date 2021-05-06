(this["webpackJsonpvideo-feedback-portal"]=this["webpackJsonpvideo-feedback-portal"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),i=n.n(r),s=(n(66),n(67),n(110)),o=n(112),l=n(113),d=n(127),j=n(126),u=n(25),b=n(4),p=Object(j.a)((function(e){return{root:{flexGrow:1},spread:{justifyContent:"space-between"},title:{flexGrow:1},white:{color:"white",textDecoration:"none"}}})),f=function(){var e=p();return Object(b.jsx)(s.a,{position:"static",children:Object(b.jsxs)(o.a,{className:e.root,children:[Object(b.jsx)(l.a,{variant:"h6",className:e.title,children:Object(b.jsx)(u.b,{className:e.white,to:"/video-feedback-portal-react-app/",children:"Feedback"})}),Object(b.jsx)(d.a,{color:"inherit",variant:"outlined",children:Object(b.jsx)(u.b,{className:e.white,to:"/video-feedback-portal-react-app/admin",children:"Admin"})})]})})},m=n(15),h=n.n(m),O=n(21),x=n(12),v=n(55),g=n.n(v),w="https://video-feedback-portal-server.cleverapps.io/",y=n(19),k=n.n(y),C=(n(43),Object(j.a)((function(e){return{root:{flexGrow:1},video:{margin:"10px",width:"50%"},buttonContainer:{display:"grid",gap:"10px",gridTemplateColumns:"1fr 1fr",width:"50%",padding:"20px"},center:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}))),N=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(x.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)([]),o=Object(x.a)(s,2),l=o[0],j=o[1],u=Object(a.useState)(""),p=Object(x.a)(u,2),f=p[0],m=p[1],v=Object(a.useState)(!0),y=Object(x.a)(v,2),N=y[0],S=y[1],F=Object(a.useState)(""),D=Object(x.a)(F,2),I=D[0],L=D[1],R=C(),P=function(e){var t=e.data;t.size>0&&j((function(e){return e.concat(t)}))};Object(a.useEffect)((function(){Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://geolocation-db.com/json/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,L(n.IPv4);case 7:case"end":return e.stop()}}),e)})))()}),[I]);var E=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.start(),!l.length||!f){e.next=13;break}return t=new Blob(l,{type:"video/webm"}),(n=new FormData).append("video",t),n.append("ip",I),n.append("timestamp",(new Date).toLocaleString()),n.append("thumbnail",f),e.next=10,fetch("".concat(w,"/api/storeVideo"),{method:"post",body:n});case 10:j([]),m(""),S(!0);case 13:k.a.done();case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:R.center,children:[Object(b.jsx)(g.a,{className:R.video,audio:!0,ref:e,mirrored:!0}),Object(b.jsxs)("div",{className:R.buttonContainer,children:[r?Object(b.jsx)(d.a,{color:"secondary",variant:"contained",onClick:function(){t.current.stop(),i(!1),S(!1)},children:"Stop"}):Object(b.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){i(!0),S(!0),t.current=new MediaRecorder(e.current.stream,{mimeType:"video/webm"}),t.current.addEventListener("dataavailable",P),t.current.start(),m(e.current.getScreenshot())},children:"Capture"}),Object(b.jsx)(d.a,{color:"primary",variant:"contained",disabled:N,onClick:E,children:"Submit"})]})]})},S=n(121),F=n(122),D=n(125),I=n(123),L=n(114),R=n(57),P=n(115),E=n(116),T=n(117),B=n(118),M=n(119),U=n(120);k.a.configure({showSpinner:!1});var A=Object(j.a)((function(e){return{table:{width:"100%"},container:{width:"95%",display:"flex",justifyContent:"center",marginTop:e.spacing(3),marginRight:"auto",marginLeft:"auto"},emptyMsg:{margin:e.spacing(2)},pointer:{cursor:"pointer"}}})),G=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],r=A();Object(a.useEffect)((function(){return Object(O.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/api/getEntries"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.data,c(a);case 8:case"end":return e.stop()}}),e)})))()}),[c]);var i=n.map((function(e,t){var n=e.filename;return{id:t+1,thumbnail:e.image,timestamp:e.timestamp,ip:e.ip,filename:n}})),s=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,a,c,r,i,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.a.start(),e.next=3,fetch("".concat(w,"/video/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,c=a.video,e.next=10,fetch("data:video/webp;base64,".concat(c));case 10:return r=e.sent,e.next=13,r.blob();case 13:i=e.sent,s=document.createElement("a"),o=URL.createObjectURL(i),s.href=o,s.style.display="none",s.download="video.webm",document.body.appendChild(s),s.click(),URL.revokeObjectURL(o),document.body.removeChild(s),k.a.done();case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(a.Fragment,{children:Object(b.jsx)(L.a,{className:r.container,component:R.a,elevation:3,children:Object(b.jsxs)(P.a,{className:r.table,"aria-label":"simple table",loading:"true",children:[Object(b.jsx)(E.a,{children:Object(b.jsxs)(T.a,{children:[Object(b.jsx)(B.a,{children:"ID"}),Object(b.jsx)(B.a,{align:"center",children:"Video"}),Object(b.jsx)(B.a,{align:"center",children:"TimeStamp"}),Object(b.jsx)(B.a,{align:"center",children:"IP Address"}),Object(b.jsx)(B.a,{align:"center",children:"Download"})]})}),Object(b.jsx)(M.a,{children:0===i.length?Object(b.jsx)(T.a,{className:r.emptyMsg,children:Object(b.jsx)(B.a,{children:"No Records to show yet"})}):i.map((function(e,t){var n=e.filename,a=e.thumbnail,c=e.timestamp,i=e.ip;return Object(b.jsxs)(T.a,{children:[Object(b.jsx)(B.a,{component:"th",scope:"row",children:t+1}),Object(b.jsx)(B.a,{align:"center",children:Object(b.jsx)(u.b,{to:"/video/".concat(n),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:a,alt:"",style:{width:100,height:80}})})}),Object(b.jsx)(B.a,{align:"center",children:c}),Object(b.jsx)(B.a,{align:"center",children:i}),Object(b.jsx)(B.a,{align:"center",children:Object(b.jsx)(U.a,{className:r.pointer,onClick:function(){return s(n)}})})]},t+1)}))})]})})})},J=Object(j.a)((function(e){return{root:{flexGrow:1,width:"fit-content",margin:"20px auto"},verticalAlign:{display:"flex",flexDirection:"column",alignItems:"center"},inputfield:{margin:e.spacing(3),marginBottom:e.spacing(.5)},button:{margin:e.spacing(2)},errMsg:{color:"#ea4335",margin:e.spacing(2)},signoutButton:{margin:e.spacing(2)},buttonContainer:{display:"flex",justifyContent:"flex-end"}}})),q=function(){var e=J(),t=Object(a.useState)(!1),n=Object(x.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(x.a)(i,2),o=s[0],j=s[1],u=Object(a.useState)(""),p=Object(x.a)(u,2),f=p[0],m=p[1],v=Object(a.useState)(!1),g=Object(x.a)(v,2),y=g[0],C=g[1],N=function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.a.start(),t.preventDefault(),e.next=4,fetch("".concat(w,"/api/signin"),{headers:{"Content-Type":"application/json"},method:"post",body:JSON.stringify({username:o,password:f})});case 4:return n=e.sent,e.next=7,n.json();case 7:"OK"===e.sent.status?r(!0):C(!0),k.a.done();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(a.Fragment,{children:c?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("div",{className:e.buttonContainer,children:Object(b.jsx)(d.a,{onClick:function(){k.a.start(),r(!1),C(!1),k.a.done()},variant:"contained",color:"secondary",className:e.signoutButton,children:"Signout"})}),Object(b.jsx)(G,{})]}):Object(b.jsxs)(S.a,{className:e.root,elevation:2,children:[Object(b.jsxs)(F.a,{className:e.verticalAlign,children:[Object(b.jsx)(D.a,{variant:"filled",error:y,onChange:function(e){var t=e.target;j(t.value)},className:e.inputfield,id:"username",label:"Username",required:!0}),Object(b.jsx)(D.a,{variant:"filled",type:"password",error:y,onChange:function(e){var t=e.target;m(t.value)},className:e.inputfield,id:"password",label:"Password",required:!0}),y?Object(b.jsx)(l.a,{variant:"body1",className:e.errMsg,children:"Invalid Credentials"}):null]}),Object(b.jsx)(I.a,{children:Object(b.jsx)(d.a,{onClick:N,color:"primary",variant:"contained",className:e.button,size:"medium",children:"Submit"})})]})})},z=n(11),V=Object(j.a)((function(e){return{videoParent:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}})),K=function(){var e=V(),t=Object(z.f)().filename,n=Object(a.useState)(""),c=Object(x.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){Object(O.a)(h.a.mark((function e(){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/video/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c=a.video,i("data:video/webm;base64,".concat(c));case 8:case"end":return e.stop()}}),e)})))()})),console.log(t),Object(b.jsx)("div",{className:e.videoParent,children:Object(b.jsx)("video",{autoPlay:!0,controls:!0,src:r,loading:!0})})},_=function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(z.c,{children:[Object(b.jsx)(z.a,{exact:!0,path:"/video-feedback-portal-react-app/",children:Object(b.jsx)(N,{})}),Object(b.jsx)(z.a,{path:"/video-feedback-portal-react-app/admin",children:Object(b.jsx)(q,{})}),Object(b.jsx)(z.a,{path:"/video-feedback-portal-react-app/video/:filename",children:Object(b.jsx)(K,{})})]})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Q=n(56),W=n(128),X=n(124),Y=Object(Q.a)({palette:{primary:{main:"#1769aa"},secondary:{main:"#ab003c"}}});Y=Object(W.a)(Y),i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(X.a,{theme:Y,children:Object(b.jsx)(_,{})})}),document.getElementById("root")),H()}},[[79,1,2]]]);
//# sourceMappingURL=main.b8bb3a3e.chunk.js.map