(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),o=a.n(s),c=a(15),l=a.n(c),i=a(17),m=a(8),u=a(9),d=a(11),p=a(10),h=(a(38),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbo"},r.a.createElement("img",{src:"https://1aike31wshtt3k0e9u2nxtwz-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/sophie-leng-still-life.jpg",style:{width:"100%",paddingTop:"47px"},alt:"Jumbotron"}),r.a.createElement("h1",null,"PRODUCTS")))}),g=(a(39),a(14)),f=function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:"navbar"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/",className:"active navLink"},"Products")),r.a.createElement("li",{ref:t,onClick:function(){a.current.style.display="none",window.localStorage.removeItem("jwt_token"),window.localStorage.removeItem("refresh_token"),window.location.hash="/login"}},r.a.createElement(g.b,{to:"/login",className:"navLink"},e.isLoggedIn?"LogOut":"LogIn")),r.a.createElement("li",{className:"cartIcon",onClick:e.swapModal},r.a.createElement("span",{className:"username",ref:a},e.username),r.a.createElement("span",{className:"badge"},e.productAmount),r.a.createElement("i",{className:"fas fa-shopping-cart"}))))},b=(a(45),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onInputChange=function(e){n.setState({amount:e.target.value})},n.onFormSubmit=function(e){e.preventDefault();var t={title:n.props.title,price:n.props.price,amount:parseInt(n.state.amount),createdAt:(new Date).getTime()};n.props.addItem(t),n.setState({amount:""})},n.state={amount:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{src:this.props.image,style:{width:"100%"},alt:this.props.title})),r.a.createElement("div",{className:"productContent"},r.a.createElement("h2",null,this.props.title),r.a.createElement("h3",null," NT$",this.props.price)),r.a.createElement("form",{className:"productForm",onSubmit:this.onFormSubmit},r.a.createElement("input",{className:"productInput",type:"number",min:"1",max:"10",value:this.state.amount,onChange:this.onInputChange,required:!0}),r.a.createElement("button",{className:"addBtn",style:{display:"block"},onClick:this.onSubmit},"BUY")))}}]),a}(r.a.Component)),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).products=[{id:"1",title:"Apple",price:10,img:"https://i.pinimg.com/564x/60/4a/82/604a82768a91dab6d684b34009f955d7.jpg",tags:["\u6c34\u679c"],isAvailable:!0},{id:"2",title:"Plate",price:60,img:"https://i.pinimg.com/564x/38/d9/40/38d940442ab1d63b8ec2fb4f02252ef6.jpg",tags:["\u751f\u6d3b\u7528\u54c1"],isAvailable:!0},{id:"3",title:"Pen",price:180,img:"https://i.pinimg.com/474x/ea/d0/48/ead0488575060ad4bc476749ff2ab372.jpg",tags:["\u6587\u5177"],isAvailable:!0},{id:"4",title:"Umbrella",price:220,img:"https://i.pinimg.com/564x/60/87/c9/6087c9413bf3b09b8d288db970ca3b14.jpg",tags:["\u751f\u6d3b\u7528\u54c1"],isAvailable:!0},{id:"5",title:"Pillow",price:360,img:"https://i.pinimg.com/564x/73/53/c3/7353c3e8f8fea87e016b5ebcd3b88b54.jpg",tags:["\u751f\u6d3b\u7528\u54c1"],isAvailable:!0},{id:"6",title:"Mirror",price:360,img:"https://i.pinimg.com/564x/90/85/fc/9085fc877a692f873f98025ed4c2599f.jpg",tags:["\u751f\u6d3b\u7528\u54c1"],isAvailable:!0},{id:"7",title:"T-shirt",price:400,img:"https://i.pinimg.com/564x/bc/9c/1e/bc9c1e0b42b1dde05b65c20ab2ae30da.jpg",tags:["\u8863\u670d"],isAvailable:!0},{id:"8",title:"Bag",price:450,img:"https://i.pinimg.com/564x/d0/9e/f0/d09ef03e2f7f782b09dfcc0f044b1228.jpg",tags:["\u751f\u6d3b\u7528\u54c1"],isAvailable:!0},{id:"9",title:"Body Lotion",price:520,img:"https://i.pinimg.com/564x/80/e6/73/80e67398cf1293395de3038a789a4a1e.jpg",tags:["\u85e5\u599d"],isAvailable:!0}],n.productlist=n.products.map((function(e){return r.a.createElement(b,{key:e.id,title:e.title,price:e.price,image:e.img,addItem:n.props.addItem})})),n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"product-list",style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},this.productlist)}}]),a}(r.a.Component),w=(a(46),a(7)),v=a.n(w),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getPost=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({methods:"get",url:"https://jsonplaceholder.typicode.com/users"});case 2:case"end":return e.stop()}}),e)}))),e.refreshJWT_backend=function(){var t=new FormData;t.append("refresh",window.localStorage.getItem("refresh_token")),v()({method:"post",url:"https://djangorest-277405.uc.r.appspot.com/auth/jwt/refresh/",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){window.localStorage.setItem("jwt_token",e.data.access)})).catch((function(t){e.setState({isLoggedIn:!1})}))},e.loadEntrys_backend=function(){v()({method:"get",url:"https://djangorest-277405.uc.r.appspot.com/auth/users/me/",headers:{Authorization:"Bearer "+window.localStorage.getItem("jwt_token")}}).then((function(t){e.setState({selectedProducts:t.data.cart.entrys.map((function(e){return{title:e.product.name,price:e.product.cost,amount:e.quantity,id:e.id}})),username:t.data.username,total:t.data.cart.total,count:t.data.cart.count})})).catch((function(t){alert("\u8acb\u767b\u5165"),window.location.hash="/login",e.setState({isLoggedIn:!1})}))},e.addItem=function(t){if(console.log(t),t.amount>0){for(var a=e.state.selectedProducts,n=!0,r=0;r<a.length;r++)if(a[r].title===t.title){a[r].amount+=t.amount,n=!1,e.updateEntry(a[r]),e.setState({selectedProducts:a,count:e.state.count+t.amount}),e.checkOut(a);break}n&&e.addEntry_backend(t,a)}},e.addEntry_backend=function(t,a){var n=new FormData;n.append("productname",t.title),n.append("productcost",t.price),n.append("quantity",t.amount),v()({method:"post",data:n,url:"https://djangorest-277405.uc.r.appspot.com/api/entrys/",headers:{Authorization:"Bearer "+window.localStorage.getItem("jwt_token")}}).then((function(n){t.id=n.data.id,a.push(t),e.setState({selectedProducts:a,count:e.state.count+t.amount}),e.checkOut(a)})).catch((function(e){console.log(e)}))},e.updateEntry=function(e){var t=new FormData,a=e.id;t.append("quantity",e.amount),v()({method:"put",data:t,url:"https://djangorest-277405.uc.r.appspot.com/api/entrys/".concat(a,"/"),headers:{Authorization:"Bearer "+window.localStorage.getItem("jwt_token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response.data)}))},e.deleteProduct=function(t){return function(){var a=e.state.selectedProducts;e.deleteEntry_backend(a[t].id);var n=a[t].amount;a.splice(t,1),e.setState({selectedProducts:a,count:e.state.count-n}),e.checkOut(a)}},e.deleteEntry_backend=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"delete",url:"https://djangorest-277405.uc.r.appspot.com/api/entrys/"+t+"/",headers:{Authorization:"Bearer "+window.localStorage.getItem("jwt_token")}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.checkOut=function(t){var a=t.reduce((function(e,t){return t.price*t.amount+e}),0);e.setState({total:a})},e.closeModal=function(){e.setState({show:"none"})},e.swapModal=function(){e.setState({show:"block"===e.state.show?"none":"block"})},e.refreshJWT_backend(),e.state={data:[1,2,3,4,5,6],selectedProducts:[],total:0,count:0,show:"none",username:"",isLoggedIn:!0},e.loadEntrys_backend(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{productAmount:this.state.count,swapModal:this.swapModal,username:this.state.username,isLoggedIn:this.state.isLoggedIn}),r.a.createElement(h,null),r.a.createElement("div",null,this.state.data.map((function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,e))}))),r.a.createElement(E,{addItem:this.addItem}),r.a.createElement("div",{className:"modal",style:{display:this.state.show}},r.a.createElement("span",{className:"closebtn",onClick:this.closeModal},"\xd7"),r.a.createElement("table",{className:"shoppingCart"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{onClick:this.getPost},"\u5546\u54c1"),r.a.createElement("td",null,"\u6578\u91cf"),r.a.createElement("td",null,"\u50f9\u9322"))),r.a.createElement("tbody",{id:"i"},this.state.selectedProducts.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("span",{className:"deleteBtn",onClick:e.deleteProduct(a)},r.a.createElement("i",{className:"fas fa-minus"})),t.title),r.a.createElement("td",null,t.amount),r.a.createElement("td",null,t.price))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},"\u7e3d\u8a08"),r.a.createElement("td",null,"NTD ",this.state.total)))),r.a.createElement("button",{className:"close",onClick:this.closeModal},"Close")))}}]),a}(r.a.Component),y=a(1),j=(a(64),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).loginController=function(){e.loginFormRef.current.classList.replace("closeForm","showForm"),e.loginTbRef.current.classList.add("tbActive"),e.registerFormRef.current.classList.replace("showForm","closeForm"),e.registerTbRef.current.classList.remove("tbActive")},e.RegisterController=function(){e.registerFormRef.current.classList.replace("closeForm","showForm"),e.registerTbRef.current.classList.add("tbActive"),e.loginFormRef.current.classList.replace("showForm","closeForm"),e.loginTbRef.current.classList.remove("tbActive")},e.onLoginFormSubmit=function(t){t.preventDefault();var a=e.state.username,n=e.state.password,r=new FormData;r.append("username",a),r.append("password",n),v()({method:"post",url:"https://djangorest-277405.uc.r.appspot.com/auth/jwt/create/",data:r,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){alert("Hello ".concat(a)),window.localStorage.setItem("jwt_token",e.data.access),window.localStorage.setItem("refresh_token",e.data.refresh),window.location.hash="/"})).catch((function(t){alert(t),e.errRef.current.innerText="\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4\uff0c\u9084\u662f\u5c1a\u672a\u8a3b\u518a\u5462?"}))},e.onRegisterFormSubmit=function(t){t.preventDefault();var a=e.state.usernameR,n=e.state.passwordR,r=e.state.email,s=new FormData;s.append("username",a),s.append("email",r),s.append("password",n),v()({method:"post",url:"https://djangorest-277405.uc.r.appspot.com/auth/users/",data:s,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){alert("\u8a3b\u518a\u6210\u529f"),window.location.hash="/login"})).catch((function(e){"A user with that username already exists."===e.response.data.username[0]?alert(e.response.data.username[0]):alert(e.response)}))},e.key="productInMyCart",e.errRef=r.a.createRef(),e.loginTbRef=r.a.createRef(),e.registerTbRef=r.a.createRef(),e.registerFormRef=r.a.createRef(),e.loginFormRef=r.a.createRef(),e.state={username:"",password:"",usernameR:"",passwordR:"",email:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginPage"},r.a.createElement(f,{productAmount:0,username:this.state.username}),r.a.createElement("div",{className:"formContainer"},r.a.createElement("div",{className:"tab"},r.a.createElement("button",{className:"tabLink tbActive",onClick:this.loginController,ref:this.loginTbRef},"\u6703\u54e1\u767b\u5165"),r.a.createElement("button",{className:"tabLink",ref:this.registerTbRef,onClick:this.RegisterController},"\u6703\u54e1\u8a3b\u518a")),r.a.createElement("div",{className:"form showForm",key:1,ref:this.loginFormRef},r.a.createElement("form",{className:"loginForm",onSubmit:this.onLoginFormSubmit},r.a.createElement("h1",{className:"loginTitle"},"\u6703\u54e1\u767b\u5165"),r.a.createElement("div",{className:"errText",ref:this.errRef}),r.a.createElement("label",{htmlFor:"username"},"\u6703\u54e1\u540d\u7a31"),r.a.createElement("input",{className:"loginInput",type:"username",id:"username",maxLength:"10",placeholder:"\u8f38\u5165\u540d\u7a31",onChange:function(t){e.setState({username:t.target.value})},value:this.state.username,required:!0}),r.a.createElement("label",{htmlFor:"password"},"\u5bc6\u78bc"),r.a.createElement("input",{className:"loginInput",id:"password",type:"password",minLength:"6",placeholder:"\u8f38\u5165\u5bc6\u78bc",onChange:function(t){e.setState({password:t.target.value})},value:this.state.password,required:!0}),r.a.createElement("p",null,"\u8a66\u7528\u5e33\u865f\u5bc6\u78bc",r.a.createElement("br",null),"\u6703\u54e1\u540d\u7a31 : guest1",r.a.createElement("br",null),"\u5bc6\u78bc : password2guest1"),r.a.createElement("button",{className:"submitBtn"},"\u78ba\u8a8d"))),r.a.createElement("div",{className:"form closeForm",ref:this.registerFormRef,key:2},r.a.createElement("form",{className:"registerForm",onSubmit:this.onRegisterFormSubmit},r.a.createElement("h1",{className:"registerTitle"},"\u6703\u54e1\u8a3b\u518a"),r.a.createElement("label",{htmlFor:"username"},"\u6703\u54e1\u540d\u7a31"),r.a.createElement("input",{className:"registerInput",type:"username",id:"usernameR",maxLength:"10",placeholder:"\u8f38\u5165\u540d\u7a31",value:this.state.usernameR,onChange:function(t){e.setState({usernameR:t.target.value})},required:!0}),r.a.createElement("label",{htmlFor:"emailForRegister"},"Email"),r.a.createElement("input",{className:"registerInput",type:"email",id:"emailForRegister",placeholder:"\u8f38\u5165Email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})},required:!0}),r.a.createElement("label",{htmlFor:"passwordForRegister"},"\u5bc6\u78bc"),r.a.createElement("input",{className:"registerInput",type:"password",id:"passwordForRegister",placeholder:"\u8f38\u5165\u5bc6\u78bc",minLength:"0",value:this.state.passwordR,onChange:function(t){e.setState({passwordR:t.target.value})},required:!0}),r.a.createElement("button",{className:"submitBtn"},"\u78ba\u8a8d")))))}}]),a}(r.a.Component));o.a.render(r.a.createElement(g.a,{basename:"/"},r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:k}),r.a.createElement(y.a,{path:"/login",component:j}))),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b8e38bce.chunk.js.map