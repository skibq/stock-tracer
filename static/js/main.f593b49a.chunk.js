(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){},39:function(e,a,t){e.exports=t(80)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(36),r=t.n(c),s=t(13),m=t(19),l=t(27),i=(t(48),t(49),t(2)),p=t(3),u=t(5),h=t(4),y=t(6),b=t(14),d=t(15),f=(t(50),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("h2",{className:"nav-logo"},"Stock Tracker")}}]),a}(o.a.Component)),v=(t(51),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:"top-bar"},o.a.createElement("div",{className:"top-bar__container container"},o.a.createElement(f,null),o.a.createElement("nav",{className:"main-menu"},o.a.createElement("ul",{className:"main-menu__list"},o.a.createElement("li",{className:"main-menu__element"},o.a.createElement(b.b,{to:"/new-company"},"Track new company")),o.a.createElement("li",{className:"main-menu__element"},o.a.createElement(b.b,{to:"/"},"Companies"))))))}}]),a}(o.a.Component)),E=(t(57),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__content"},"2019"))}}]),a}(o.a.Component));t(23);var g=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).removeCompany=function(){t.props.removeCompany(t.props.index)},t}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.company;return o.a.createElement("li",{className:"company"},o.a.createElement("div",{className:"company__remove",onClick:this.removeCompany},"X"),o.a.createElement("div",{className:"company__image-container"},o.a.createElement("img",{src:e.logo,className:"company__image",alt:""})),o.a.createElement("div",{className:"company__info"},o.a.createElement("div",{className:"company__line"},o.a.createElement("strong",{className:"company__name"},e.name),o.a.createElement("span",{className:"company__symbol"},e.symbol),o.a.createElement("span",{className:"company__website"},e.domain)),o.a.createElement("div",{className:"company__line"},o.a.createElement("span",{className:"company__region"},e.region),o.a.createElement("span",{className:"company__open"},e.marketOpen),"-",o.a.createElement("span",{className:"company__close"},e.marketClose),o.a.createElement("span",{className:"company__timezone"},e.timezone)),o.a.createElement("div",{className:"company__line"},o.a.createElement("span",{className:"company__price"},e.price),o.a.createElement("span",{className:"company__currency"},e.currency),o.a.createElement("span",{className:"company__change company__change"+(e.positiveChange?"--positive":"--negative")},this.props.company.change),o.a.createElement("span",{className:"company__change-percent company__change-percent"+(e.positiveChange?"--positive":"--negative")},"(",e.changePercent,"%)"),o.a.createElement("span",{className:"company__closed"},"Closed: ",e.closed))))}}]),a}(o.a.Component),O=Object(s.b)(null,{removeCompany:function(e){return{type:"REMOVE_COMPANY",index:e}}})(g),_=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e;return this.props.companies&&(e=this.props.companies.map(function(e,a){return o.a.createElement(O,{company:e,index:a,key:e.name})})),o.a.createElement("div",null,o.a.createElement("h1",{className:"page-title"},"Companies"),this.props.companies&&this.props.companies.length>0?o.a.createElement("ul",{className:"companies"},e):o.a.createElement("div",null,"There are no companies yet. ",o.a.createElement(b.b,{to:"/new-company"},"Track your first company")))}}]),a}(o.a.Component),j=Object(s.b)(function(e){return{companies:e.companies}},null)(_),C=t(28),N=t(20),w=(t(58),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{htmlFor:this.props.name,className:"input__label"},this.props.label),o.a.createElement("input",{type:"text",onChange:this.props.onChange,placeholder:this.props.placeholder,id:this.props.name,className:"input"}))}}]),a}(o.a.Component)),k=(t(59),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("button",{onClick:this.props.onClick,type:"button",className:"button"},this.props.name)}}]),a}(o.a.Component)),S=t(21),M=t.n(S),A=function(e){return M.a.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(e,"&apikey=").concat("qpb68Svqxproduction"))},x=function(e){return M.a.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(e,"&apikey=").concat("qpb68Svqxproduction"))},P=function(e){return M.a.get("https://autocomplete.clearbit.com/v1/companies/suggest?query=".concat(e))},D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).findSymbol=function(){A(t.state.symbolValue).then(function(e){if(e.data["Global Quote"]&&e.data["Global Quote"]["01. symbol"]){var a=t.formatCompanyData(e.data["Global Quote"]);if(t.props.companies.find(function(e){return e.symbol===a.symbol}))return void t.showError('You already saved this company. You can view it in "Companies" tab.');x(a.symbol).then(function(e){var n=e.data.bestMatches;if(n&&n.length&&n[0]["1. symbol"]===a.symbol){var o=(a=t.formatCompanyDetails(a,n[0])).name.replace("Inc.","").replace("L.P.","");P(o).then(function(e){var n=e.data;a=Object(C.a)({},a,{domain:n[0].domain,logo:n[0].logo}),t.props.addCompany(a),t.props.history.push("/")}).catch(function(){t.props.addCompany(a),t.props.history.push("/")})}}).catch(function(){t.props.addCompany(a),t.props.history.push("/")}),t.setState({symbolValue:""})}else t.showError("We don`t found company with that symbol. Please make sure, its correct.")})},t.state={symbolValue:"",showError:!1,errorMessage:""},t.handleChange=t.handleChange.bind(Object(N.a)(t)),t}return Object(y.a)(a,e),Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({symbolValue:e.target.value})}},{key:"showError",value:function(e){var a=this;this.setState({errorMessage:e}),this.setState({showError:!0}),setTimeout(function(){a.setState({showError:!1})},5e3)}},{key:"formatCompanyData",value:function(e){return{symbol:e["01. symbol"],closed:e["07. latest trading day"],price:Math.round(100*e["05. price"])/100,change:Math.round(1e3*e["09. change"])/1e3,changePercent:Math.round(1e3*e["10. change percent"].replace("%",""))/1e3,positiveChange:e["09. change"]>0}}},{key:"formatCompanyDetails",value:function(e,a){return Object(C.a)({},e,{name:a["2. name"],region:a["4. region"],timezone:a["7. timezone"],marketOpen:a["5. marketOpen"],marketClose:a["6. marketClose"],currency:a["8. currency"]})}},{key:"render",value:function(){return o.a.createElement("div",{className:"new-company"},o.a.createElement("h1",{className:"page-title"},"Add new company"),o.a.createElement(w,{label:"Company symbol",value:this.state.symbolValue,onChange:this.handleChange,placeholder:"MSFT",name:"company-symbol"}),o.a.createElement("p",{className:"new-company__newinfo"},"Provide the stock exchange symbol of a company you want to track"),o.a.createElement("p",{className:"new-company__error error-label "+(this.state.showError?"error-label--show":"")},this.state.errorMessage),o.a.createElement("div",{className:"new-company__track-btn"},o.a.createElement(k,{onClick:this.findSymbol,name:"Track"})))}}]),a}(o.a.Component),T=Object(s.b)(function(e){return{companies:e.companies}},{addCompany:function(e){return{type:"ADD_COMPANY",company:e}}})(D),q=(t(79),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement(b.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement("div",{className:"page-container container"},o.a.createElement(d.a,{path:"/",exact:!0,component:j}),o.a.createElement(d.a,{path:"/new-company/",component:T})),o.a.createElement(E,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=Object(m.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var e=localStorage.getItem("companies"),a=JSON.parse(e);return{companies:a||[]}}(),a=arguments.length>1?arguments[1]:void 0;switch(console.log(e),a.type){case"ADD_COMPANY":console.log(e.companies);var t={companies:[].concat(Object(l.a)(e.companies),[a.company])};return localStorage.setItem("companies",JSON.stringify(t.companies)),t;case"REMOVE_COMPANY":var n={companies:Object(l.a)(e.companies)};return n.companies.splice(a.index,1),localStorage.setItem("companies",JSON.stringify(n.companies)),n;default:return e}});r.a.render(o.a.createElement(s.a,{store:V},o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.f593b49a.chunk.js.map