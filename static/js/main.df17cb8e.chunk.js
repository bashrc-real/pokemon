(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{17:function(e,t,a){},33:function(e,t,a){e.exports=a(52)},38:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c);a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39),a(40);var l=a(4),i=a(3),s=a(6),m=a(7),u=(a(41),a(2)),d=(a(46),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this,a="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard",onClick:function(){return t.props.onClick(t.props.id)}},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:a,alt:this.props.name,width:"150"})),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",this.props.type),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",this.props.exp))}}]),a}(n.Component)),p=a(29),h=a(10),E=a(15),f=(a(47),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=Array.from(this.props.pokemon.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map)),t="YOU";return this.props.isComputer&&(t="COMPUTER"),r.a.createElement("div",null,r.a.createElement("h5",{className:"TypeList-title"},t),r.a.createElement("ul",null,e.map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"TypeList-data"},r.a.createElement("span",{className:"count"},n," "),r.a.createElement("span",{className:"type"},a," type"))}))))}}]),a}(n.Component)),v=(a(48),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.props.isComputer?r.a.createElement("h1",{className:"Pokedex-winner"},"COMPUTER"):r.a.createElement("h1",{className:"Pokedex-loser"},"YOU"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"TypeList"},r.a.createElement(f,{isComputer:this.props.isComputer,pokemon:this.props.pokemon})),r.a.createElement("div",{className:"Pokedex"},void 0,e,r.a.createElement("h4",null,"Total Experience: ",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(d,{id:e.id,name:e.name,type:e.type,exp:e.base_experience,onClick:t.props.onClick})}))))))}}]),a}(n.Component)),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d,{id:this.props.id,name:this.props.name,type:this.props.type,exp:this.props.base_experience})))))}}]),a}(n.Component);var g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(l.a)(this,a),n=t.call(this,e);for(var r=[],c=Object(E.a)(n.getNRandomPokemon(8));r.length<c.length;){var o=Math.floor(Math.random()*c.length),i=c.splice(o,1)[0];r.push(i)}return n.state={discardedCard:{id:-1,name:"",type:"",exp:""},hand1:r,hand2:c},n}return Object(i.a)(a,[{key:"getNRandomPokemon",value:function(e){return function(e,t){var a=new Array(t),n=e.length,r=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var c=Math.floor(Math.random()*n);a[t]=e[c in r?r[c]:c],r[c]=--n in r?r[n]:n}return a}(this.props.pokemon,e)}}]),Object(i.a)(a,[{key:"makeMove",value:function(e,t){var a=e.findIndex((function(e){return e.id===t})),n=e[a];this.getNRandomPokemon(1)[0];return[n,[].concat(Object(E.a)(e.slice(0,a)),Object(E.a)(e.slice(a+1)))]}},{key:"getCardFromDeck",value:function(e){var t=this.getNRandomPokemon(1)[0];return e.concat(t)}},{key:"isAWinningHand",value:function(e){var t=Array.from(e.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map)).some((function(e){var t=Object(h.a)(e,2);t[0];return t[1]>2}));return console.log(Array.from(e.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map))),console.log("Checked if is any winningg"),t}},{key:"checkWinner",value:function(){this.isAWinningHand(this.state.hand1)&&alert("Computer won"),this.isAWinningHand(this.state.hand2)&&alert("Human won")}},{key:"render",value:function(){var e=this,t=this.state.hand1,a=this.state.hand2,n=t.reduce((function(e,t){return e+t.base_experience}),0),c=a.reduce((function(e,t){return e+t.base_experience}),0),o=function(t,a,n){var r=e.makeMove(a,n),c=Object(h.a)(r,2),o=c[0],l=c[1];e.setState({discardedCard:o}),e.setState(Object(p.a)({},t,l))},l=function(){var a=Math.random()>.5||1==e.state.hand1.length;if(4!=e.state.hand1.length&&a){if(1==e.state.hand1.length||a){var n=e.getCardFromDeck(t);e.setState({hand1:n})}}else{var r=Math.floor(100*Math.random())%e.state.hand1.length;o("hand1",t,e.state.hand1[r].id)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(v,{pokemon:t,exp:n,isComputer:!0,isWinner:n>c,onClick:function(){}}),r.a.createElement(b,{id:this.state.discardedCard.id,type:this.state.discardedCard.type,name:this.state.discardedCard.name,base_experience:this.state.discardedCard.base_experience}),r.a.createElement(v,{pokemon:a,onClick:function(t){1!=e.state.hand2.length?(o("hand2",e.state.hand2,t),l(),e.checkWinner()):alert("Can't make a move. Pick something from deck")},exp:c,isWinner:c>n}),r.a.createElement("div",{className:"Pokecard",onClick:function(){if(e.state.hand2.length>=4)alert("Cant add more cards to hand. discard few cards");else{var t=e.getCardFromDeck(a);e.setState({hand2:t}),l(),e.checkWinner()}}},r.a.createElement("img",{src:"/pokeball.png",width:"50"}))))}}]),a}(n.Component),k=a(32),y=a(20),N=a.n(y),O=a(30),j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;Object(l.a)(this,e),this.triggerDownload(t)}return Object(i.a)(e,[{key:"triggerDownload",value:function(e){this.getPokemonData(e)}},{key:"getPokemonData",value:function(){var t=Object(O.a)(N.a.mark((function t(a){var n,r,c=this;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0==e.cache.length){t.next=2;break}return t.abrupt("return",this.cache);case 2:n="https://pokeapi.co/api/v2/pokemon/",r=0;case 4:if(!(r<a)){t.next=10;break}return t.next=7,fetch(n+(r+1).toString()).then((function(e){return e.json()})).then((function(t){e.cache.push(c.convertModel(t))})).catch((function(e){console.error(e)}));case 7:r++,t.next=4;break;case 10:return t.abrupt("return",this.cache);case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"convertModel",value:function(e){var t=e.base_experience;return{base_experience:void 0===t?0:t,name:e.name,id:e.id,type:Object(k.a)(e,["base_experience","name","id"]).types[0].type.name}}}]),e}();j.cache=[];var w=j,C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{pokemon:this.props.mainPokemonData}))}}]),a}(n.Component);C.defaultProps={mainPokemonData:w.cache};var P=C,x=a(53),M=(a(50),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col centerItems"},r.a.createElement("h1",null,"P",r.a.createElement("img",{src:"/pokeball.png",height:"50",width:"50",alt:"Pokeball"}),"kem",r.a.createElement("img",{src:"/pokeball.png",height:"50",width:"50",alt:"Pokeball"}),"n"),r.a.createElement("h3",null,"..let the battle begin"))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"battleCard"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-8 mb-2"},r.a.createElement("h5",null,"Choose Your Battle")),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.b,{to:"/pokemon"},r.a.createElement(x.a,{outline:!0,color:"danger",className:"mt-2 p-2 col-6"},"vs Computer")),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/friendgame"},r.a.createElement(x.a,{outline:!0,color:"warning",className:"mt-3 p-2 col-6"},"vs A Friend")),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/randomgame"},r.a.createElement(x.a,{outline:!0,color:"success",className:"mt-3 mb-2 p-2 col-6"},"vs Random Opponent")),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/game_rules",className:"mt-2"},r.a.createElement(x.a,{outline:!0,className:"mt-3 col-6 game-rules"},"Game Rules")))))))}}]),a}(n.Component));a(17);var T=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container card-coming-soon"},r.a.createElement(u.b,{to:"/"},r.a.createElement(x.a,{size:"lg",color:"success",className:"button"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," ")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"COMING S",r.a.createElement("img",{src:"/pokeball.png",height:"30",width:"30",alt:"Pokeball"}),r.a.createElement("img",{src:"/pokeball.png",height:"30",width:"30",alt:"Pokeball"}),"N . ."),r.a.createElement("h6",null,"Want to have a POKE-BATTLE with friends ? "),r.a.createElement("p",null,"No worries ! Soon you will be able to invite and challenge your friends for the amazing POKE-BATTLES !")))))};var A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/"},r.a.createElement(x.a,{size:"lg",color:"success",className:"button"},r.a.createElement("i",{className:"fa fa-home fa-lg"}))),r.a.createElement("div",{className:"container card-coming-soon"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"COMING S",r.a.createElement("img",{src:"/pokeball.png",height:"30",width:"30",alt:"Pokeball"}),r.a.createElement("img",{src:"/pokeball.png",height:"30",width:"30",alt:"Pokeball"}),"N . ."),r.a.createElement("h6",null,"Want to step up your POKE-BATTLES ?"),r.a.createElement("p",null,"Soon you will be able to challenge yourself by challenging random opponents for amazing POKE-BATTLES !")))))};var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container card-coming-soon"},r.a.createElement(u.b,{to:"/"},r.a.createElement(x.a,{size:"lg",color:"success",className:"button"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," ")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"card-title"},"GAME RULES"),r.a.createElement("h6",{className:"card-text"},"Want to have a POKE-BATTLE with your friends ? "),r.a.createElement("p",null,"No worries ! You will soon be able to invite your friends for the amazing POKE-BATTLES !")))))};function W(){return r.a.createElement(u.d,null,r.a.createElement(u.c,{path:"/pokemon",component:P}),r.a.createElement(u.c,{path:"/friendgame",component:T}),r.a.createElement(u.c,{path:"/randomgame",component:A}),r.a.createElement(u.c,{path:"/game_rules",component:S}),r.a.createElement(u.c,{path:"/pokemon/:id",render:P.pokemon}),r.a.createElement(u.c,{exact:!0,path:"/",component:M}))}var R=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,null)))}}]),a}(n.Component);R.pokemonCache=new w;var _=R;a(51);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.df17cb8e.chunk.js.map