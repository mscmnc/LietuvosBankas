(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t){},107:function(e,t){},116:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);a(67);var n=a(0),r=a.n(n),c=a(63),l=a.n(c),o=a(15),s=a(8),u=a(65),i=a(12),m=a(13),d=a(16),p=a(14),h=a(17),E=function(e){return r.a.createElement("div",{className:"infoBlock-header"},r.a.createElement("div",{className:"infoBlock-header--text"},r.a.createElement("h1",null,e.text)))},y=a(3),f=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("h6",null,"Error! Please try again!"))},b=function(){return r.a.createElement("div",{className:"lds-dual-ring"})},C=a(9),g=a.n(C),S=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("button",{type:e.type,onClick:e.onClick,disabled:e.disabled},e.title))},v=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("input",{type:e.type,id:e.id,onChange:e.onChange}))},T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).GetResults=function(e){e.preventDefault(),a.props.onGetResults(a.state.currency,a.state.dateFrom,a.state.dateTo)},a.state={dateFrom:"",dateTo:"",currency:""},a.dateFromChange=a.dateFromChange.bind(Object(y.a)(Object(y.a)(a))),a.dateToChange=a.dateToChange.bind(Object(y.a)(Object(y.a)(a))),a.currencyChange=a.currencyChange.bind(Object(y.a)(Object(y.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"dateFromChange",value:function(e){this.setState({dateFrom:e.target.value})}},{key:"dateToChange",value:function(e){this.setState({dateTo:e.target.value})}},{key:"currencyChange",value:function(e){this.setState({currency:e.currentTarget.value})}},{key:"componentDidMount",value:function(){this.props.onGetCurrencyList()}},{key:"render",value:function(){var e=null,t=r.a.createElement(b,null);return this.props.loading||null===this.props.currencyListData||null!=this.props.error?t=this.props.loading?r.a.createElement(b,null):r.a.createElement(f,null):(e=this.props.currencyListData.map(function(e,t){return r.a.createElement("option",{key:t,value:e.CcyAmt[1].Ccy[0]},e.CcyAmt[1].Ccy[0])}),t=r.a.createElement("div",{size:"10",className:"infoBlock-navigation-block--currency-box"},r.a.createElement("select",{className:"currency-box-results",id:"currencySymbol",onChange:this.currencyChange},r.a.createElement("option",null,"Currency"),e))),r.a.createElement("div",{className:"infoBlock-navigation"},r.a.createElement("div",{className:"infoBlock-navigation-block"},r.a.createElement(v,{className:"infoBlock-navigation-block--calendarFrom",type:"date",id:"dateFrom",onChange:this.dateFromChange}),r.a.createElement(v,{className:"infoBlock-navigation-block--calendarTo",type:"date",id:"dateTo",onChange:this.dateToChange}),r.a.createElement("div",{className:"infoBlock-navigation-block--currency"},t),r.a.createElement(S,{className:"infoBlock-navigation-block--button",type:"submit",title:"Search",onClick:this.GetResults,disabled:!this.state.dateFrom||!this.state.dateTo||!this.state.currency})))}}]),t}(n.Component),_=Object(o.b)(function(e){return{currencyListData:e.currencyList.currencyList,loading:e.currencyList.loading,error:e.currencyList.error}},function(e){return{onGetCurrencyList:function(){return e(function(e){e({type:"GET_CURRENCY_LIST_START"});var t=a(37).parseString,n=a(37).parseString;g.a.all([g.a.get("https://cors-anywhere.herokuapp.com/".concat("http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrentFxRates?tp=eu")),g.a.get("https://cors-anywhere.herokuapp.com/".concat("http://old.lb.lt/webservices/fxrates/FxRates.asmx/getCurrencyList"))]).then(g.a.spread(function(a,r){t(a.data,function(t,a){e(function(e){return{type:"GET_CURRENCY_LIST_SUCCESS",currencyList:e}}(a.FxRates.FxRate))}),n(r.data,function(t,a){e(function(e){return{type:"GET_CURRENCY_RATES_SUCCESS",currentData:e}}(a.CcyTbl.CcyNtry))})})).catch(function(t){e(function(e){return{type:"GET_CURRENCY_LIST_FAIL",error:e}}(t))})})},onGetResults:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"GET_RESULTS_START"});var c=a(37).parseString;g()({method:"GET",url:"https://cors-anywhere.herokuapp.com/".concat("http://old.lb.lt/webservices/fxrates/FxRates.asmx/getFxRatesForCurrency?tp=eu&ccy=",e,"&dtFrom=").concat(t,"&dtTo=").concat(n),headers:{"content-type":"application/x-www-form-urlencoded"}}).then(function(e){c(e.data,function(e,t){r(function(e){return{type:"GET_RESULTS_SUCCESS",data:e}}(t.FxRates.FxRate))})}).catch(function(e){r(function(e){return{type:"GET_RESULTS_FAIL",error:e}}(e))})}}(t,n,r))}}})(T),L=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=null;if(this.props.resultsLoading||null===this.props.results||null!=this.props.resultsError)if(this.props.resultsLoading||null===this.props.currentData||null!=this.props.resultsError)t=null!==this.props.resultsError?r.a.createElement(f,null):r.a.createElement(b,null);else{for(var a={},n={},c={},l=0;l<=this.props.currentData.length-1;l++)a[this.props.currentData[l].Ccy[0]]=this.props.currentData[l].CcyNm[1]._;for(var o=0;o<=this.props.currencyListData.length-1;o++)n[this.props.currencyListData[o].CcyAmt[1].Ccy[0]]=this.props.currencyListData[o].CcyAmt[1].Amt[0];Object.keys(n).forEach(function(e,t){c[t]=[a[e],[e],n[e]]}),Object.keys(c).forEach(function(t){e.push(r.a.createElement("tr",{key:t},r.a.createElement("td",null,c[t][0]),r.a.createElement("td",null,c[t][1][0]),r.a.createElement("td",null,c[t][2])))}),t=r.a.createElement("div",null,r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",{className:"infoBlock-table--heading"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Currency name"),r.a.createElement("th",{scope:"col"},"Currency code"),r.a.createElement("th",{scope:"col"},"Proportion"))),r.a.createElement("tbody",{className:"table-results"},e)))}else{e=null;for(var s=[],u=[],i=this.props.results.map(function(e){return e.CcyAmt[1].Amt[0]}),m=this.props.results.map(function(e){return e.Dt[0]}),d=0;d<=i.length;d++)s.push((i[d]-i[d+1]).toFixed(4)),u.push((s[d]/i[d+1]*100).toFixed(4));i.pop(),m.pop(),e=i.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,m[t]),r.a.createElement("td",null,e),r.a.createElement("td",null,s[t]),r.a.createElement("td",null,u[t]))}),t=r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",{className:"infoBlock-table--heading"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Proportion"),r.a.createElement("th",{scope:"col"},"Change"),r.a.createElement("th",{scope:"col"},"Change %"))),r.a.createElement("tbody",{className:"table-results"},e))}return r.a.createElement("div",{className:"infoBlock-table"},t)}}]),t}(n.Component),R=Object(o.b)(function(e){return{results:e.results.data,resultsLoading:e.results.loading,resultsError:e.results.error,currentData:e.currencyList.currentData,currencyListData:e.currencyList.currencyList}})(L),O=(a(116),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"infoBlock"},r.a.createElement(E,{text:"Daily euro foreign exchange reference rates"}),r.a.createElement(_,null),r.a.createElement(R,null))}}]),t}(n.Component)),k=a(4),N={currentData:null,currencyList:null,loading:!0,error:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENCY_LIST_START":return Object(k.a)({},e,{loading:!0});case"GET_CURRENCY_LIST_SUCCESS":return Object(k.a)({},e,{currencyList:t.currencyList,loading:!1,error:null});case"GET_CURRENCY_RATES_SUCCESS":return Object(k.a)({},e,{currentData:t.currentData,loading:!1,error:null});case"GET_CURRENCY_LIST_FAIL":return Object(k.a)({},e,{error:t.error,loading:!1});default:return e}},F={data:null,loading:!1,error:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RESULTS_START":return Object(k.a)({},e,{loading:!0});case"GET_RESULTS_SUCCESS":return Object(k.a)({},e,{data:t.data,loading:!1,error:null});case"GET_RESULTS_FAIL":return Object(k.a)({},e,{error:t.error,loading:!1});default:return e}},D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,G=Object(s.c)({currencyList:j,results:x}),U=Object(s.e)(G,D(Object(s.a)(u.a))),w=r.a.createElement(o.a,{store:U},r.a.createElement(O,null));l.a.render(w,document.getElementById("root"))},66:function(e,t,a){e.exports=a(118)}},[[66,2,1]]]);
//# sourceMappingURL=main.01827731.chunk.js.map