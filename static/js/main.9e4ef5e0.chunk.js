(this["webpackJsonpomr-generator"]=this["webpackJsonpomr-generator"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(4),o=n.n(c),s=(n(9),n(2)),a=(n(10),n(0)),l=function(e){var t=e.i,n=e.question,r=e.setQuestions,i=e.answers,c=e.setAnswers,o=e.submitted;return console.log(i),Object(a.jsxs)("div",{style:{display:"flex",margin:10,boxShadow:"#".concat(i[t]?i[t]!==n?"cf1b1b33":"09c1494d":"0000001d"," 0px 0px 4px")},children:[Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f9f9f9",textAlign:"center",width:25,height:"100%",fontSize:10,color:"#999",fontWeight:"bold",borderRight:"1px solid #eee"},children:t+1}),Object(a.jsx)("div",{style:{padding:"0 5px"},children:["a","b","c","d"].map((function(e){return Object(a.jsx)("button",{onClick:function(){o?c((function(n){return n.map((function(n,r){return t===r?n===e?"":e:n}))})):r((function(n){return n.map((function(n,r){return t===r?n===e?"":e:n}))}))},style:{backgroundColor:e===i[t]?"#28be72":""},className:(e===n||e===i[t]?"active ":"")+"btn",children:e},e)}))})]})};var d=function(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(0),o=Object(s.a)(c,2),d=o[0],u=o[1],b=Object(r.useState)(0),j=Object(s.a)(b,2),f=j[0],p=j[1],h=Object(r.useState)([]),g=Object(s.a)(h,2),x=g[0],O=g[1],m=Object(r.useState)(!1),y=Object(s.a)(m,2),v=y[0],w=y[1],C=Object(r.useState)([]),k=Object(s.a)(C,2),S=k[0],A=k[1],I=Object(r.useState)(null),N=Object(s.a)(I,2),q=N[0],z=N[1];return Object(a.jsxs)("div",{className:"App",children:[0===x.length&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"number",placeholder:"Enter number of questions",style:{padding:10,margin:10,height:20,border:"none",outline:"none"},onChange:function(e){var t=e.target.value;t&&i(parseInt(t))}}),Object(a.jsx)("input",{type:"time",placeholder:"Time",style:{padding:10,margin:10,height:20,border:"none",outline:"none"},onChange:function(e){var t=e.target.value;if(t){var n=t.split(":").map((function(e){return parseInt(e)})),r=Object(s.a)(n,2),i=r[0],c=r[1];u(60*(60*i+c))}}}),Object(a.jsx)("button",{style:{padding:10,margin:10,height:44,display:"inline-block",width:100},className:"btn",onClick:function(){n&&d&&(O(new Array(n).fill("")),A(new Array(n).fill("")),setInterval((function(){return p((function(e){return e?e-1:d}))}),1e3))},children:"Start"})]}),v&&null==q&&Object(a.jsx)("div",{style:{padding:20,fontSize:20,fontFamily:"monospace"},children:"Mark correct answers"}),null!==q&&Object(a.jsx)("div",{style:{padding:40,fontFamily:"monospace",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[["Total",4*q.correct-q.wrong,4*n],["Correct",q.correct],["Incorrect",q.wrong],["Unattempted",n-q.correct-q.wrong]].map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{style:{padding:"0 5px 0 20px"},children:e[0]}),Object(a.jsx)("span",{style:{padding:2,fontSize:20},children:e[1]}),void 0!==e[2]&&Object(a.jsxs)("span",{style:{padding:"0 10px 0 5px"},children:["/",e[2]]})]})}))}),0!==x.length&&!v&&Object(a.jsxs)("div",{style:{position:"sticky",top:0,padding:"20px 0",width:"100%",backgroundColor:"#fafbfc"},children:[Object(a.jsx)("div",{style:{width:"60%",margin:"0 auto 20px",backgroundColor:"#fff"},children:Object(a.jsx)("div",{style:{backgroundColor:"#39b9df",height:5,width:"".concat(x.filter((function(e){return""!==e})).length/n*100,"%")}})}),Object(a.jsx)("div",{style:{width:"80%",margin:"auto",backgroundColor:"#fff"},children:Object(a.jsx)("div",{style:{backgroundColor:"#39df92",height:5,width:"".concat(f/d*100,"%")}})})]}),Object(a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:x.map((function(e,t){return Object(a.jsx)(l,{question:e,setQuestions:O,answers:S,setAnswers:A,submitted:v,i:t},t)}))}),0!==x.length&&Object(a.jsx)("button",{style:{padding:10,margin:10,height:44,display:"inline-block",width:100},className:"btn".concat(v&&S.some((function(e){return""===e}))?" disabled":""),onClick:function(){v?function(){if(!S.some((function(e){return""===e}))){var e={correct:0,wrong:0};x.forEach((function(t,n){t&&(S[n]===t?e.correct++:e.wrong++)})),z(e)}}():w(!0)},children:v?"Calculate":"Submit"})]})};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9e4ef5e0.chunk.js.map