(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{103:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r);a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84),a(85);var l=a(8),s=a(7),i=a(9),m=a(10),d=a(6),u=a(18),p=a(27),h=a(24),f=a(28),E=(a(90),a(37)),v=a.n(E),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e;"".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png"),this.props.name,this.props.type,this.props.exp;"ComputerCardUage"===this.props.usedAs&&("ultraball.png","Pokemon","??","??")}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(v.a,{bottom:!0,cascade:!0,duration:1600,delay:2e3},o.a.createElement("div",{className:"Pokedex"},o.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(t){return o.a.createElement(b,{id:t.id,name:t.name,type:t.type,exp:t.base_experience,onClick:e.props.onClick,usedAs:e.props.isComputer?"ComputerCardUage":"HumanCardUsage"})})))))}}]),a}(n.Component),k=(a(92),a(17)),g=a.n(k),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png"),n=110,r=!1;return-1===this.props.id&&(a="transparent-pokemon-2.png",n=90,r=!0),o.a.createElement(g.a,{bottom:!0,left:!0,duration:2200,delay:2200},o.a.createElement("div",{className:"DiscardCard",onClick:function(){return t.props.onClick(t.props.id)}},o.a.createElement("div",{className:"DiscardCard-data",hidden:r},"Type: ",this.props.type),o.a.createElement("div",{className:"DiscardCard-data",hidden:r},"EXP: ",this.props.base_experience),o.a.createElement("div",{className:"DiscardCard-image"},o.a.createElement("img",{src:a,alt:this.props.name,width:n})),o.a.createElement("h6",{className:"DiscardCard-title",hidden:r},this.props.name)))}}]),a}(n.Component);a(93);var O=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"CompletedSet-wrapper"},function(e){var t=new Map(e.map((function(e){return[e.type,e]})));return Array.from(t.values())}(this.props.pokemon).map((function(e){return o.a.createElement("div",{className:"CompletedSet"},o.a.createElement("div",{className:"CompletedSet-content"},o.a.createElement("div",{id:e.id},e.type)," ",o.a.createElement("br",null)))})))}}]),a}(n.Component),N=(a(94),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(g.a,{bottom:!0,right:!0,duration:2200,delay:2200},o.a.createElement("div",{className:"CardDeck",onClick:this.props.onDeckClick},o.a.createElement("div",{className:"CardDeck-image"},o.a.createElement("img",{src:"pokeball.png",width:"76",alt:"Pokeball"})),o.a.createElement("h5",{className:"CardDeck-title"},"Card ~ Deck")))}}]),a}(n.Component)),S=a(233),j=a(228),w=a(229),M=a(230),H=a(231),P=(a(95),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modal"},o.a.createElement(S.a,{isOpen:this.props.isModalOpen,className:"modal-dialog"},o.a.createElement(j.a,{className:"justify-content-center modal-header"},o.a.createElement("h1",null,this.props.modalTitle)),o.a.createElement(w.a,{className:"modal-body"},o.a.createElement(M.a,{className:"card"},o.a.createElement("h2",null,this.props.modalContent),o.a.createElement(H.a,{className:"btn-group"},o.a.createElement("div",null,o.a.createElement("button",{className:"button1",type:"submit",onClick:this.props.onClickButton1},this.props.modalButton1),o.a.createElement("button",{className:"button2",type:"submit",onClick:this.props.onClickButton2},this.props.modalButton2))))))))}}]),a}(n.Component)),D=(a(103),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=Array.from(this.props.pokemon.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map)),t="YOU";return this.props.isComputer&&(t="COMPUTER"),o.a.createElement("div",null,o.a.createElement("h5",{className:"ScoreList-title"},t),o.a.createElement("div",{className:"Score"},o.a.createElement("h6",null,"SCORE : ",o.a.createElement("span",{className:"scoreCount"},this.props.exp))),o.a.createElement("div",{className:"ScoreList-content"},o.a.createElement("ul",null,e.map((function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",{className:"ScoreList-data"},o.a.createElement("span",{className:"count"},n," "),o.a.createElement("span",{className:"type"},a," type"))})))))}}]),a}(n.Component)),B=a(65),x=a.n(B),A=a(66),L=a(232),T=a(64),_=a(19),I=a(71),G=a.n(I);a(144);function R(e){return Array.from(e.map((function(e){return e.type})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map))}var W={isModalOpen:!0,modalTitle:"INVALID MOVE !",modalContent:"",modalButton1:"Cool",modalButton2:"Got it"},K={isModalOpen:!0,modalTitle:"Game over !!",modalContent:"Computer Won! Better luck next time",modalButton1:"New game",modalButton2:"Home"},F={isModalOpen:!0,modalTitle:"Game Over !!",modalContent:"Congratulations .. You WON !",modalButton1:"New game",modalButton2:"Home"},U={discardedCard:{id:-1,name:"",type:"",exp:""},computerHand:[],playerHand:[],completedSetPlayer:[],completedSetComputer:[],isRedirect:!1,isPlayerTurn:!0,selectedCard:null,computerLastMove:"",gameOver:!1,modalState:{isModalOpen:!1,modalTitle:"",modalContent:"",modalButton1:"",modalButton2:"",onButtonClick1:null,onButtonClick2:null}},z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).canMakeMove=function(){return n.state.isPlayerTurn&&!n.props.isPokemonLoading},n.resetState=function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[],a=Object(f.a)(n.getNRandomPokemon(14));t.length<a.length;){var o=Math.floor(Math.random()*a.length),r=a.splice(o,1)[0];t.push(r)}var c=!t||!t.length;e?(n.state=U,n.state.computerHand=t,n.state.playerHand=a,n.state.completedSetPlayer=n.getCompletedSets(n.state.playerHand),n.state.completedSetComputer=n.getCompletedSets(n.state.computerHand),n.state.isRedirect=c,c&&(n.state.gameOver=!0)):(n.setState(U),n.setState({playerHand:a,computerHand:t},(function(){return n.checkWinner(n.state.playerHand,n.state.computerHand)})),n.setState({isRedirect:c}),c&&n.setState({gameOver:!0}))},n.setCompletedState=function(e,t,a){var o=n.getCompletedSets(e,t);return n.setState(Object(h.a)({},a,o)),o},n.getCompletedSets=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=n.filterCompletedSet(e,t),o=R(a),r=[],c=function(e){var t=Object(p.a)(o[e],2),n=t[0];t[1]>=3&&r.push.apply(r,Object(f.a)(a.filter((function(e){return e.type===n})).slice(0,3)))},l=0;l<o.length;l++)c(l);return t.concat(r)},n.checkWinner=function(e,t){var a=n.setCompletedState(e,n.state.completedSetPlayer,"completedSetPlayer"),o=n.setCompletedState(t,n.state.completedSetComputer,"completedSetComputer");n.isAWinningHand(t,o)&&n.setState({gameOver:!0,modalState:Object(u.a)({},K,{onButtonClick1:n.onNewGame,onButtonClick2:n.toHome})}),n.isAWinningHand(e,a)&&n.setState({gameOver:!0,modalState:Object(u.a)({},F,{onButtonClick1:n.onNewGame,onButtonClick2:n.toHome})})},n.dismissModal=function(){n.setState({modalState:Object(u.a)({},W,{isModalOpen:!1})})},n.toHome=function(){console.log("home link...................."),n.setState({isRedirect:!0})},n.onNewGame=function(){console.log("onNewGame"),n.resetState()},n.swapDiscardCard=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!1!==n.canMakeMove()&&(console.log("swap discard card..............",e,t),-1!==n.state.discardedCard.id)){var a=n.state.discardedCard;!1===t&&(n.setState({selectedCard:a}),console.log("SELECTED POKEMON : ",a.name))}},n.swapCardFromHand=function(e,t){var a=e.filter((function(e){return e.id===t}))[0];return a.base_experience>n.state.selectedCard.base_experience?(n.setState({discardedCard:a}),e=e.filter((function(e){return e.id!==a.id})).concat(n.state.selectedCard)):null},n.filterCompletedSet=function(e,t){console.log("Current hand is",e),console.log("CompletedSet is",t);for(var a=[],n=0;n<e.length;n++){for(var o=e[n],r=!0,c=0;c<t.length;c++)if(o.id===t[c].id){r=!1;break}r&&a.push(o)}return console.log("Returned value is ",a),a},n.getHandSum=function(e){return e.reduce((function(e,t){return e+t.base_experience}),0)},n.showRules=function(e){console.log(e.key),"r"===e.key&&n.setState({modalState:{isModalOpen:!0,modalTitle:"\u25cf\u273f GAME RULES \u273f\u25cf",modalContent:"Collect ".concat(4," sets of different types of pokemon, 1 set = ").concat(3,' cards "OR" Score \u27a4\n            ').concat(2200),modalButton1:"Cool",modalButton2:"Got it",onButtonClick1:n.dismissModal,onButtonClick2:n.dismissModal}})},n.resetState(!0),console.log("State in constructor:",JSON.stringify(n.state)),n}return Object(s.a)(a,[{key:"getNRandomPokemon",value:function(e){return function(e,t){var a=new Array(t),n=e.length,o=new Array(n);if(t>n)return[];for(;t--;){var r=Math.floor(Math.random()*n);a[t]=e[r in o?o[r]:r],o[r]=--n in o?o[n]:n}return a}(this.props.pokemon,e)}}]),Object(s.a)(a,[{key:"makeMove",value:function(e,t){var a=e.findIndex((function(e){return e.id===t}));return[e[a],[].concat(Object(f.a)(e.slice(0,a)),Object(f.a)(e.slice(a+1)))]}},{key:"getCardFromDeck",value:function(e){for(var t=this,a=0,n=function(){var n=t.getNRandomPokemon(1)[0];return e.some((function(e){return e.id===n.id}))?++a>100?{v:n}:"continue":{v:e.concat(n)}};;){var o=n();switch(o){case"continue":continue;default:if("object"===typeof o)return o.v}}}},{key:"isAWinningHand",value:function(e,t){var a=12===t.length,n=this.getHandSum(e)>2200;return a||n}},{key:"render",value:function(){var e=this,t=this.state.computerHand,a=this.state.playerHand,n=this.getHandSum(t),r=this.getHandSum(a),c=function(t,a,n){var o=e.makeMove(a,n),r=Object(p.a)(o,2),c=r[0],l=r[1];e.setState({discardedCard:c}),e.setState(Object(h.a)({},t,l),(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)}))},l=function(){e.setState({isPlayerTurn:!1},(function(){setTimeout((function(){try{!function(){var t="Computer's Move : ",a=e.filterCompletedSet(e.state.computerHand,e.state.completedSetComputer),n=null!==a&&a.length<=1||Math.random()>.5;if(7===a.length||!n){var o=a[Math.floor(100*Math.random())%a.length];return c("computerHand",e.state.computerHand,o.id),t+="Discarded ".concat(o.name," !"),void e.setState({computerLastMove:t})}if(1===e.state.computerHand.length||n){var r=e.getCardFromDeck(e.state.computerHand);t+="Picked a card from deck !",e.setState({computerLastMove:t}),e.setState({computerHand:r},(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)}))}}()}finally{e.setState({isPlayerTurn:!0})}}),1e3)}))};return o.a.createElement("div",null,o.a.createElement(T.a,{when:!this.state.gameOver,message:"Are you sure you want to leave the Poke-battle?"}),o.a.createElement(g.a,{cascade:!0,duration:500},o.a.createElement("div",{className:"game-wrapper",tabIndex:"0",onKeyUp:this.showRules},o.a.createElement(x.a,{active:!this.state.isPlayerTurn,text:"Computer's Move . . .",spinner:!0}),o.a.createElement("div",{hidden:!this.props.isPokemonLoading},o.a.createElement(A.SemipolarLoading,null)),o.a.createElement(P,{isModalOpen:this.state.modalState.isModalOpen,modalTitle:this.state.modalState.modalTitle,modalContent:this.state.modalState.modalContent,modalButton1:this.state.modalState.modalButton1,onClickButton1:this.state.modalState.onButtonClick1,modalButton2:this.state.modalState.modalButton2,onClickButton2:this.state.modalState.onButtonClick2}),o.a.createElement(g.a,{cascade:!0,duration:500,delay:500},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(G.a,{bottom:!0,duration:2200,delay:2e3},o.a.createElement("div",{className:"row justify-content-center mb-md-5"},o.a.createElement(d.b,{to:"/"},o.a.createElement(L.a,{size:"lg",color:"success",className:"home-button mb-lg-4"},o.a.createElement("i",{className:"fa fa-home"}))))),o.a.createElement("div",{className:"row main-content mt-md-5"},o.a.createElement(g.a,{right:!0,cascade:!0,duration:2200,delay:500},o.a.createElement("div",{className:"col-lg-2 col-md-3 col-5 left-wrapper"},o.a.createElement("div",{className:"CompleteSet-1"},o.a.createElement(O,{pokemon:this.state.completedSetPlayer})),o.a.createElement("div",{className:"scorelist-wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"ScoreList row"},o.a.createElement(D,{isComputer:!1,pokemon:this.state.playerHand,exp:r})),o.a.createElement("br",null),o.a.createElement("div",{className:"ScoreList row"},o.a.createElement(D,{isComputer:!0,pokemon:this.state.computerHand,exp:n})))),o.a.createElement("div",{className:"CompleteSet-2"},o.a.createElement(O,{pokemon:this.state.completedSetComputer})),o.a.createElement("div",{hidden:!this.state.isPlayerTurn,id:"PlayerMoveText",className:"PlayerMove"},"Player's Move . . ."),o.a.createElement("div",{id:"ComputerMoveDetail"},this.state.computerLastMove))),o.a.createElement(g.a,{left:!0,cascade:!0,duration:1600,delay:500},o.a.createElement("div",{className:"col-lg-10 col-md-9 col-7 "},o.a.createElement("div",{className:"container-fluid border-me"},o.a.createElement("div",{className:"row center-me"},o.a.createElement(C,{pokemon:this.filterCompletedSet(this.state.playerHand,this.state.completedSetPlayer),onClick:function(t){if(!1!==e.canMakeMove())if(null==e.state.selectedCard)c("playerHand",e.state.playerHand,t),l();else{var a=e.swapCardFromHand(e.state.playerHand,t);null!==a?(e.setState({playerHand:a},(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)})),e.setState({selectedCard:null}),l()):e.setState({modalState:Object(u.a)({},W,{modalContent:"Can't make a move ! Should have picked a pokemon with a higher EXP !",onButtonClick1:e.dismissModal,onButtonClick2:e.dismissModal})})}},exp:r})),o.a.createElement("div",{className:"row center-me"},o.a.createElement("div",{className:null!=this.state.selectedCard?" CardSelected":""},o.a.createElement(y,{id:this.state.discardedCard.id,type:this.state.discardedCard.type,name:this.state.discardedCard.name,base_experience:this.state.discardedCard.base_experience,onClick:this.swapDiscardCard})),o.a.createElement(N,{onDeckClick:function(){if(!1!==e.canMakeMove())if(e.setState({selectedCard:null}),e.filterCompletedSet(e.state.playerHand,e.state.completedSetPlayer).length>=7)e.setState({modalState:Object(u.a)({},W,{modalContent:"Can't add more cards ! Discard few cards !",onButtonClick1:e.dismissModal,onButtonClick2:e.dismissModal})});else{var t=e.getCardFromDeck(a);e.setState({playerHand:t},(function(){return e.checkWinner(e.state.playerHand,e.state.computerHand)})),l()}}})),o.a.createElement("div",{className:"row center-me"},o.a.createElement(C,{pokemon:this.filterCompletedSet(this.state.computerHand,this.state.completedSetComputer),exp:n,isComputer:!0,onClick:function(){}})))))))))),this.state.isRedirect&&o.a.createElement(d.c,{to:"/"}))}}]),a}(n.Component),J=Object(_.b)((function(e){return console.log("Got state in map........++++",e),{isPokemonLoading:e.pokemons.isLoading}}))(z),Y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).changeColor=function(t){e.setState({color:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log(this.props.pokemon),o.a.createElement("div",null,o.a.createElement(J,{pokemon:this.props.pokemon.pokemons}))}}]),a}(n.Component),V=Object(_.b)((function(e){return{pokemon:e.pokemons}}))(Y),X=a(72),$=a.n(X),q=(a(145),a(76)),Q=a(51),Z=a.n(Q),ee=a(73),te=function(e){return{type:"POKEMON_ADDED",payload:e}},ae=function(e){return{type:"POKEMON_LOADING_FAILED",payload:e}},ne=function(){return{type:"POKEMON_LOADING",payload:null}},oe=function(){return{type:"POKEMON_DATA_LOADED",payload:null}};function re(e){var t=e.base_experience;return{base_experience:void 0===t?0:t,name:e.name,id:e.id,type:Object(q.a)(e,["base_experience","name","id"]).types[0].type.name}}var ce=a(52),le=a(40),se=a(53),ie=a.n(se),me=le.a.create({fadeInDown:{animationName:ce.fadeInDown,animationDuration:"2s"},fadeInUp:{animationName:ce.fadeInUp,animationDuration:"2.5s"}}),de={getPokemonData:function(){return function(){var e=Object(ee.a)(Z.a.mark((function e(t){var a,n,o,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ne()),a="https://pokeapi.co/api/v2/pokemon/",n=0;case 3:if(!(n<200)){e.next=21;break}return e.prev=4,e.next=7,fetch(a+(n+1).toString());case 7:return o=e.sent,e.next=10,o.json();case 10:r=e.sent,t(te(re(r))),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0),t(ae(e.t0));case 18:n++,e.next=3;break;case 21:t(oe());case 22:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}()}},ue=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(document.getElementsByClassName("arc")[0]),new $.a(document.getElementsByClassName("arc")[0]).dir(-1).radius(350),this.props.getPokemonData()}},{key:"render",value:function(){return o.a.createElement("div",{className:"home-wrapper"},o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:Object(le.b)(me.fadeInDown)},o.a.createElement("h1",null,"\u01a4",o.a.createElement(ie.a,{bottom:!0,duration:4e3},o.a.createElement("img",{className:"image",src:"/pokemon/pokeball.png",height:"70",width:"70",alt:"Pokeball"})),"\u0198\u212f\u1e3f",o.a.createElement(ie.a,{bottom:!0,duration:4e3},o.a.createElement("img",{className:"image",src:"/pokemon/pokeball.png",height:"70",width:"70",alt:"Pokeball"})),"\u0235")),o.a.createElement("div",{className:Object(le.b)(me.fadeInUp)},o.a.createElement("h3",{className:"arc"},"..let the battle begin")))))),o.a.createElement(g.a,{cascade:!0,duration:1e3,delay:800},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"battleCard"},o.a.createElement(g.a,{top:!0,cascade:!0,duration:1600},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-md-9 col-11 mb-2"},o.a.createElement("h5",null,"Choose Your Battle")),o.a.createElement("div",{className:"col-12"},o.a.createElement(d.b,{to:"/pokemon"},o.a.createElement("button",{className:"mt-md-1 p-2 col-md-6 col-8 all-btn btn1"},"vs Computer")),o.a.createElement("br",null),o.a.createElement(d.b,{to:"/friendgame"},o.a.createElement("button",{className:"mt-md-3 p-2 col-md-6 col-8 all-btn btn2"},"vs A Friend")),o.a.createElement("br",null),o.a.createElement(d.b,{to:"/game_rules",className:"mt-2"},o.a.createElement("button",{className:"mt-md-3 col-md-6 col-8 all-btn game-rules"},o.a.createElement("span",null,"Game Rules"))))))))))}}]),a}(n.Component),pe=Object(_.b)(null,de)(ue);a(41);var he=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"friend-wrapper"},o.a.createElement(d.b,{to:"/"},o.a.createElement(L.a,{size:"lg",color:"success",className:"button"},o.a.createElement("i",{className:"fa fa-home fa-lg"}))),o.a.createElement("div",{className:"container card-coming-soon"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-md-6 col-8"},o.a.createElement("h4",null,"\u2042\u2022\u25e6\u2022 C\xd8MING S\xd8\xd8N \u2022\u25e6\u2022\u2042"),o.a.createElement("h6",null,"Want to have a POKE-BATTLE with friends ? "),o.a.createElement("p",null,"No worries ! Soon you will be able to invite and challenge your friends for the amazing POKE-BATTLES !"))))))};var fe=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.b,{to:"/"},o.a.createElement(L.a,{size:"lg",color:"success",className:"button"},o.a.createElement("i",{className:"fa fa-home fa-lg"}))),o.a.createElement("div",{className:"container card-coming-soon"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-md-6 col-8"},o.a.createElement("h4",null,". . C\xd8MING S\xd8\xd8N . ."),o.a.createElement("h6",null,"Want to step up your POKE-BATTLES ?"),o.a.createElement("p",null,"Soon you will be able to challenge yourself by challenging random opponents for amazing POKE-BATTLES !")))))};var Ee=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"friend-wrapper"},o.a.createElement(d.b,{to:"/"},o.a.createElement(L.a,{size:"lg",color:"success",className:"button"},o.a.createElement("i",{className:"fa fa-home fa-lg"})," ")),o.a.createElement("div",{className:"container card-coming-soon"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-8"},o.a.createElement("h4",null,"\u2022\u25e6\u2022\u25cf\u273f GAME RULES \u273f\u25cf\u2022\u25e6\u2022"),o.a.createElement("p",null,"Collect 4 sets of different types of pokemon, where 1 set = 3 cards !"),o.a.createElement("p",null," or SCORE \u27a4 2000 ! "),o.a.createElement("h6",null,o.a.createElement("small",null,"*Press 'r' for rules when in the game !")))))))},ve=a(22),be=a(74),Ce=a.n(be),ke=a(75),ge=a.n(ke),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,pokemons:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_DATA_LOADED":return Object(u.a)({},e,{isLoading:!1,errMess:null,pokemons:e.pokemons});case"POKEMON_LOADING":return Object(u.a)({},e,{isLoading:!0,errMess:null,pokemons:[]});case"POKEMON_LOADING_FAILED":return Object(u.a)({},e,{isLoading:!1,errMess:t.payload});case"POKEMON_ADDED":return Object(u.a)({},e,{isLoading:!0,pokemons:e.pokemons.concat(t.payload)});default:return e}},Oe=Object(ve.d)(Object(ve.c)({pokemons:ye}),Object(ve.a)(Ce.a,ge.a));function Ne(){return o.a.createElement(_.a,{store:Oe},o.a.createElement(d.e,null,o.a.createElement(d.d,{path:"/pokemon",component:V}),o.a.createElement(d.d,{path:"/friendgame",component:he}),o.a.createElement(d.d,{path:"/randomgame",component:fe}),o.a.createElement(d.d,{path:"/game_rules",component:Ee}),o.a.createElement(d.d,{path:"/pokemon/:id",render:V.pokemon}),o.a.createElement(d.d,{exact:!0,path:"/",component:pe})))}var Se=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,{basename:"/pokemon"},o.a.createElement("div",{className:"outermost-wrapper"},o.a.createElement("div",{className:"App"},o.a.createElement(Ne,null))))}}]),a}(n.Component);a(225);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){},78:function(e,t,a){e.exports=a(226)},83:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.6f243e6a.chunk.js.map