(this["webpackJsonpiris-fintech-landing-page"]=this["webpackJsonpiris-fintech-landing-page"]||[]).push([[13],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a}));var r=t(437),c=function(){return Object(r.b)()},a=r.c},153:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(270),c=t.n(r);var a=["https://mainnet.infura.io/v3/3bb2facc1ba34c21ac433006dea3015d","https://mainnet.infura.io/v3/32cc1fd7fe8d4ad5aa6e4c2a18e90839"],o=function(){var e=c()(a);if(void 0!==e)return e};var i=function(){return parseInt("1",10)}},184:function(e,n,t){"use strict";var r=t(68),c=t(40),a=t.n(c),o=t(0),i=t(81),u=t(152),s=t(189),l=t(188),d=t(131),f=t(194),b=t(153),h=function(){var e=Object(r.a)(a.a.mark((function e(){var n,t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.ethereum,t=localStorage.getItem("_iris_fintech_"),!n||"Injected"!==t){e.next=36;break}return r=Object(b.a)(),e.prev=4,e.prev=5,console.log("0x".concat(r.toString(16))),e.next=9,n.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(r.toString(16))}]});case 9:case 18:return e.abrupt("return",!0);case 12:if(e.prev=12,e.t0=e.catch(5),4902!==e.t0.code){e.next=27;break}return e.prev=15,e.next=18,n.request({method:"wallet_addEthereumChain",params:[{chainId:"0x".concat(r.toString(16)),chainName:"Ethereum Mainnet",nativeCurrency:{name:"ETH",symbol:"eth",decimals:18},rpcUrls:[Object(b.b)()],blockExplorerUrls:["https://etherscan.io"]}]});case 21:return e.prev=21,e.t1=e.catch(15),console.error("add",e.t1),e.abrupt("return",!1);case 25:e.next=28;break;case 27:return e.abrupt("return",!1);case 28:e.next=34;break;case 30:return e.prev=30,e.t2=e.catch(4),console.error("setup",e.t2),e.abrupt("return",!1);case 34:e.next=38;break;case 36:return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),e.abrupt("return",!1);case 38:case"end":return e.stop()}}),e,null,[[4,30],[5,12],[15,21]])})));return function(){return e.apply(this,arguments)}}();n.a=function(){var e=Object(d.a)(),n=Object(i.c)(),t=n.active,c=n.connector,b=n.activate,v=n.deactivate;t&&(c==l.b?localStorage.setItem("_iris_fintech_","Injected"):c==l.c&&localStorage.setItem("_iris_fintech_","WalletConnect"));var g=Object(o.useCallback)((function(){e(Object(f.b)(!1)),v(),"WalletConnect"==localStorage.getItem("_iris_fintech_")&&l.c.handleDisconnect(),localStorage.removeItem("_iris_fintech_"),localStorage.removeItem("walletconnect")}),[v,e]),p=Object(o.useCallback)((function(n){var t;if("Injected"==n)t=l.b;else if("WalletConnect"==n)t=l.c;else{var c=localStorage.getItem("_iris_fintech_");"Injected"==c?t=l.b:"WalletConnect"==c&&(t=l.c)}t?b(t,function(){var n=Object(r.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r instanceof i.a)){n.next=11;break}if(t!=l.b){n.next=8;break}return n.next=4,h();case 4:n.sent?b(t,void 0,!0).catch((function(){e(Object(f.b)(!0))})):(console.log("logout"),g()),n.next=9;break;case 8:t==l.c&&(t.handleDisconnect(),console.log("logout"),g());case 9:n.next=13;break;case 11:r instanceof u.b?console.log("Provider Error","No provider was found"):r instanceof u.c?console.log("Authorization Error","Please authorize to access your account"):r instanceof s.a?(t.handleDisconnect(),console.log("Authorization Error","Please authorize to access your account")):console.log(r.name,r.message),g();case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(){e(Object(f.b)(!0)),g()})):(console.log("Can't find connector","The connector config is wrong"),g())}),[b,e,g]);return{login:p,logout:g}}},188:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return l})),t.d(n,"a",(function(){return d}));t(68),t(40);var r=t(152),c=t(189),a=t(436),o=t(153),i=Object(o.b)(),u=Object(o.a)();if(void 0===i)throw new Error("URL Type Error: should be string");if(NaN===u)throw new Error("Invalid Numneric Error: should be a valid number");var s=new r.a({supportedChainIds:[u]});s.handleChainChanged=function(e){if(e!=u)return console.log("error"),localStorage.removeItem("_iris_fintech_"),void s.emitDeactivate();s.emitUpdate({chainId:e,provider:window.BinanceChain}),window.location.reload()};var l=new c.b({rpc:{1:i},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),d=function(e){var n=new a.a.providers.Web3Provider(e);return n.pollingInterval=12e3,n}},194:function(e,n,t){"use strict";t.d(n,"b",(function(){return a}));var r=t(126),c=Object(r.b)({name:"triedEager",initialState:{tried:!1},reducers:{setState:function(e,n){e.tried=n.payload}}}),a=c.actions.setState;n.a=c.reducer},278:function(e,n){},914:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(81),a=t(131),o=t(184),i=function(){var e=Object(c.c)().activate,n=Object(a.a)(),t=Object(o.a)().login;Object(r.useEffect)((function(){localStorage.getItem("_iris_fintech_")&&t("useEagerConnect")}),[e,n,t])},u=function(){var e,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.c)(),a=t.connector,i=t.active,u=t.error,s=null!==(e=localStorage.getItem("_iris_fintech_"))&&void 0!==e?e:"",l=Object(o.a)(),d=l.login;Object(r.useEffect)((function(){if(a&&a.on&&!i&&!u&&!n){var e=function(){console.log("Handling 'connect' event"),d("useInactiveListener")},t=function(e){console.log("Handling 'chainChanged' event with payload",e),window.location.reload(),d("useInactiveListener")},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&d("useInactiveListener")},c=function(e){console.log("Handling 'networkChanged' event with payload",e),d("useInactiveListener")};return a.on("connect",e),a.on("chainChanged",t),a.on("accountsChanged",r),a.on("networkChanged",c),function(){a.removeListener&&(a.removeListener("connect",e),a.removeListener("chainChanged",t),a.removeListener("accountsChanged",r),a.removeListener("networkChanged",c))}}}),[i,u,n,a,d,s])},s=function(){var e=Object(a.b)((function(e){return e.triedEager.tried}));i(),u(!e)},l=t(6),d=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(12),t.e(9)]).then(t.bind(null,910))})),f=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,912))})),b=Object(r.lazy)((function(){return t.e(17).then(t.bind(null,916))})),h=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(10),t.e(14)]).then(t.bind(null,913))})),v=Object(r.lazy)((function(){return Promise.all([t.e(1),t.e(5),t.e(8)]).then(t.bind(null,909))}));n.default=function(){return s(),Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{}),Object(l.jsx)(b,{}),Object(l.jsx)(d,{}),Object(l.jsx)(f,{}),Object(l.jsx)(v,{})]})}}}]);
//# sourceMappingURL=13.6352cde4.chunk.js.map