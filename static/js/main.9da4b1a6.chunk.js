(window.webpackJsonpnfq=window.webpackJsonpnfq||[]).push([[0],{128:function(e,a,t){e.exports=t(271)},133:function(e,a,t){},269:function(e,a,t){},270:function(e){e.exports=JSON.parse('[{"uid":"k0uqt5vc","first_name":"Aalbertina","last_name":"Eskriet","email":"aeskriet0@earthlink.net","specialist":"specialistNo3","aptarnauta":false},{"uid":"k0uqt5vd","first_name":"Bambie","last_name":"Foale","email":"bfoale1@goodreads.com","specialist":"specialistNo3","aptarnauta":false},{"uid":"k0uqt5ve","first_name":"Carine","last_name":"Magnar","email":"cmagnar2@techcrunch.com","specialist":"specialistNo2","aptarnauta":false},{"uid":"k0uqt5vf","first_name":"Jeffry","last_name":"Pasterfield","email":"jpasterfield3@jigsy.com","specialist":"specialistNo1","aptarnauta":false},{"uid":"k0uqt5vg","first_name":"Jammie","last_name":"Hutchens","email":"jhutchens4@nature.com","specialist":"specialistNo4","aptarnauta":false},{"uid":"k0uqt5vh","first_name":"Geri","last_name":"Akeherst","email":"gakeherst5@meetup.com","specialist":"specialistNo2","aptarnauta":false},{"uid":"k0uqt5vi","first_name":"Adamo","last_name":"Yackiminie","email":"ayackiminie6@altervista.org","specialist":"specialistNo1","aptarnauta":false},{"uid":"k0uqt5vj","first_name":"Rayner","last_name":"Rubinivitz","email":"rrubinivitz7@qq.com","specialist":"specialistNo3","aptarnauta":false},{"uid":"k0uqt5vk","first_name":"Hercule","last_name":"Braime","email":"hbraime8@taobao.com","specialist":"specialistNo4","aptarnauta":false},{"uid":"k0uqt5vl","first_name":"Joy","last_name":"Eyton","email":"jeyton9@nymag.com","specialist":"specialistNo2","aptarnauta":false},{"uid":"k0uqt5vm","first_name":"Hogan","last_name":"Bilton","email":"hbiltona@washingtonpost.com","specialist":"specialistNo2","aptarnauta":false},{"uid":"k0uqt5vn","first_name":"Wilmer","last_name":"Borthram","email":"wborthramb@wikispaces.com","specialist":"specialistNo3","aptarnauta":false},{"uid":"k0uqt5vo","first_name":"Laura","last_name":"Pullman","email":"lpullmanc@naver.com","specialist":"specialistNo3","aptarnauta":false},{"uid":"k0uqt5vp","first_name":"Ellerey","last_name":"Moorman","email":"emoormand@xing.com","specialist":"specialistNo1","aptarnauta":false},{"uid":"k0uqt5vq","first_name":"Alisha","last_name":"Swales","email":"aswalese@japanpost.jp","specialist":"specialistNo1","aptarnauta":false}]')},271:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),o=t.n(l),i=(t(133),t(18)),s=t(2),c=t(4),m=t(5),u=t(6),d=t(7),p=t(1),f=t(8),S=t(11);var v=function(){var e={color:"white"};return r.a.createElement("nav",null,r.a.createElement(S.b,{style:e,to:"/"},r.a.createElement("h3",null,"Pagrindinis")),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(S.b,{style:e,to:"/components/Svieslente"},r.a.createElement("li",null,"Svieslente")),r.a.createElement(S.b,{style:e,to:"/components/Administracija"},r.a.createElement("li",null,"Administracija")),r.a.createElement(S.b,{style:e,to:"/components/Specialistas"},r.a.createElement("li",null,"Specialistas"))))},h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).props.loadFromLocalStorageToState(),t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=(null===this.props.stateOfData?[]:this.props.stateOfData).filter((function(e){return!0!==e.aptarnauta})),a=e.map((function(e){return e.specialist})),n=Object(i.a)(new Set(a)).map((function(e){return e})).map((function(e){return Object(s.a)({},e,[])})),l=[],o=!0,c=!1,m=void 0;try{for(var u,d=function(){var a=u.value,t=Object.keys(a)[0],n=e.filter((function(e){return e.specialist===t}));a[[t]]=n,l.push(a)},p=n[Symbol.iterator]();!(o=(u=p.next()).done);o=!0)d()}catch(v){c=!0,m=v}finally{try{o||null==p.return||p.return()}finally{if(c)throw m}}var f=t(82),S=l.map((function(e){return r.a.createElement("div",{key:f()},r.a.createElement("h1",null,Object.keys(e)[0]),e[Object.keys(e)[0]].map((function(e){return r.a.createElement("div",{key:e.uid,className:"boxes"},r.a.createElement("h2",null,e.first_name),r.a.createElement("p",null,e.last_name),r.a.createElement("p",null,e.uid))})))}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Svieslente"),r.a.createElement("div",{className:"gridContainer"},S))}}]),a}(r.a.Component),g=t(29),E=t(37),b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={isLocalStorageEmpty:localStorage.getItem("data")},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=null===this.props.stateOfData?[]:this.props.stateOfData,t=a.map((function(e){return r.a.createElement("div",{key:e.uid,className:"adminBoxes"},r.a.createElement("h1",null,e.first_name),r.a.createElement("p",null,"specialist: ",e.specialist),r.a.createElement("p",null,"id: ",e.uid))})),n=E.object().shape({first_name:E.string().min(2,"Per ma\u017eai raid\u017ei\u0173!").max(50,"Per daug raid\u017ei\u0173!").required("Privalomas laukas"),last_name:E.string().min(2,"Per ma\u017eai raid\u017ei\u0173!").max(50,"Per daug raid\u017ei\u0173!").required("Privalomas laukas"),email:E.string().email("neteisingas el pa\u0161tas").required("Privalomas laukas"),specialist:E.string().min(2,"Per ma\u017eai raid\u017ei\u0173!").max(50,"Per daug raid\u017ei\u0173!").required("Privalomas laukas")});return r.a.createElement("div",{className:"AdminPage"},r.a.createElement("h1",null,"admin page"),r.a.createElement("div",{className:"AdminPageContainer"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.loadFromJsonToState},"load from json to state"),this.state.isLocalStorageEmpty?r.a.createElement("button",{onClick:this.props.loadFromLocalStorageToState},"load from localStorage to state"):"",Boolean(a.length)?r.a.createElement("button",{onClick:this.props.saveStateToLocalStorage},"save state to localStorage"):"",r.a.createElement("button",{onClick:this.props.deleteStateFromLocalStorage},"delete state from localStorage"),r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Prideti klienta"),r.a.createElement(g.c,{initialValues:{first_name:"",last_name:"",email:"",specialist:""},validationSchema:n,onSubmit:function(a){e.props.addItemToStateAndLocalStorage(a)}},(function(e){var a=e.errors,t=e.touched;return r.a.createElement(g.b,null,r.a.createElement("div",null,"vardas"),r.a.createElement(g.a,{name:"first_name"}),a.first_name&&t.first_name?r.a.createElement("div",{className:"error"},a.first_name):null,r.a.createElement("div",null,"pavarde"),r.a.createElement(g.a,{name:"last_name"}),a.last_name&&t.last_name?r.a.createElement("div",{className:"error"},a.last_name):null,r.a.createElement("div",null,"el pa\u0161tas"),r.a.createElement(g.a,{name:"email",type:"email"}),a.email&&t.email?r.a.createElement("div",{className:"error"},a.email):null,r.a.createElement("div",null,"norimas specialistas"),r.a.createElement(g.a,{name:"specialist"}),a.specialist&&t.specialist?r.a.createElement("div",{className:"error"},a.specialist):null,r.a.createElement("div",null),r.a.createElement("button",{type:"submit"},"Submit"))})))}),null)),r.a.createElement("div",null,t)))}}]),a}(r.a.Component),O=t(127),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){t.setState({selectedOption:e})},t.props.loadFromLocalStorageToState(),t.state={selectedOption:""},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=null===this.props.stateOfData?[]:this.props.stateOfData,t=a.map((function(e){return e.specialist})),n=Object(i.a)(new Set(t)).map((function(e){return{value:e,label:e}})),l=this.state.selectedOption,o=a.filter((function(e){return e.specialist===l.value&&!0!==e.aptarnauta})),s=o.map((function(e){return r.a.createElement("div",{key:e.uid},r.a.createElement("h2",null,e.uid),r.a.createElement("p",null,e.first_name),r.a.createElement("p",null,e.specialist))})),c=s[0],m=r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.removeItemFromStateAndLocalStorage(o[0].uid)}},"Aptarnautas(istrinti)"),r.a.createElement("button",{onClick:function(){return e.props.moveItemToCompleted(o[0].uid)}},"Aptarnautas(pazymeti kad aptarnautas)"));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Specialistas Page"),r.a.createElement("button",{onClick:this.props.loadFromJsonToState},"load from json to state"),r.a.createElement("div",{className:"spec"},r.a.createElement(O.a,{menuPlacement:"auto",menuPosition:"fixed",value:l,onChange:this.handleChange,options:n}),void 0===o[0]?r.a.createElement("h1",null,"pasirinkti specialista"):m,r.a.createElement("div",null,r.a.createElement("h1",null,"Aptarnaujamas klientas"),c),r.a.createElement("div",{className:"specList"},s)))}}]),a}(r.a.Component),j=function(e){function a(e){var t;return Object(c.a)(this,a),t=Object(u.a)(this,Object(d.a)(a).call(this,e)),console.log(e),t.state={isThereData:!!localStorage.getItem("data")},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){console.log(this.state.isThereData);var e=r.a.createElement(S.b,{to:"/components/Administracija"},r.a.createElement("button",null,"ikelti duomenis")),a=r.a.createElement("div",{className:"pagrLinkContainer"},r.a.createElement(S.b,{className:"pagrLink",to:"/components/Svieslente"},r.a.createElement("h2",null,"Svieslente")),r.a.createElement(S.b,{className:"pagrLink",to:"/components/Administracija"},r.a.createElement("h2",null,"Administracija")),r.a.createElement(S.b,{className:"pagrLink",to:"/components/Specialistas"},r.a.createElement("h2",null,"Specialistas"))),t=r.a.createElement("button",{onClick:this.props.loadFromLocalStorageToState},"load from localStorage to state");return r.a.createElement("div",{className:"App"},this.props.stateOfData&&this.props.stateOfData.length?t:" ",this.state.isThereData?a:e)}}]),a}(r.a.Component),y=t(23);t(269);function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var _=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).state={data:[]},e.loadFromJsonToState=e.loadFromJsonToState.bind(Object(p.a)(e)),e.moveItemToCompleted=e.moveItemToCompleted.bind(Object(p.a)(e)),e.addItemToStateAndLocalStorage=e.addItemToStateAndLocalStorage.bind(Object(p.a)(e)),e.removeItemFromStateAndLocalStorage=e.removeItemFromStateAndLocalStorage.bind(Object(p.a)(e)),e.saveStateToLocalStorage=e.saveStateToLocalStorage.bind(Object(p.a)(e)),e.deleteStateFromLocalStorage=e.deleteStateFromLocalStorage.bind(Object(p.a)(e)),e.loadFromLocalStorageToState=e.loadFromLocalStorageToState.bind(Object(p.a)(e)),e}return Object(f.a)(a,e),Object(m.a)(a,[{key:"saveStateToLocalStorage",value:function(){var e=JSON.stringify(this.state.data);localStorage.setItem("data",e)}},{key:"loadFromJsonToState",value:function(){var e=this,a=t(270);this.setState({data:a},(function(){localStorage.setItem("data",JSON.stringify(e.state.data))})),this.forceUpdate()}},{key:"loadFromLocalStorageToState",value:function(){var e=JSON.parse(localStorage.getItem("data"));this.setState({data:e})}},{key:"deleteStateFromLocalStorage",value:function(){localStorage.removeItem("data"),localStorage.removeItem("completed")}},{key:"removeItemFromStateAndLocalStorage",value:function(e){var a=this,t=this.state.data.filter((function(a){return a.uid!==e}));this.setState({data:t},(function(){localStorage.setItem("data",JSON.stringify(a.state.data))}))}},{key:"moveItemToCompleted",value:function(e){var a=this,t=this.state.data.findIndex((function(a){return a.uid===e})),n=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(t,!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},this.state.data[t],{aptarnauta:!0}),r=[].concat(Object(i.a)(this.state.data.slice(0,t)),[n],Object(i.a)(this.state.data.slice(t+1)));this.setState({data:r},(function(){localStorage.setItem("data",JSON.stringify(a.state.data));var e=[JSON.parse(localStorage.getItem("completed"))];e.push(n);var t=function e(a){return a.reduce((function(a,t){return a.concat(Array.isArray(t)?e(t):t)}),[])}(e);null===t[0]&&t.shift(),localStorage.setItem("completed",JSON.stringify(t))}))}},{key:"addItemToStateAndLocalStorage",value:function(e){var a=this,n=t(82);e.uid=n();var r=this.state.data;r.push(e),this.setState({data:r},(function(){localStorage.setItem("data",JSON.stringify(a.state.data))}))}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",exact:!0,render:function(){return r.a.createElement(j,{stateOfData:e.state.data,loadFromLocalStorageToState:e.loadFromLocalStorageToState})}}),r.a.createElement(y.a,{path:"/components/Administracija",render:function(){return r.a.createElement(b,{stateOfData:e.state.data,loadFromJsonToState:e.loadFromJsonToState,saveStateToLocalStorage:e.saveStateToLocalStorage,loadFromLocalStorageToState:e.loadFromLocalStorageToState,deleteStateFromLocalStorage:e.deleteStateFromLocalStorage,addItemToStateAndLocalStorage:e.addItemToStateAndLocalStorage})}}),r.a.createElement(y.a,{path:"/components/Specialistas",render:function(){return r.a.createElement(k,{stateOfData:e.state.data,handleChange:e.handleChange,loadFromJsonToState:e.loadFromJsonToState,loadFromLocalStorageToState:e.loadFromLocalStorageToState,moveItemToCompleted:e.moveItemToCompleted,removeItemFromStateAndLocalStorage:e.removeItemFromStateAndLocalStorage})}}),r.a.createElement(y.a,{path:"/components/Svieslente",exact:!0,render:function(){return r.a.createElement(h,{stateOfData:e.state.data,loadFromLocalStorageToState:e.loadFromLocalStorageToState})}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[128,1,2]]]);
//# sourceMappingURL=main.9da4b1a6.chunk.js.map