(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{116:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c={borderBottom:"var(--border)",color:"var(--bright-green)",margin:"1rem auto",paddingBottom:"0.5rem",width:"92%"};a.a=function(e){return r.a.createElement("h3",{className:"Heading",style:c},e.text)}},117:function(e,a,t){"use strict";t.d(a,"a",function(){return m});var n=t(15),r=t(16),c=t(18),s=t(17),i=t(19),l=t(1),u=t.n(l),o=t(4),m=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).isExternalLink=function(e){return e.includes("https://")},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e,a=this.props,t=a.href,n=a.classname,r=a.linkText;return t&&(e=this.isExternalLink(t)),u.a.createElement("div",{className:"LinkButton"},e?u.a.createElement("a",{href:t,className:n,target:"_blank",rel:"noopener noreferrer",style:d},r):u.a.createElement(o.b,{to:t||"#",className:n,style:d},r))}}]),a}(l.Component),d={width:"100%",height:"100%",display:"inline-block",padding:"1.25rem 0rem",cursor:"pointer",fontSize:"18px",textTransform:"uppercase",textDecoration:"none",textAlign:"center"}},121:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(9);t(122);a.a=function(e){return r.a.createElement("div",{className:"MainImage",style:{borderRadius:e.roundImage?"50%":"10%",backgroundImage:e.mainImage&&"url(".concat(e.mainImage,")"),backgroundColor:e.BGimage?"":"var(--white)",display:e.mainImage?"block":"flex",alignContent:"center",justifyContent:"center"}},!e.mainImage&&r.a.createElement(c.a,{classname:"fas fa-camera"}))}},122:function(e,a,t){},124:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(121),s=(t(125),function(e){var a=e.BGimage,t=e.heading,n=e.mainImage,s=e.roundImage;return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"hero-image",style:{backgroundImage:a&&"url(".concat(a,")"),backgroundColor:a?"":"var(--black-10)"}},r.a.createElement("h2",null,t&&t)),r.a.createElement(c.a,{mainImage:n&&n,roundImage:s}))});s.defaultProps={heading:"",roundImage:!0},a.a=s},125:function(e,a,t){},127:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(4),s=t(11),i=t(10),l=(t(128),function(e){var a,t=e.cause,n=e.raised,l=e.isFeatured,u=e.causeSelected,o=e.inViewport,m=e.innerRef,d=o?t.mainImage:i.a.getLazyImagePlaceholder();return r.a.createElement("div",{className:l?"CauseTile featured":"CauseTile",onClick:function(){return u(t)},ref:m},r.a.createElement(c.b,{to:"/cause/".concat(t.id)},r.a.createElement("div",{className:"wrapper",style:{backgroundImage:"url(".concat(d,")")}},r.a.createElement("div",{className:"progress",style:{width:"".concat((a=n/t.amount*100,a>5?a-5:1).toFixed(2),"%")}}),r.a.createElement("h5",null,"$",n||0," of $",t.amount)),r.a.createElement("h4",null,l&&r.a.createElement("img",{src:s.a.getIconURL(t.icon),alt:t.icon}),r.a.createElement("p",null,t.name))))});l.defaultProps={cause:{},raised:0,isFeatured:!1,inViewport:!1},a.a=l},128:function(e,a,t){},130:function(e,a,t){"use strict";var n=t(1),r=t.n(n);t(131);a.a=function(e){return r.a.createElement("div",{className:"Slider"},e.children)}},131:function(e,a,t){},151:function(e,a,t){},153:function(e,a,t){},155:function(e,a,t){},161:function(e,a,t){},215:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t(16),c=t(18),s=t(17),i=t(19),l=t(1),u=t.n(l),o=t(20),m=t(5),d=t(11),p=(t(151),t(124)),f=t(9),g=(t(153),function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.address,n=e.phone;return u.a.createElement("div",{className:"profile-details UserDetails"},u.a.createElement("div",{className:"photo-upload"},u.a.createElement(f.a,{classname:"far fa-image"}),u.a.createElement("div",null,u.a.createElement(f.a,{classname:"fas fa-plus"}),u.a.createElement("p",null,"Profile"))),u.a.createElement("div",{className:"user-details"},u.a.createElement("p",null,u.a.createElement("span",null,"Name: "),a),u.a.createElement("p",null,u.a.createElement("span",null,"Address: "),u.a.createElement("br",null),t.street,",",u.a.createElement("br",null),t.city,", ",t.state," ",t.zipcode),u.a.createElement("p",null,u.a.createElement("span",null,"Phone: "),n),u.a.createElement("div",{className:"edit-button"},u.a.createElement(f.a,{classname:"fas fa-plus"})," ",u.a.createElement("p",null,"edit profile"))))}}]),a}(l.Component)),E=t(127),h=t(130),b=t(116),v=(t(155),t(136)),j=Object(v.a)(E.a),O=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props.causes.map(function(a){return u.a.createElement(j,{key:a.id,raised:36,cause:a,causeSelected:e.props.causeSelected})});return u.a.createElement("div",{className:"UserCauses"},u.a.createElement(b.a,{text:"Your Causes"}),u.a.createElement(h.a,null,a))}}]),a}(l.Component),I=(t(161),function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"Receipts"},u.a.createElement(b.a,{text:"Donations & Receipts"}),u.a.createElement("div",{className:"slider"},u.a.createElement("div",{className:"receipt"},u.a.createElement("p",null,"$18")),u.a.createElement("div",{className:"receipt"},u.a.createElement("p",null,"$143")),u.a.createElement("div",{className:"receipt"},u.a.createElement("p",null,"$9"))))}}]),a}(l.Component)),N=t(117),y=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).getFirstName=function(e){var a=e.indexOf(" ");return e.substring(0,a)||e},t.returnAddressInfo=function(e){return{street:e.street,city:e.city,state:e.state,zipcode:e.zicode}},t.state={editProfile:!1},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.user;if(!e){var a=this.props.match.params.id;this.props.getUserData(a)}return console.log(e),u.a.createElement("div",{className:"Dashboard"},e&&u.a.createElement(p.a,{heading:"".concat(this.getFirstName(e.name),"s Dashboard"),BGimage:d.a.getImageURL(e.backgroundImage),mainImage:d.a.getImageURL(e.mainImage),roundImage:e.Preferences.roundImage}),u.a.createElement("div",{className:"Wrapper"},e&&u.a.createElement(g,{name:e.name,phone:e.phone,address:this.returnAddressInfo(e),editProfile:this.state.editProfile}),e&&u.a.createElement(O,{causes:e.Causes,causeSelected:this.props.causeSelected}),u.a.createElement(N.a,{href:"/causes/new",classname:"create-cause",linkText:"Create a cause"}),u.a.createElement(I,null)))}}]),a}(l.Component),k={getUserData:m.r,getCauseList:m.o,causeSelected:m.m};a.default=Object(o.b)(function(e){return{user:e.user}},k)(y)}}]);
//# sourceMappingURL=3.b2646f8b.chunk.js.map