(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(292)},120:function(e,t,a){},25:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),o=a.n(s),i=(a(120),a(6)),l=a(9),c=a(11),u=a(10),m=a(12),d=a(297),p=a(296),h=a(22),g=a(26),v=a.n(g),f=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a,n,r){var s=new FormData;return s.append("picture",r),s.append("username",e),s.append("password",a),s.append("genres",JSON.stringify(n)),t.service.post("auth/signup",s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.login=function(e,a){return t.service.post("auth/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("auth/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("auth/logout").then(function(e){return e.data})},this.friendsGet=function(e,a){return t.service.get("auth/friends/".concat(e),{friendName:e,user:a}).then(function(e){return e.data})},this.friends=function(e,a,n,r){return t.service.post("auth/friends",{friendName:e,user:a,friendGenres:n,imgPath:r}).then(function(e){return e.data})},this.genre=function(e,a){return t.service.post("auth/genres",{user:e,genreName:a}).then(function(e){return e.data})},this.service=v.a.create({baseURL:"".concat("https://you2se.herokuapp.com","/api/"),withCredentials:!1})},b=a(27),E=a.n(b),y=a(29),O=a.n(y),j=a(38),N=a.n(j),S=a(33),k=a.n(S),C=a(106),w=a.n(C),I=a(107),M=a.n(I),U=a(108),x=a.n(U),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.genres,s=a.state.file;a.state.genres&&r.map(function(e,t,n){!0===e.bool?(n.splice(t,1,{type:e.type,bool:1}),a.setState({genres:n})):(n.splice(t,1,{type:e.type,bool:0}),a.setState({genres:n}))}),a.service.signup(t,n,a.state.genres,s).then(function(e){a.setState({username:"",password:"",error:!1,genres:[{type:"action",bool:!1},{type:"drama",bool:!1},{type:"comedy",bool:!1},{type:"adventure",bool:!1},{type:"animation",bool:!1},{type:"crimen",bool:!1},{type:"documental",bool:!1},{type:"family",bool:!1},{type:"history",bool:!1},{type:"fantasy",bool:!1},{type:"terror",bool:!1},{type:"music",bool:!1},{type:"mistery",bool:!1},{type:"romance",bool:!1},{type:"scifi",bool:!1},{type:"tvshow",bool:!1},{type:"belic",bool:!1},{type:"western",bool:!1},{type:"suspense",bool:!1}],file:null}),a.props.getUser(e.user)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleUploadFile=function(e){a.setState({file:e.target.files[0]})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.state={username:"",password:"",genres:[{type:"action",bool:!1},{type:"drama",bool:!1},{type:"comedy",bool:!1},{type:"adventure",bool:!1},{type:"animation",bool:!1},{type:"crimen",bool:!1},{type:"documental",bool:!1},{type:"family",bool:!1},{type:"history",bool:!1},{type:"fantasy",bool:!1},{type:"terror",bool:!1},{type:"music",bool:!1},{type:"mistery",bool:!1},{type:"romance",bool:!1},{type:"scifi",bool:!1},{type:"tvshow",bool:!1},{type:"belic",bool:!1},{type:"western",bool:!1},{type:"suspense",bool:!1}],photo:{}},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"create"},r.a.createElement("h3",null,"Welcome! Create your account next:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"sign-up"},r.a.createElement(k.a,{component:"fieldset",className:"form-control"},r.a.createElement(E.a,{placeholder:"username",className:"text-field",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement(E.a,{placeholder:"password",type:"password",className:"text-field",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("span",null,"Upload your profile Picture"),r.a.createElement("input",{type:"file",name:"photo",className:"pic-load",onChange:function(t){return e.handleUploadFile(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w.a,null,r.a.createElement(N.a,{component:"legend"},r.a.createElement("p",null,"Select Genres That You Like The Most")),r.a.createElement("div",null,this.state.genres.map(function(t,a,n){return r.a.createElement(M.a,{control:r.a.createElement(x.a,{checked:t.bool,onChange:function(r){n.splice(a,1,{type:t.type,bool:!t.bool}),e.setState({genres:n})},className:"check-genre",value:"action"}),label:t.type})}))))),r.a.createElement("div",{className:"submit-btn"},r.a.createElement(O.a,{onClick:this.handleFormSubmit,primary:"true"},"Submit")),r.a.createElement("h1",null,this.state.error?"Something went wrong, try againw":""))}}]),t}(n.Component),R=a(295),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.setRedirect();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(R.a,{to:"/profile"})},a.state={username:"",password:"",redirect:!1},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Please, login to our site:"),r.a.createElement("div",{className:"login"},r.a.createElement(k.a,{component:"fieldset",className:"form-control"},r.a.createElement(E.a,{name:"username",placeholder:"Username",floatinglabeltext:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)},floatingLabelFixed:!0}),r.a.createElement(E.a,{name:"password",placeholder:"Password",floatinglabeltext:"password",type:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)},floatingLabelFixed:!0}),r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(O.a,{onClick:this.handleFormSubmit,primary:!0},"Login")))),r.a.createElement("h1",null,this.state.error?"Username or Password incorrect":""))}}]),t}(n.Component),G=a(16),T=(a(25),a(293)),P=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{to:"/"},r.a.createElement("div",{id:"logo",className:"Logo"}))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",movies:[],recommendations:[],search:!1},a.onTextChange=function(e){var t=e.target.value;a.setState(Object(h.a)({},e.target.name,t),function(){""===t?a.setState({movies:[]}):a.state.searchText.length>2&&v.a.get("https://api.themoviedb.org/3/search/movie?api_key=3d561f8d0b8aac21ad2ca16cb83e0825&language=es&include_adult=false&query="+a.state.searchText).then(function(e){a.setState({movies:e.data.results,search:!0})})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="",t="",a="";return this.state.movies&&(e=this.state.movies.map(function(e,n){return n<5?(a="",t="http://image.tmdb.org/t/p/original"+e.backdrop_path,a=e.name?e.name:e.original_title,r.a.createElement("div",{className:"Item",style:{backgroundImage:"url("+t+")"}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"rating"},e.vote_average," / 10"),r.a.createElement("div",{className:"plot"},e.overview)))):r.a.createElement("div",{key:e.id})})),r.a.createElement("div",{className:"Search-bar"},r.a.createElement("div",{className:"Search"},r.a.createElement("i",{className:"material-icons"},"search"),r.a.createElement(E.a,{name:"searchText",underlinestyle:{display:"none"},value:this.state.searchText,onChange:this.onTextChange,hintstyle:{textAlign:"center",width:"100%"},hinttext:"Search for movies",placeholder:"Search Movies Here",inputstyle:{textAlign:"center",backgroundColor:"white"},autoComplete:"section-name"})),r.a.createElement("div",{ref:"titlecategory",className:"TitleList search-items ","data-loaded":!0},r.a.createElement("div",{className:"titles-wrapper"},e)))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:e.userInSession},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"UserProfile"},r.a.createElement("div",{className:"User"},r.a.createElement("div",{className:"name"},this.state.loggedInUser.username.charAt(0).toUpperCase()+this.state.loggedInUser.username.substring(1)),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.state.loggedInUser.imgPath,alt:"profile"}))))}}]),t}(n.Component),F=function(){return r.a.createElement("nav",{className:"Subnavbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(T.a,{to:"/friends"},"Friends")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/recommendations"},"Recommendations"))),r.a.createElement("hr",null))},W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.props.userInSession?r.a.createElement("div",null,r.a.createElement("nav",{className:"Navigation"},r.a.createElement(P,null),r.a.createElement(A,null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(T.a,{to:"/random"},"Random")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/profile"},"My Profile")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/popular"},"Popular List")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/",onClick:this.handleLogout},"Logout"))),r.a.createElement(B,{userInSession:this.state.loggedInUser})),r.a.createElement("div",{className:"SubNavigation"},r.a.createElement(F,null))):r.a.createElement("div",null,r.a.createElement("nav",{className:"Navigation"},r.a.createElement(P,null),r.a.createElement(A,null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(T.a,{to:"/random"},"Random")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/popular"},"Popular List")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/login"},"Login")))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getRandomMovie=function(){var e=Math.floor(400*Math.random())+100;v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=3d561f8d0b8aac21ad2ca16cb83e0825&.scssage=es")).then(function(e){var t=e.data;a.setState(t)}).catch(function(e){})},a.getMovieByGenre=function(e){v.a.get("https://api.themoviedb.org/3/discover/movie?api_key=3d561f8d0b8aac21ad2ca16cb83e0825&language=es&with_genres=".concat(e,"&page=").concat(a.state.pageNum)).then(function(e){2===a.state.countButton&&a.setState({pageNum:a.state.pageNum+1});var t=Math.floor(21*Math.random()),n=e.data.results[t];a.setState(n)}).catch(function(e){console.log(e)})},a.getMovieByYear=function(e){v.a.get("https://api.themoviedb.org/3/discover/movie?api_key=3d561f8d0b8aac21ad2ca16cb83e0825&primary_release_year=".concat(e)).then(function(t){if(void 0!==t){var n=Math.floor(21*Math.random()),r=t.data.results[n];a.setState(r)}else a.getMovieByYear(e)}).catch(function(e){console.log(e)})},a.state={pageNum:1,countButton:0},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"componentWillMount",value:function(){this.getRandomMovie()}},{key:"render",value:function(){var e=this,t="";return void 0!==this.state.title&&void 0!==this.state.poster_path?(t=this.state.poster_path,r.a.createElement("div",{className:"Random"},r.a.createElement("div",{className:"Item Random-pic",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w400/"+t+")"}},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"name"},this.state.title),r.a.createElement("div",{className:"random-descript"},this.state.overview)))),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{className:"button",onClick:this.getRandomMovie},"Another Random Movie"),r.a.createElement("button",{className:"button second",onClick:function(){return e.getMovieByGenre(28)}},"Action Movies"),r.a.createElement("button",{className:"button third",onClick:function(){return e.getMovieByGenre(18)}},"Drama Movies"),r.a.createElement("button",{className:"button fourth",onClick:function(){return e.getMovieByGenre(35)}},"Comedy Movies"),r.a.createElement("button",{className:"button fifth",onClick:function(){return e.getMovieByGenre(16)}},"Animation Movies"),r.a.createElement("button",{className:"button sixth",onClick:function(){return e.getMovieByYear(2018)}},"Movie of 2018"),r.a.createElement("button",{className:"button seventh",onClick:function(){return e.getMovieByYear(2017)}},"Movie of 2017"),r.a.createElement("button",{className:"button eigth",onClick:function(){return e.getMovieByYear(2016)}},"Movie of 2016"),r.a.createElement("button",{className:"button nine",onClick:function(){return e.getMovieByYear(2015)}},"Movie of 2015")))):(this.getRandomMovie(),r.a.createElement("p",null))}}]),t}(n.Component),Y=a(49),H=a.n(Y),q=a(42),J=a.n(q),K=a(109),V=a.n(K),z=a(113),Q=a.n(z),X=a(111),Z=a.n(X),$=a(112),ee=a.n($),te=a(110),ae=a.n(te),ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(){a.setState({open:!1})},a.state={activeStep:0,open:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{open:e.open}))}},{key:"render",value:function(){var e=this;return r.a.createElement(H.a,{square:!0,elevation:0},r.a.createElement(J.a,null,r.a.createElement(V.a,{open:this.state.open,onClose:function(){return e.handleClose()},scroll:this.state.scroll,"aria-labelledby":"scroll-dialog-title1",className:"card"},r.a.createElement(ae.a,{style:{textAlign:"center"},id:"scroll-dialog-title1"},r.a.createElement("h1",null,this.props.name)),r.a.createElement(Z.a,null,r.a.createElement("img",{className:"model-img",src:this.props.backdrop,alt:""}),r.a.createElement("p",{className:"dialog-score"},"Rating: ",this.props.score,"/10"),r.a.createElement("p",{className:"dialog-score see"},"Watch on:"),r.a.createElement("a",{href:"https://www.netflix.com",target:"_blank"},r.a.createElement("img",{className:"netflix",src:"https://mbtskoudsalg.com/images/netflix-envelope-png-6.png",alt:"netflix logo"})),r.a.createElement("a",{href:"https://es.hboespana.com/",target:"_blank"},r.a.createElement("img",{className:"hbo",src:"https://png2.kisspng.com/show/1b8527e4c5acccfd37746949c19cdeb9/L0KzQYm3VsMxN5ZAipH0aYP2gLBuTfxwb5CygNR4LX7yh37vgv8udJDsh58AYkO7QrToVcI4bmVqT5CBOUK3Roq4VME2O2E5SKo6MEG0RoSATwBvbz==/kisspng-logo-hbo-now-hbo-logo-5b382ca527f4e7.6924691415304081011637.png",alt:"hbo logo"})),r.a.createElement(ee.a,null,this.props.overview)),r.a.createElement(Q.a,null,r.a.createElement(O.a,{onClick:function(){return e.handleClose()},color:"primary"},"Close")))))}}]),t}(n.Component),re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleLike=function(e){void 0!==a.state.loggedUser?a.service.genre(a.state.loggedUser,"action").then(function(e){a.setState({loggedUser:Object(G.a)({},a.state.loggedUser,{favGenres:Object(G.a)({},a.state.loggedUser.favGenres,{action:e.user.favGenres.action})})})}):(a.setRedirect(),a.renderRedirect(),console.log("Not logged user"))},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(R.a,{to:"/"})},a.handleClickOpen=function(){a.setState({open:!0}),a.setState({close:!1})},a.getMaxGenres=function(e){return Object.keys(e).filter(function(t){return e[t]===Math.max.apply(null,Object.values(e))})},a.state={open:!1,close:!0,redirect:!1,loggedUser:a.props.userInSession},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{loggedUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Item",style:{backgroundImage:"url("+this.props.backdrop+")"}},r.a.createElement("div",{className:"model"},r.a.createElement(ne,Object(h.a)({open:this.state.open,close:this.state.close,title:this.props.name,score:this.props.score,overview:this.props.overview,backdrop:this.props.backdrop,name:this.props.title},"score",this.props.score))),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"title"},this.props.title),r.a.createElement("div",{className:"favorite"},r.a.createElement("i",{className:"material-icons",onClick:function(){return e.handleLike(e.props.all)}},"favorite")),r.a.createElement("div",{className:"rating"},this.props.score," / 10"),r.a.createElement("div",{className:"plot"},this.props.overview),r.a.createElement("div",{className:"search-icon"},r.a.createElement("i",{className:"material-icons",onClick:function(){return e.handleClickOpen()}},"search"))))}}]),t}(n.Component),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={genres:null,data:[],mounted:!1,imageNum:0,imageIndex:5},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadContent",value:function(){var e=this,t="https://api.themoviedb.org/3/"+this.props.url+"&api_key=166624c030b91c943c397020f20525b4";fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({data:t})}).catch(function(e){console.log("There has been error")})}},{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{genres:e.userInSession})),e.url!==this.props.url&&""!==e.url&&this.setState({url:e.url,mounted:!0},function(){this.loadContent()})}},{key:"componentDidMount",value:function(){""!==this.props.url&&(this.loadContent(),this.setState({mounted:!0}))}},{key:"nextMovie",value:function(){15===this.state.imageNum?this.setState({imageNum:0,imageIndex:0}):this.setState({imageNum:this.state.imageNum+1,imageIndex:this.state.imageIndex+1})}},{key:"previousMovie",value:function(){0===this.state.imageNum?this.setState({imageNum:0}):this.setState({imageNum:this.state.imageNum-1,imageIndex:this.state.imageIndex-1})}},{key:"render",value:function(){var e=this,t="",a=this.state.imageNum,n=this.state.imageIndex;return this.state.data.results&&(t=this.state.data.results.map(function(t,s){if(s<a)return"";if(s<n){var o="",i="http://image.tmdb.org/t/p/original"+t.backdrop_path;return o=t.name?t.name:t.original_title,r.a.createElement(re,{userInSession:e.props.userInSession,key:t.id,title:o,all:t,score:t.vote_average,overview:t.overview,backdrop:i})}return r.a.createElement("div",{key:t.id})})),r.a.createElement("div",{ref:"titlecategory",className:"TitleList","data-loaded":this.state.mounted},r.a.createElement("div",{className:"Title"},r.a.createElement("h1",null,this.props.title),r.a.createElement("div",{className:"titles-wrapper"},t,r.a.createElement("div",{className:"arrow-left"},r.a.createElement("i",{className:"left",onClick:function(){return e.previousMovie()}})),r.a.createElement("div",{className:"arrow-right"},r.a.createElement("i",{className:"right",onClick:function(){return e.nextMovie()}})))))}}]),t}(n.Component),oe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){e.retrieveAllMovies(e.state.num)},e.retrieveAllMovies=function(t){v.a.get("https://api.themoviedb.org/3/movie/popular?api_key=3d561f8d0b8aac21ad2ca16cb83e0825&language=es").then(function(t){e.setState({listMovies:t.data.results})})},e.state={listMovies:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(se,{title:"Trending Movies",url:"discover/movie?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Movies for Kids",url:"discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"}),r.a.createElement(se,{title:"Sci-Fi Movies",url:"genre/878/movies?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Comedy Movies",url:"genre/35/movies?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Drama Movies",url:"genre/18/movies?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Horror Movies",url:"genre/27/movies?sort_by=popularity.desc&page=1"}))}}]),t}(r.a.Component),ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:e.userInSession},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement(se,{title:"This are your last seen movies",url:"genre/35/movies?sort_by=popularity.desc&page=1"})," */}"))}}]),t}(n.Component),le=a(114),ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getMaxGenres=function(e){return Object.keys(e).filter(function(t){return e[t]===Math.max.apply(null,Object.values(e))})},a.state={friendsList:a.props.userInSession},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{friendsList:e.userInSession}))}},{key:"render",value:function(){var e,t=this,a=this.state.friendsList.map(function(a){return void 0!==a.friendsList?a.friendsList.map(function(a){return e=t.getMaxGenres(a.amigo.favGenres),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"FriendList"},r.a.createElement("div",null,r.a.createElement("p",{className:"friend-name"},a.amigo.amigo.charAt(0).toUpperCase()+a.amigo.amigo.substring(1),":"),r.a.createElement("img",{className:"User-Image",style:{width:40,height:40},src:a.amigo.imgPath,alt:""}))),r.a.createElement("div",null,r.a.createElement("p",{className:"FriendsGenre"},e.map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)+","}))),r.a.createElement("br",null)))}):r.a.createElement("p",null)});return r.a.createElement("div",null,a)}}]),t}(n.Component),ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleFriendButton=function(e){e.preventDefault();var t=a.state.friendName;a.service.friends(t,a.props.userInSession,a.state.friendsList.amigo.favGenres,a.state.friendsList.amigo.imgPath).then(function(e){console.log("pasa",e.user),a.setState(Object(G.a)({},a.state,{friendName:t},a.state.friendsList,{friendsList:e.user.friendsList,friends:[e.user]})),a.props.getUser(e)}).catch(function(e){console.log(e),a.setState({error:!0})})},a.onTextChange=function(e){var t=e.target.value;a.setState(Object(h.a)({},e.target.name,t),function(){(a.state.friendName.length>2||""===t)&&(a.setState({userList:[],userGenres:{}}),a.service.friendsGet(t,a.props.userInSession).then(function(e){void 0!==e.friend&&a.setState(Object(G.a)({},a.state,{userList:Object(le.a)(a.state.userList).concat([e.friend.username]),userGenres:e.friend.favGenres,friendName:t},a.state.friendsList,{friendsList:{amigo:{amigo:e.friend.username,favGenres:e.friend.favGenres,imgPath:e.friend.imgPath}}}))}))})},a.getMaxGenres=function(e){if(e)return Object.keys(e).filter(function(t){return e[t]===Math.max.apply(null,Object.values(e))})},a.state={friends:[e.userInSession],friendName:"",userList:[],userGenres:{},friendsList:{amigo:{amigo:"",favGenres:"",imgPath:""}},loggedInUser:e.userInSession},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e,t=this;return this.state.friends.map(function(a){var n=t.getMaxGenres(t.state.userGenres);e=n.map(function(e){return r.a.createElement("span",{className:"span-genres-search"},e.charAt(0).toUpperCase()+e.substring(1),",")})}),this.state.friends.length>0?r.a.createElement("div",null,r.a.createElement(k.a,{component:"fieldset"},r.a.createElement(N.a,{component:"legend"}),r.a.createElement("div",{className:"FriendSearch"},r.a.createElement(E.a,{placeholder:"Search User Here",inputstyle:{textAlign:"center",backgroundColor:"white"},name:"friendName",value:this.state.friendName,onChange:this.onTextChange})),r.a.createElement("div",{className:"Add-Button"},r.a.createElement(O.a,{style:{backgroundColor:"white"},onClick:this.handleFriendButton,primary:!0},"ADD"))),r.a.createElement("div",{className:"Search-Result"},r.a.createElement("h4",null,"SEARCH RESULTS"),this.state.userList.map(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{fontSize:50,color:"lightblue"}},t.charAt(0).toUpperCase()+t.substring(1),":"),r.a.createElement("span",{className:"genre-title-search"}," Fav Genre: ")," ",e)})),r.a.createElement(ce,{userInSession:this.state.friends}),r.a.createElement(se,{userInSession:this.state.loggedInUser,title:"Recommended Picks for you and your friends",url:"discover/tv?sort_by=popularity.desc&page=1"})):r.a.createElement("p",null)}}]),t}(n.Component),me=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:e.userInSession},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(G.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(se,{userInSession:this.state.loggedInUser,title:"Top Picks for you",url:"discover/tv?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Trending now",url:"discover/movie?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Horror Movies",url:"genre/27/movies?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Sci-Fi Movies",url:"genre/878/movies?sort_by=popularity.desc&page=1"}),r.a.createElement(se,{title:"Comedy Movies",url:"genre/35/movies?sort_by=popularity.desc&page=1"})))}}]),t}(n.Component),de=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new f,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("header",null,r.a.createElement(W,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:oe}),r.a.createElement(p.a,{exact:!0,path:"/popular",component:oe}),r.a.createElement(p.a,{exact:!0,path:"/profile",component:function(){return r.a.createElement(ie,{userInSession:e.state.loggedInUser})}}),r.a.createElement(p.a,{exact:!0,path:"/friends",component:function(){return r.a.createElement(ue,{userInSession:e.state.loggedInUser})}}),r.a.createElement(p.a,{exact:!0,path:"/recommendations",component:me}),r.a.createElement(p.a,{exact:!0,path:"/random",component:D}))):r.a.createElement("header",null,r.a.createElement(W,null),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:oe}),r.a.createElement(p.a,{exact:!0,path:"/random",component:D}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(L,{getUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(_,{getUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/popular",component:oe})))}}]),t}(n.Component),pe=a(294);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pe.a,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[115,2,1]]]);
//# sourceMappingURL=main.1f2164cb.chunk.js.map