(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"TextForm")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},e.about))),l.a.createElement("div",null),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.handleBg,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function m(e){var t=Object(n.useState)("Enter the text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"mb-3"},l.a.createElement("h1",{className:" mt-3 mb-3"},e.heading),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return c(r.toUpperCase())}}," Convert to UpperCase "),l.a.createElement("button",{className:"btn btn-success mx-3",onClick:function(){c(r.toLowerCase())}}," Convert to LowerCase "),l.a.createElement("button",{className:"btn btn-warning ",onClick:function(){var t=document.getElementById("myBox");navigator.clipboard.writeText(t.value),e.showAlert("The text is copied successfully!","success")}},"copy text"),l.a.createElement("button",{className:"btn btn-secondary mx-3",onClick:function(){var e=r.split(/[ ] + /);c(e.join(" "))}},"Remove Extra Spaces"),l.a.createElement("button",{className:"btn btn-danger ",onClick:function(){return c("")}}," Clear Text ")),l.a.createElement("div",{className:"container mt-3"},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("h5",null,r.split(" ").length," Word and ",r.length," characters"),l.a.createElement("h6",null,.008*r.split(" ").length," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r)))}s.defaultProps={title:"set title here",about:"set about here"};var i=function(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.mess))))};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],E=function(e,t){b({mess:e,type:t}),setTimeout(function(){b(null)},1200)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"SdBlog",handleBg:function(){"dark"===a?(r("light"),document.body.style.backgroundColor="white",document.body.style.color="black",E("light mode is enable","danger")):(r("dark"),document.body.style.backgroundColor="#02101b",document.body.style.color="white",E("Dark Mode is Enable","primary"))},mode:a,about:"AboutUs"}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{heading:"Enter any text to search",showAlert:E})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.67dae3a3.chunk.js.map