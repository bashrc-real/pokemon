(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{27:function(e,t,a){},47:function(e,t,a){e.exports=a(79)},52:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o);a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53),a(54);var l=a(4),s=a(3),i=a(6),m=a(7),d=(a(55),a(5)),u=(a(60),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png"),n=this.props.name,o=this.props.type,c=this.props.exp,l=100;return"ComputerCardUage"===this.props.usedAs&&(a="ultraball.png",n="Pokemon",o="??",c="??",l=60),r.a.createElement("div",{className:"Pokecard",onClick:function(){return t.props.onClick(t.props.id)}},r.a.createElement("h6",{className:"Pokecard-title"},n),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:a,alt:this.props.name,width:l})),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",o),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",c))}}]),a}(n.Component)),p=a(16),h=a(20),v=a(17),E=a(21),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Pokedex"},r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(t){return r.a.createElement(u,{id:t.id,name:t.name,type:t.type,exp:t.base_experience,onClick:e.props.onClick,usedAs:e.props.isComputer?"ComputerCardUage":"HumanCardUsage"})}))))}}]),a}(n.Component),k=(a(61),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png"),n=120,o=!1;return-1===this.props.id&&(a="transparent-pokemon-2.png",n=90,o=!0),r.a.createElement("div",{className:"DiscardCard",onClick:function(){return t.props.onClick(t.props.id)}},r.a.createElement("div",{className:"DiscardCard-data",hidden:o},"Type: ",this.props.type),r.a.createElement("div",{className:"DiscardCard-data",hidden:o},"EXP: ",this.props.base_experience),r.a.createElement("div",{className:"DiscardCard-image"},r.a.createElement("img",{src:a,alt:this.props.name,width:n})),r.a.createElement("h6",{className:"DiscardCard-title",hidden:o},this.props.name))}}]),a}(n.Component));a(62);var C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"CompletedSet-wrapper"},function(e){var t=new Map(e.map((function(e){return[e.type,e]})));return Array.from(t.values())}(this.props.pokemon).map((function(e){return r.a.createElement("div",{className:"CompletedSet"},r.a.createElement("div",{className:"CompletedSet-content"},r.a.createElement("div",{id:e.id},e.type)," ",r.a.createElement("br",null)))})))}}]),a}(n.Component),g=(a(63),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"CardDeck",onClick:this.props.onDeckClick},r.a.createElement("div",{className:"CardDeck-image"},r.a.createElement("img",{src:"pokeball.png",width:"105",alt:"Pokeball"})),r.a.createElement("h5",{className:"CardDeck-title"},"Card ~ Deck")))}}]),a}(n.Component)),b=a(85),y=a(80),N=a(81),S=a(82),O=a(83),j=(a(64),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal"},r.a.createElement(b.a,{isOpen:this.props.isModalOpen,className:"modal-dialog"},r.a.createElement(y.a,{className:"justify-content-center modal-header"},r.a.createElement("h1",null,this.props.modalTitle)),r.a.createElement(N.a,{className:"modal-body"},r.a.createElement(S.a,{className:"card"},r.a.createElement("h2",null,this.props.modalContent),r.a.createElement(O.a,{className:"btn-group"},r.a.createElement("div",null,r.a.createElement("button",{className:"button1",type:"submit",onClick:this.props.onClickButton1},this.props.modalButton1),r.a.createElement("button",{className:"button2",type:"submit",onClick:this.props.onClickButton2},this.props.modalButton2))))))))}}]),a}(n.Component)),w=(a(72),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=Array.from(this.props.pokemon.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map)),t="YOU";return this.props.isComputer&&(t="COMPUTER"),r.a.createElement("div",null,r.a.createElement("h5",{className:"ScoreList-title"},t),r.a.createElement("div",{className:"Score"},r.a.createElement("h6",null,"SCORE : ",r.a.createElement("span",{className:"scoreCount"},this.props.exp))),r.a.createElement("div",{className:"ScoreList-content"},r.a.createElement("ul",null,e.map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"ScoreList-data"},r.a.createElement("span",{className:"count"},n," "),r.a.createElement("span",{className:"type"},a," type"))})))))}}]),a}(n.Component)),P=(a(73),a(43)),H=a.n(P);function M(e){return Array.from(e.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map))}var B={isModalOpen:!0,modalTitle:"INVALID MOVE !",modalContent:"",modalButton1:"Cool",modalButton2:"Got it"},x={isModalOpen:!0,modalTitle:"Game over !!",modalContent:"Computer Won! Better luck next time",modalButton1:"New game",modalButton2:"Home"},T={isModalOpen:!0,modalTitle:"Game Over !!",modalContent:"Congratulations .. You WON !",modalButton1:"New game",modalButton2:"Home"},D={discardedCard:{id:-1,name:"",type:"",exp:""},computerHand:[],playerHand:[],completedSetPlayer:[],completedSetComputer:[],isRedirect:!1,isPlayerTurn:!0,selectedCard:null,computerLastMove:"",modalState:{isModalOpen:!1,modalTitle:"",modalContent:"",modalButton1:"",modalButton2:"",onButtonClick1:null,onButtonClick2:null}},A=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).resetState=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[],a=Object(E.a)(n.getNRandomPokemon(14));t.length<a.length;){var r=Math.floor(Math.random()*a.length),o=a.splice(r,1)[0];t.push(o)}e?(n.state=D,n.state.computerHand=t,n.state.playerHand=a,n.state.completedSetPlayer=n.getCompletedSets(n.state.playerHand),n.state.completedSetComputer=n.getCompletedSets(n.state.computerHand)):(n.setState(D),n.setState({playerHand:a,computerHand:t},(function(){return n.checkWinner(n.state.playerHand,n.state.computerHand)})))},n.setCompletedState=function(e,t,a){var r=n.getCompletedSets(e,t);return n.setState(Object(v.a)({},a,r)),r},n.getCompletedSets=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=n.filterCompletedSet(e,t),r=M(a),o=[],c=function(e){var t=Object(h.a)(r[e],2),n=t[0];3===t[1]&&o.push.apply(o,Object(E.a)(a.filter((function(e){return e.type===n}))))},l=0;l<r.length;l++)c(l);return t.concat(o)},n.checkWinner=function(e,t){var a=n.setCompletedState(e,n.state.completedSetPlayer,"completedSetPlayer"),r=n.setCompletedState(t,n.state.completedSetComputer,"completedSetComputer");n.isAWinningHand(t,r)&&n.setState({modalState:Object(p.a)({},x,{onButtonClick1:n.onNewGame,onButtonClick2:n.toHome})}),n.isAWinningHand(e,a)&&n.setState({modalState:Object(p.a)({},T,{onButtonClick1:n.onNewGame,onButtonClick2:n.toHome})})},n.dismissModal=function(){n.setState({modalState:Object(p.a)({},B,{isModalOpen:!1})})},n.toHome=function(){console.log("home link...................."),n.setState({isRedirect:!0})},n.onNewGame=function(){console.log("onNewGame"),n.resetState()},n.swapDiscardCard=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!1!==n.state.isPlayerTurn&&(console.log("swap discard card..............",e,t),-1!=n.state.discardedCard.id)){var a=n.state.discardedCard;!1===t&&(n.setState({selectedCard:a}),console.log("SELECTED POKEMON : ",a.name))}},n.swapCardFromHand=function(e,t){var a=e.filter((function(e){return e.id===t}))[0];return a.base_experience>n.state.selectedCard.base_experience?(n.setState({discardedCard:a}),e=e.filter((function(e){return e.id!==a.id})).concat(n.state.selectedCard)):null},n.filterCompletedSet=function(e,t){console.log("Current hand is",e),console.log("CompletedSet is",t);for(var a=[],n=0;n<e.length;n++){for(var r=e[n],o=!0,c=0;c<t.length;c++)if(r.id===t[c].id){o=!1;break}o&&a.push(r)}return console.log("Returned value is ",a),a},n.getHandSum=function(e){return e.reduce((function(e,t){return e+t.base_experience}),0)},n.showRules=function(e){console.log(e.key),"r"===e.key&&n.setState({modalState:{isModalOpen:!0,modalTitle:"Game Rules",modalContent:"Objective : Collect three sets (1 set = 3 cards) different types of pokemon or score >2000",modalButton1:"Cool",modalButton2:"Got it",onButtonClick1:n.dismissModal,onButtonClick2:n.dismissModal}})},n.resetState(!0),console.log("State in constructor:",JSON.stringify(n.state)),n}return Object(s.a)(a,[{key:"getNRandomPokemon",value:function(e){return function(e,t){var a=new Array(t),n=e.length,r=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var o=Math.floor(Math.random()*n);a[t]=e[o in r?r[o]:o],r[o]=--n in r?r[n]:n}return a}(this.props.pokemon,e)}}]),Object(s.a)(a,[{key:"makeMove",value:function(e,t){var a=e.findIndex((function(e){return e.id===t}));return[e[a],[].concat(Object(E.a)(e.slice(0,a)),Object(E.a)(e.slice(a+1)))]}},{key:"getCardFromDeck",value:function(e){var t=this.getNRandomPokemon(1)[0];return e.concat(t)}},{key:"isAWinningHand",value:function(e,t){var a=15===t.length,n=this.getHandSum(e)>2e3;return a||n}},{key:"render",value:function(){var e=this,t=this.state.computerHand,a=this.state.playerHand,n=this.getHandSum(t),o=this.getHandSum(a),c=function(t,a,n){var r=e.makeMove(a,n),o=Object(h.a)(r,2),c=o[0],l=o[1];e.setState({discardedCard:c}),e.setState(Object(v.a)({},t,l),(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)}))},l=function(){e.setState({isPlayerTurn:!1},(function(){setTimeout((function(){try{!function(){var t="Computer's Move : ",a=e.filterCompletedSet(e.state.computerHand,e.state.completedSetComputer),n=null!==a&&a.length<=1||Math.random()>.5;if(7===a.length||!n){var r=a[Math.floor(100*Math.random())%a.length];return c("computerHand",e.state.computerHand,r.id),t+="Discarded ".concat(r.name," !"),void e.setState({computerLastMove:t})}if(1===e.state.computerHand.length||n){var o=e.getCardFromDeck(e.state.computerHand);t+="Picked a card from deck !",e.setState({computerLastMove:t}),e.setState({computerHand:o},(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)}))}}()}finally{e.setState({isPlayerTurn:!0})}}),1500)}))};return r.a.createElement("div",{className:"game-wrapper",tabIndex:"0",onKeyUp:this.showRules},r.a.createElement(H.a,{active:!this.state.isPlayerTurn,spinner:!0,text:"Computer's Move . . ."}),r.a.createElement(j,{isModalOpen:this.state.modalState.isModalOpen,modalTitle:this.state.modalState.modalTitle,modalContent:this.state.modalState.modalContent,modalButton1:this.state.modalState.modalButton1,onClickButton1:this.state.modalState.onButtonClick1,modalButton2:this.state.modalState.modalButton2,onClickButton2:this.state.modalState.onButtonClick2}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"CompleteSet-1 mt-auto"},r.a.createElement(C,{pokemon:this.state.completedSetPlayer})),r.a.createElement("div",{className:"scorelist-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("div",{className:"ScoreList row m-auto"},r.a.createElement(w,{isComputer:!1,pokemon:this.state.playerHand,exp:o}))),r.a.createElement("div",{className:"ScoreList row m-auto"},r.a.createElement(w,{isComputer:!0,pokemon:this.state.computerHand,exp:n})))),r.a.createElement("div",{className:"CompleteSet-2"},r.a.createElement(C,{pokemon:this.state.completedSetComputer})),r.a.createElement("div",{hidden:!this.state.isPlayerTurn,id:"PlayerMoveText",className:"PlayerMove"},"Player's Move . . ."),r.a.createElement("div",{id:"ComputerMoveDetail"},this.state.computerLastMove)),r.a.createElement("div",{className:"col-9 m-auto"},r.a.createElement("div",{className:"container-fluid border-me"},r.a.createElement("div",{className:"row center-me"},r.a.createElement(f,{pokemon:this.filterCompletedSet(this.state.playerHand,this.state.completedSetPlayer),onClick:function(t){if(!1!==e.state.isPlayerTurn)if(null==e.state.selectedCard)c("playerHand",e.state.playerHand,t),l();else{var a=e.swapCardFromHand(e.state.playerHand,t);null!==a?(e.setState({playerHand:a},(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)})),e.setState({selectedCard:null}),l()):e.setState({modalState:Object(p.a)({},B,{modalContent:"Can't make a move ! Should have picked a pokemon with a higher EXP !",onButtonClick1:e.dismissModal,onButtonClick2:e.dismissModal})})}},exp:o})),r.a.createElement("div",{className:"row center-me"},r.a.createElement("div",{className:null!=this.state.selectedCard?" CardSelected":""},r.a.createElement(k,{id:this.state.discardedCard.id,type:this.state.discardedCard.type,name:this.state.discardedCard.name,base_experience:this.state.discardedCard.base_experience,onClick:this.swapDiscardCard})),r.a.createElement(g,{onDeckClick:function(){if(!1!==e.state.isPlayerTurn)if(e.setState({selectedCard:null}),e.filterCompletedSet(e.state.playerHand,e.state.completedSetPlayer).length>=7)e.setState({modalState:Object(p.a)({},B,{modalContent:"Can't add more cards ! Discard few cards !",onButtonClick1:e.dismissModal,onButtonClick2:e.dismissModal})});else{var t=e.getCardFromDeck(a);e.setState({playerHand:t},(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)})),l()}}})),r.a.createElement("div",{className:"row center-me"},r.a.createElement(f,{pokemon:this.filterCompletedSet(this.state.computerHand,this.state.completedSetComputer),exp:n,isComputer:!0,onClick:function(){}})))))),this.state.isRedirect&&r.a.createElement(d.c,{to:"/"}))}}]),a}(n.Component),L=a(46),R=a(31),W=a.n(R),G=a(44),_=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;Object(l.a)(this,e),this.triggerDownload(t)}return Object(s.a)(e,[{key:"triggerDownload",value:function(e){this.getPokemonData(e)}},{key:"getPokemonData",value:function(){var t=Object(G.a)(W.a.mark((function t(a){var n,r,o,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.cache.length){t.next=2;break}return t.abrupt("return",this.cache);case 2:n="https://pokeapi.co/api/v2/pokemon/",r=0;case 4:if(!(r<a)){t.next=23;break}return t.prev=5,t.next=8,fetch(n+(r+1).toString());case 8:return o=t.sent,console.log(JSON.stringify(o)),t.next=12,o.json();case 12:c=t.sent,console.log(JSON.stringify(c)),e.cache.push(this.convertModel(c)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),console.error(t.t0);case 20:r++,t.next=4;break;case 23:return t.abrupt("return",this.cache);case 24:case"end":return t.stop()}}),t,this,[[5,17]])})));return function(e){return t.apply(this,arguments)}}()},{key:"convertModel",value:function(e){var t=e.base_experience;return{base_experience:void 0===t?0:t,name:e.name,id:e.id,type:Object(L.a)(e,["base_experience","name","id"]).types[0].type.name}}}]),e}();_.cache=[];var F=_,I=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeColor=function(e){n.setState({color:e})},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,{pokemon:this.props.mainPokemonData}))}}]),a}(n.Component);I.defaultProps={mainPokemonData:F.cache};var K=I,U=a(84),z=a(45),J=a.n(z),Y=(a(77),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(document.getElementsByClassName("arc")[0]),new J.a(document.getElementsByClassName("arc")[0]).dir(-1).radius(350)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"\u01a4",r.a.createElement("img",{className:"image",src:"/pokemon/pokeball.png",height:"70",width:"70",alt:"Pokeball"}),"\u0198\u212f\u1e3f",r.a.createElement("img",{className:"image",src:"/pokemon/pokeball.png",height:"70",width:"70",alt:"Pokeball"}),"\u0235"),r.a.createElement("h3",{className:"arc"},"..let the battle begin"))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"battleCard"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-9 col-11 mb-2"},r.a.createElement("h5",null,"Choose Your Battle")),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.b,{to:"/pokemon"},r.a.createElement(U.a,{outline:!0,color:"danger",className:"mt-md-2 p-2 col-md-6 col-8"},"vs Computer")),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/friendgame"},r.a.createElement(U.a,{outline:!0,color:"warning",className:"mt-md-3 p-2 col-md-6 col-8"},"vs A Friend")),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/randomgame"},r.a.createElement(U.a,{outline:!0,color:"success",className:"mt-md-3 mb-2 p-2 col-md-6 col-8"},"vs Random Opponent")),r.a.createElement("br",null),r.a.createElement(d.b,{to:"/game_rules",className:"mt-2"},r.a.createElement(U.a,{outline:!0,className:"mt-md-3 col-md-6 col-8 game-rules"},"Game Rules")))))))}}]),a}(n.Component));a(27);var X=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(d.b,{to:"/"},r.a.createElement(U.a,{size:"lg",color:"success",className:"button"},r.a.createElement("i",{className:"fa fa-home fa-lg"}))),r.a.createElement("div",{className:"container card-coming-soon"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6 col-8"},r.a.createElement("h4",null,"COMING S",r.a.createElement("img",{src:"pokeball.png",height:"30",width:"30",alt:"Pokeball"}),r.a.createElement("img",{src:"pokeball.png",height:"30",width:"30",alt:"Pokeball"}),"N . ."),r.a.createElement("h6",null,"Want to have a POKE-BATTLE with friends ? "),r.a.createElement("p",null,"No worries ! Soon you will be able to invite and challenge your friends for the amazing POKE-BATTLES !"))))))};var V=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/"},r.a.createElement(U.a,{size:"lg",color:"success",className:"button"},r.a.createElement("i",{className:"fa fa-home fa-lg"}))),r.a.createElement("div",{className:"container card-coming-soon"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6 col-8"},r.a.createElement("h4",null,"COMING S",r.a.createElement("img",{src:"pokeball.png",height:"30",width:"30",alt:"Pokeball"}),r.a.createElement("img",{src:"pokeball.png",height:"30",width:"30",alt:"Pokeball"}),"N . ."),r.a.createElement("h6",null,"Want to step up your POKE-BATTLES ?"),r.a.createElement("p",null,"Soon you will be able to challenge yourself by challenging random opponents for amazing POKE-BATTLES !")))))};var $=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container card-coming-soon"},r.a.createElement(d.b,{to:"/"},r.a.createElement(U.a,{size:"lg",color:"success",className:"button"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," ")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{className:"card-title"},"GAME RULES"),r.a.createElement("h6",{className:"card-text"},"Excited to know the rules of POKE-BATTLE ?"),r.a.createElement("p",null,"No worries ! You will soon get the updates !!")))))};function q(){return r.a.createElement(d.e,null,r.a.createElement(d.d,{path:"/pokemon",component:K}),r.a.createElement(d.d,{path:"/friendgame",component:X}),r.a.createElement(d.d,{path:"/randomgame",component:V}),r.a.createElement(d.d,{path:"/game_rules",component:$}),r.a.createElement(d.d,{path:"/pokemon/:id",render:K.pokemon}),r.a.createElement(d.d,{exact:!0,path:"/",component:Y}))}var Q=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/pokemon"},r.a.createElement("div",{className:"App"},r.a.createElement(q,null)))}}]),a}(n.Component);Q.pokemonCache=new F;var Z=Q;a(78);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.fca01b8c.chunk.js.map