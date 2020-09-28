(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{32:function(e,n,t){e.exports=t(59)},59:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),c=t(2),u=t(1);function s(){var e=Object(c.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    box-sizing: border-box;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  p {\n   margin: 0;\n  }\n"]);return s=function(){return e},e}var l=Object(u.createGlobalStyle)(s()),d=t(6),p=t(4),f=t.n(p),m=t(10),b=t(9),g=t(30),O=t(12),h=t(3),E=t(14),R=t.n(E),x={searchedName:"",githubAccounts:[],githubAccountsLoading:!1,userRepos:{},nameOfUserWithReposLoading:"",userReposLoading:!1,error:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_GITHUB_USERS":return Object(h.a)(Object(h.a)({},e),{},{githubAccounts:n.payload,githubAccountsLoading:!1,searchedName:n.userName});case"LOADING_GITHUB_USERS":return Object(h.a)(Object(h.a)({},e),{},{githubAccountsLoading:!0});case"LOAD_USER_REPOS":return Object(h.a)(Object(h.a)({},e),{},{userRepos:Object(h.a)(Object(h.a)({},e.userRepos),{},Object(O.a)({},n.userName,n.payload)),userReposLoading:!1,nameOfUserWithReposLoading:""});case"LOADING_USER_REPOS":return Object(h.a)(Object(h.a)({},e),{},{userReposLoading:!0,nameOfUserWithReposLoading:n.userName});case"CLEAR_USERS_REPOS":return Object(h.a)(Object(h.a)({},e),{},{userRepos:{}});case"SHOW_ERRORS":return Object(h.a)(Object(h.a)({},e),{},{error:!0,githubAccountsLoading:!1,userReposLoading:!1,nameOfUserWithReposLoading:""});case"CLEAR_ERRORS":return Object(h.a)(Object(h.a)({},e),{},{error:!1});default:return e}},S=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):b.c)(Object(b.a)(g.a)),j=Object(b.d)(_,S),v=j.dispatch,y=j.getState,L=j;function w(){var e=Object(c.a)(["\n  width: 100%;\n  font-size: 16px;\n\n  padding: 10px;\n  margin-top: 18px;\n\n  background-color: #009de0;\n  border: 1px solid #009de0;\n  border-radius: 2px;\n\n  color: white;\n  outline: none;\n"]);return w=function(){return e},e}function U(){var e=Object(c.a)(["\n  width: 100%;\n  font-size: 16px;\n  padding: 10px;\n  outline: none;\n  background-color: #f2f2f2;\n  border: 2px solid #e0e0e0;\n  border-radius: 2px;\n"]);return U=function(){return e},e}var N=Object(d.b)((function(e){return{searchedName:e.searchedName}}))((function(e){var n=e.searchedName,t=Object(r.useState)(""),o=Object(m.a)(t,2),i=o[0],c=o[1];return a.a.createElement(f.a,{as:"form",column:!0,width:"100%",onSubmit:function(e){var t;e.preventDefault(),n!==i&&(v((t=i.replace(/\s/g,""),function(e){e({type:"CLEAR_ERRORS"}),e({type:"LOADING_GITHUB_USERS"}),R.a.get("https://api.github.com/search/users?q=".concat(t,"&page=1&per_page=5")).then((function(n){e({type:"LOAD_GITHUB_USERS",payload:n.data.items.map((function(e){return{id:e.id,login:e.login,repos_url:e.repos_url}})),userName:t})})).catch((function(n){e({type:"SHOW_ERRORS"}),console.log("Error information ",n)}))})),v({type:"CLEAR_USERS_REPOS"}))}},a.a.createElement(A,{type:"text",value:i,placeholder:"Enter username",required:!0,onChange:function(e){c(e.target.value)}}),a.a.createElement(k,{type:"submit"},"Search"))})),A=u.default.input(U()),k=u.default.button(w());function C(){var e=Object(c.a)(["\n  font-size: 14px;\n"]);return C=function(){return e},e}function D(){var e=Object(c.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  flex: none;\n"]);return D=function(){return e},e}function I(){var e=Object(c.a)(["\n  font-weight: bold;\n  color: inherit;\n  text-decoration: none;\n\n  &:hover {\n    color: #009de0;\n  }\n"]);return I=function(){return e},e}function z(){var e=Object(c.a)(["\n  padding: 15px 5px;\n  background-color: #e0e0e0;\n  border-radius: 2px;\n\n  margin-left: 15px;\n"]);return z=function(){return e},e}var T=function(e){var n=e.title,t=e.description,r=e.stars,o=e.repoUrl;return a.a.createElement(B,{mTop:10,justifyBetween:!0},a.a.createElement(f.a,{column:!0,itemsStart:!0},a.a.createElement(G,{href:o,target:"_blank",rel:"noopener noreferrer"},n),a.a.createElement(P,null,t)),a.a.createElement(H,null,"".concat(r," \u2605")))};T.defaultProps={description:""};var W=T,B=Object(u.default)(f.a)(z()),G=u.default.a(I()),H=u.default.p(D()),P=u.default.p(C());function M(){var e=Object(c.a)(["\n  border: 6px solid #f3f3f3;\n  border-top-color: #009de0;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  animation: spin 2s linear infinite;\n\n  margin: 10px auto 0;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return M=function(){return e},e}var F=u.default.div(M()),X=t(31);function q(){var e=Object(c.a)(["\n  width: 100%;\n  border: 2px solid #009de0;\n  border-radius: 2px;\n\n  padding: 15px;\n  font-size: 14px;\n  color: white;\n  text-align: center;\n\n  ","\n"]);return q=function(){return e},e}var J=function(e){var n=e.message,t=e.type,r=Object(X.a)(e,["message","type"]);return a.a.createElement(V,Object.assign({justifyCenter:!0,mTop:10,type:t},r),a.a.createElement("p",null,n))},V=Object(u.default)(f.a)(q(),(function(e){var n=e.type;return"info"===n?"\n        border: 2px solid #009de0;\n        background: rgba(0, 157, 224, 0.6);\n      ":"error"===n?"\n        border: 2px solid #da0c0c;\n        background: rgba(218, 12, 12, 0.6);\n       ":void 0}));function Y(){var e=Object(c.a)(["\n  flex: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  pointer-events: none;\n\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    width: 12px;\n    height: 2px;\n    position: absolute;\n    top: 12px;\n    background: black;\n    border-radius: 2px;\n  }\n\n  &::before {\n    right: 8px;\n    transform: rotate(45deg);\n  }\n  &::after {\n    left: 12px;\n    transform: rotate(-45deg);\n  }\n\n  transform: ",";\n  transition: transform 400ms;\n"]);return Y=function(){return e},e}var K=u.default.span(Y(),(function(e){return e.isRotated?"rotate(180deg)":"none"})),Q=Object(u.default)(f.a).withConfig({displayName:"UserInformation___StyledDiv",componentId:"sc-1v6v454-0"})(["border-radius:2px;"]),Z=Object(d.b)((function(e){return{userRepos:e.userRepos,userReposLoading:e.userReposLoading,nameOfUserWithReposLoading:e.nameOfUserWithReposLoading}}))((function(e){var n,t,o,i=e.userName,c=e.reposUrl,u=e.userRepos,s=e.userReposLoading,l=e.nameOfUserWithReposLoading,d=Object(r.useState)(!1),p=Object(m.a)(d,2),b=p[0],g=p[1],O=Object(r.useState)(5),h=Object(m.a)(O,2),E=h[0],x=h[1],_=null===(n=u[i])||void 0===n?void 0:n.length;return _>0&&(o=a.a.createElement(a.a.Fragment,null,null===(t=u[i])||void 0===t?void 0:t.slice(0,E).map((function(e){return a.a.createElement(W,{title:e.name,description:e.description,stars:e.stargazers_count,key:e.id,repoUrl:e.html_url})})),a.a.createElement($,{onClick:function(){E<=_&&x(E+5)},disabled:Boolean(E>=_)},"Show more"))),0===_&&(o=a.a.createElement(J,{type:"info",message:"".concat(i," doesn't have any repositories")})),l===i&&(o=a.a.createElement(F,null)),a.a.createElement(f.a,{column:!0,mBottom:10,width:"100%"},a.a.createElement(Q,{padding:5,justifyBetween:!0,itemsCenter:!0,onClick:function(){g((function(e){return!e})),y().userRepos[i]||!s&&v(function(e,n){return function(t){t({type:"CLEAR_ERRORS"}),t({type:"LOADING_USER_REPOS",userName:e}),R.a.get("".concat(n)).then((function(n){t({type:"LOAD_USER_REPOS",payload:n.data.map((function(e){return{id:e.id,name:e.name,description:e.description,stargazers_count:e.stargazers_count,html_url:e.html_url}})),userName:e})})).catch((function(e){t({type:"SHOW_ERRORS"}),console.log("Error information ",e)}))}}(i,c))},background:"#f2f2f2"},a.a.createElement("p",null,i),a.a.createElement(K,{isRotated:b})),b&&a.a.createElement(f.a,{column:!0},o))})),$=u.default.span.withConfig({displayName:"UserInformation__ShowMore",componentId:"sc-1v6v454-1"})(["font-size:14px;margin-top:10px;color:",";text-align:center;"],(function(e){return e.disabled?"#747474":"#009de0"}));function ee(){var e=Object(c.a)(["\n  color: #747474;\n  margin: 18px 0;\n  align-self: flex-start;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  color: #32d2d1;\n  font-weight: bold;\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  font-size: 16px;\n  word-break: break-word;\n"]);return te=function(){return e},e}var re=Object(d.b)((function(e){return{githubAccounts:e.githubAccounts,githubAccountsLoading:e.githubAccountsLoading,searchedName:e.searchedName,error:e.error}}))((function(e){var n,t=e.githubAccounts,r=e.githubAccountsLoading,o=e.searchedName,i=e.error;return o&&t.length>0&&(n=a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,null,'Showing users for "'.concat(o,'"')),t.map((function(e){return a.a.createElement(Z,{userName:e.login,reposUrl:e.repos_url,key:e.id})})))),o&&0===t.length&&(n=a.a.createElement(J,{type:"error",message:"Not users available under ".concat(o),mTop:18})),r&&(n=a.a.createElement(F,null)),a.a.createElement(f.a,{column:!0,itemsCenter:!0,margin:10},i&&a.a.createElement(J,{type:"error",message:"Something went wrong, try again!"}),a.a.createElement("h1",null,a.a.createElement(oe,null,"YND")," GitHub repositories explorer"),a.a.createElement(ae,{column:!0,itemsCenter:!0,justifyCenter:!0,width:"100%",maxWidth:500},a.a.createElement(N,null),n))})),ae=Object(u.default)(f.a)(te()),oe=u.default.span(ne()),ie=u.default.p(ee());i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{store:L},a.a.createElement(re,null),a.a.createElement(l,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b6e22bc2.chunk.js.map