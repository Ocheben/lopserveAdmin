(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{494:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(1),r=a(0),o=a.n(r),i=a(123);function l(e,t){var a=o.a.memo(o.a.forwardRef(function(t,a){return o.a.createElement(i.a,Object(n.a)({ref:a},t),e)}));return a.muiName=i.a.muiName,a}},500:function(e,t,a){e.exports=a.p+"assets/images/d34684bfb78d77525d85dee5ff8c805a.jpg"},501:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(456),i=a(494),l=Object(i.a)(r.a.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"}),"FirstPageOutlined"),c=Object(i.a)(r.a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),s=Object(i.a)(r.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),u=Object(i.a)(r.a.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),d=a(492),m=a(491),p=a(3),f=a(1),b=(a(6),a(4)),h=a(8);var g=n.createContext(),y=n.forwardRef(function(e,t){var a=e.classes,r=e.className,o=e.component,i=void 0===o?"table":o,l=e.padding,c=void 0===l?"default":l,s=e.size,u=void 0===s?"medium":s,d=e.stickyHeader,m=void 0!==d&&d,h=Object(p.a)(e,["classes","className","component","padding","size","stickyHeader"]),y=n.useMemo(function(){return{padding:c,size:u,stickyHeader:m}},[c,u,m]);return n.createElement(g.Provider,{value:y},n.createElement(i,Object(f.a)({role:"table"===i?null:"table",ref:t,className:Object(b.a)(a.root,r,m&&a.stickyHeader)},h)))}),v=Object(h.a)(function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(f.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}},{name:"MuiTable"})(y);var x=n.createContext(),O={variant:"body"},j=n.forwardRef(function(e,t){var a=e.classes,r=e.className,o=e.component,i=void 0===o?"tbody":o,l=Object(p.a)(e,["classes","className","component"]);return n.createElement(x.Provider,{value:O},n.createElement(i,Object(f.a)({className:Object(b.a)(a.root,r),ref:t,role:"tbody"===i?null:"rowgroup"},l)))}),w=Object(h.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(j),E=a(13),k=a(24),N=n.forwardRef(function(e,t){var a,r,o=e.align,i=void 0===o?"inherit":o,l=e.classes,c=e.className,s=e.component,u=e.padding,d=e.scope,m=e.size,h=e.sortDirection,y=e.variant,v=Object(p.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),O=n.useContext(g),j=n.useContext(x),w=j&&"head"===j.variant;s?(r=s,a=w?"columnheader":"cell"):r=w?"th":"td";var k=d;!k&&w&&(k="col");var N=u||(O&&O.padding?O.padding:"default"),S=m||(O&&O.size?O.size:"medium"),C=y||j&&j.variant,z=null;return h&&(z="asc"===h?"ascending":"descending"),n.createElement(r,Object(f.a)({ref:t,className:Object(b.a)(l.root,l[C],c,"inherit"!==i&&l["align".concat(Object(E.a)(i))],"default"!==N&&l["padding".concat(Object(E.a)(N))],"medium"!==S&&l["size".concat(Object(E.a)(S))],"head"===C&&O&&O.stickyHeader&&l.stickyHeader),"aria-sort":z,role:a,scope:k},v))}),S=Object(h.a)(function(e){return{root:Object(f.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(k.e)(Object(k.c)(e.palette.divider,1),.88):Object(k.a)(Object(k.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background["default"]}}},{name:"MuiTableCell"})(N),C={variant:"head"},z=n.forwardRef(function(e,t){var a=e.classes,r=e.className,o=e.component,i=void 0===o?"thead":o,l=Object(p.a)(e,["classes","className","component"]);return n.createElement(x.Provider,{value:C},n.createElement(i,Object(f.a)({className:Object(b.a)(a.root,r),ref:t,role:"thead"===i?null:"rowgroup"},l)))}),T=Object(h.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(z),P=n.forwardRef(function(e,t){var a=e.classes,r=e.className,o=e.component,i=void 0===o?"tr":o,l=e.hover,c=void 0!==l&&l,s=e.selected,u=void 0!==s&&s,d=Object(p.a)(e,["classes","className","component","hover","selected"]),m=n.useContext(x);return n.createElement(i,Object(f.a)({ref:t,className:Object(b.a)(a.root,r,m&&{head:a.head,footer:a.footer}[m.variant],c&&a.hover,u&&a.selected),role:"tr"===i?null:"row"},d))}),A=Object(h.a)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(k.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(P),I=a(75),D=a(102),W=(a(234),a(167));function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=undefined;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l["return"]||l["return"]()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var B=Object(o.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:0},tableHead:{position:"sticky",top:0,background:"#ffffff",fontWeight:"600",fontSize:"17px",color:"#444444"},tableBody:{}}});t.a=function(e){var t=B(),a=e.columns,o=e.tableData,i=e.pageAction,p=e.currentPage,f=e.loading,b=e.submit,h=e.totalPages,g=e.pagination,y=e.minHeight,x=e.height,O=M(Object(n.useState)(p),2),j=O[0],E=O[1];Object(n.useEffect)(function(){E(p)},[p]);var k=a.map(function(e){return e.keyName}),N=o.length&&a.map(function(e){return r.a.createElement(S,{align:"left",key:e.columnName,className:t.tableHead},e.columnName)}),C=[];return o.map(function(e){C.push(a.map(function(t,a){return r.a.createElement(S,{align:"left",key:t.keyName},e[k[a]])}))}),r.a.createElement(I.a,{minHeight:y||0,height:x||"auto",overflow:"auto",flex:!0,justify:0===o.length||f?"flex-end":"space-between"},f&&r.a.createElement(I.a,{height:"100%",bg:"#ffffff88",flex:!0,justify:"center",position:"absolute",style:{zIndex:1100},align:"center"},r.a.createElement(d.a,{style:{color:I.f.primary},size:50})),!f&&0===o.length&&r.a.createElement(I.a,{height:"100%",flex:!0,justify:"center",position:"absolute",style:{zIndex:1100},align:"center"},r.a.createElement(W.d,{height:"100px",color:I.f.primary})),!f&&o.length>0&&r.a.createElement(v,{className:t.table},r.a.createElement(T,null,r.a.createElement(A,null,N)),r.a.createElement(w,{className:t.tableBody,classes:{root:t.tableBody},style:{height:"30vh",overflow:"auto"}},C.length?C.map(function(e){return r.a.createElement(A,{key:e},e)}):r.a.createElement(A,null,"No Result found"))),g&&r.a.createElement(I.a,{height:"4em",align:"center",flex:!0},r.a.createElement(I.a,{flex:!0,horizontal:!0,justify:"flex-end",width:"90%",align:"center"},r.a.createElement(m.a,{onClick:function(){return i(0)},disabled:1===p},r.a.createElement(l,null)),r.a.createElement(m.a,{onClick:function(){return i(p-2)},disabled:1===p},r.a.createElement(c,null)),r.a.createElement(D.a,{type:"text",variant:"outlined",name:"page",width:"3em",value:j,placeHolder:p,onChange:function(e){var t=e.target;return E(t.value)},onKeyDown:function(e){13===e.keyCode&&b(e.target.value-1)}}),r.a.createElement(m.a,{onClick:function(){return i(p===h-1?-1:p)},disabled:p===h},r.a.createElement(s,null)),r.a.createElement(m.a,{onClick:function(){return i(-1)},disabled:p===h},r.a.createElement(u,null)))))}},531:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(0),i=(a(6),a(4)),l=a(8),c=a(510),s=o.forwardRef(function(e,t){var a=e.children,l=e.classes,s=e.className,u=e.disableTypography,d=void 0!==u&&u,m=Object(r.a)(e,["children","classes","className","disableTypography"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s),ref:t},m),d?a:o.createElement(c.a,{component:"h2",variant:"h6"},a))});t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},532:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(0),i=(a(6),a(4)),l=a(8),c=o.forwardRef(function(e,t){var a=e.classes,l=e.className,c=e.dividers,s=void 0!==c&&c,u=Object(r.a)(e,["classes","className","dividers"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(a.root,l,s&&a.dividers),ref:t},u))});t.a=Object(l.a)(function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}},{name:"MuiDialogContent"})(c)},533:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(0),i=(a(6),a(4)),l=a(8),c=o.forwardRef(function(e,t){var a=e.disableSpacing,l=void 0!==a&&a,c=e.classes,s=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(n.a)({className:Object(i.a)(c.root,s,!l&&c.spacing),ref:t},u))});t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(c)},534:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(26),i=a(0),l=(a(6),a(4)),c=a(8),s=a(13),u=a(493),d=a(527),m=a(528),p=a(90),f=a(489),b={enter:p.b.enteringScreen,exit:p.b.leavingScreen},h=i.forwardRef(function(e,t){var a=e.BackdropProps,o=e.children,c=e.classes,p=e.className,h=e.disableBackdropClick,g=void 0!==h&&h,y=e.disableEscapeKeyDown,v=void 0!==y&&y,x=e.fullScreen,O=void 0!==x&&x,j=e.fullWidth,w=void 0!==j&&j,E=e.maxWidth,k=void 0===E?"sm":E,N=e.onBackdropClick,S=e.onClose,C=e.onEnter,z=e.onEntered,T=e.onEntering,P=e.onEscapeKeyDown,A=e.onExit,I=e.onExited,D=e.onExiting,W=e.open,M=e.PaperComponent,B=void 0===M?f.a:M,R=e.PaperProps,H=void 0===R?{}:R,L=e.scroll,V=void 0===L?"paper":L,$=e.TransitionComponent,F=void 0===$?m.a:$,J=e.transitionDuration,G=void 0===J?b:J,K=e.TransitionProps,_=e["aria-describedby"],Y=e["aria-labelledby"],U=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),X=i.useRef();return i.createElement(u.a,Object(n.a)({className:Object(l.a)(c.root,p),BackdropComponent:d.a,BackdropProps:Object(n.a)({transitionDuration:G},a),closeAfterTransition:!0,disableBackdropClick:g,disableEscapeKeyDown:v,onEscapeKeyDown:P,onClose:S,open:W,ref:t},U),i.createElement(F,Object(n.a)({appear:!0,"in":W,timeout:G,onEnter:C,onEntering:T,onEntered:z,onExit:A,onExiting:D,onExited:I,role:"none presentation"},K),i.createElement("div",{className:Object(l.a)(c.container,c["scroll".concat(Object(s.a)(V))]),onClick:function(e){e.target===e.currentTarget&&e.target===X.current&&(X.current=null,N&&N(e),!g&&S&&S(e,"backdropClick"))},onMouseDown:function(e){X.current=e.target}},i.createElement(B,Object(n.a)({elevation:24,role:"dialog","aria-describedby":_,"aria-labelledby":Y},H,{className:Object(l.a)(c.paper,c["paperScroll".concat(Object(s.a)(V))],c["paperWidth".concat(Object(s.a)(String(k)))],H.className,O&&c.paperFullScreen,w&&c.paperFullWidth)}),o))))});t.a=Object(c.a)(function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}},{name:"MuiDialog"})(h)},535:function(e,t,a){"use strict";var n=a(3),r=a(1),o=a(0),i=(a(6),a(4)),l=a(8),c=a(459),s=a(13),u=o.forwardRef(function(e,t){var a=e.children,l=e.classes,u=e.className,d=e.color,m=void 0===d?"default":d,p=e.component,f=void 0===p?"button":p,b=e.disabled,h=void 0!==b&&b,g=e.disableFocusRipple,y=void 0!==g&&g,v=e.focusVisibleClassName,x=e.size,O=void 0===x?"large":x,j=e.variant,w=void 0===j?"round":j,E=Object(n.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(c.a,Object(r.a)({className:Object(i.a)(l.root,u,"round"!==w&&l.extended,"large"!==O&&l["size".concat(Object(s.a)(O))],h&&l.disabled,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[m]),component:f,disabled:h,focusRipple:!y,focusVisibleClassName:Object(i.a)(l.focusVisible,v),ref:t},E),o.createElement("span",{className:l.label},a))});t.a=Object(l.a)(function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}},{name:"MuiFab"})(u)},538:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(100),i=a(491),l=a(529),c=a(535),s=a(101),u=a(501),d=[{name:"Onoja Oche",location:"Wuye, Abuja",phone:"08034846400"},{name:"Michael Kane",location:"Apo, Abuja",phone:"08033446400"},{name:"Ade Okoli",location:"Garki, Abuja",phone:"08034846400"},{name:"John Garson",location:"Garki, Abuja",phone:"08034846400"},{name:"Ben Adewale",location:"Garki, Abuja",phone:"08034846400"},{name:"Onoja Oche",location:"Wuye, Abuja",phone:"08034846400"},{name:"Michael Kane",location:"Apo, Abuja",phone:"08033446400"},{name:"Ade Okoli",location:"Garki, Abuja",phone:"08034846400"},{name:"John Garson",location:"Garki, Abuja",phone:"08034846400"},{name:"Ben Adewale",location:"Garki, Abuja",phone:"08034846400"}],m=a(8),p=a(530),f=a(492),b=a(534),h=a(531),g=a(532),y=a(533),v=a(166),x=a.n(v),O=a(510),j=a(5),w=a(159),E=a(500),k=a.n(E);function N(e,t,a,n,r,o,i){try{var l=e[o](i),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(n,r)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=undefined;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l["return"]||l["return"]()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var T=Object(m.a)(function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})(function(e){var t=e.children,a=e.classes,n=e.onClose,o=z(e,["children","classes","onClose"]);return r.a.createElement(h.a,C({disableTypography:!0,className:a.root},o),r.a.createElement(O.a,{variant:"h6"},t),n?r.a.createElement(i.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(x.a,null)):null)}),P=Object(m.a)(function(e){return{root:{padding:e.spacing(2)}}})(g.a),A=(Object(m.a)(function(e){return{root:{margin:0,padding:e.spacing(1)}}})(y.a),Object(o.b)(function(e){return{userInfo:e.userInfo,userData:e.userData}})(function(e){var t=e.open,a=e.handleClose,o=(e.locationId,e.locationName,e.userInfo),i=e.userData,c=e.submit,u=e.oofId,d=e.dispatch,m=(i.oof,S(Object(n.useState)(!1),2)),h=m[0],g=m[1],y=S(Object(n.useState)(!1),2),v=y[0],x=y[1],O=S(Object(n.useState)({punishable:!1}),2),E=O[0],C=(O[1],function(){var e,t=(e=regeneratorRuntime.mark(function n(){var e,t,r,i,l;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),e=j.a.baseUrl,t=j.a.getOutOfOffice.path,r="".concat(e).concat(t),i=null===u?"POST":"PUT",n.next=6,Object(j.c)(i,r,E,o.jwt);case 6:(l=n.sent).meta&&200===l.meta.status?(c(),a(),d(Object(w.a)({open:!0,variant:"info",message:"You have successfuly ".concat(null===u?"added":"edited"," out of office reason")}))):l.meta&&500===l.meta.status?d(Object(w.a)({open:!0,variant:"error",message:"Something went wrong"})):d(Object(w.a)({open:!0,variant:"error",message:"Unable to connect"})),g(!1);case 9:case"end":return n.stop()}},n)}),function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function i(e){N(o,n,r,i,l,"next",e)}function l(e){N(o,n,r,i,l,"throw",e)}i(undefined)})});return function(){return t.apply(this,arguments)}}());return r.a.createElement(b.a,{onClose:a,"aria-labelledby":"customized-dialog-title",open:t,fullWidth:!0,maxWidth:"sm"},r.a.createElement(T,{id:"customized-dialog-title",onClose:a},r.a.createElement(s.SText,{color:"#444444",size:"25px",weight:"700"},"View Vendor")),r.a.createElement(P,{dividers:!0},r.a.createElement(s.Content,{flex:!0,justify:"center",align:"center"},r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Name"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"Onoja Oche")),r.a.createElement(s.Content,{flex:!0,horizontal:!0,justify:"space-between",width:"90%",vmargin:"0.5em"},r.a.createElement(s.Content,null,r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Phone"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"08034846400")),r.a.createElement(s.Content,null,r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Email"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"ocheben@gmail.com"))),r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Location"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"Jabi Lake Mall, Jabi, Abuja")),r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.StyledButton,{width:"auto",onClick:function(){return x(function(e){return!e})},endIcon:r.a.createElement(l.a,null,v?"keyboard_arrow_up":"keyboard_arrow_down")},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"View ID")))),r.a.createElement(p.a,{"in":v},r.a.createElement(s.Content,{flex:!0,align:"center"},r.a.createElement(s.Content,{height:"40vh",width:"auto"},r.a.createElement(s.SImg,{src:k.a})))),r.a.createElement(s.Content,{flex:!0,horizontal:!0,align:"flex-end",vmargin:"2em",justify:"flex-end",height:"20%",mobWidth:"100%",mobHeight:"20%"},r.a.createElement(s.StyledButton,{width:"7em",style:{color:"#ffffff",marginRight:"0.5em"},variant:"contained",onClick:C},h?r.a.createElement(f.a,{style:{color:"#ffffff"},size:24}):r.a.createElement(s.SText,{color:"#ffffff",size:"14px",weight:"700"},"Delete")),r.a.createElement(s.StyledButton,{color:"secondary",width:"7em",style:{color:"#ffffff"},variant:"contained",onClick:C},h?r.a.createElement(f.a,{style:{color:"#ffffff"},size:24}):r.a.createElement(s.SText,{color:"#ffffff",size:"14px",weight:"700"},"Verify")))))}));function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=undefined;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l["return"]||l["return"]()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M=[{columnName:"#",keyName:"sn"},{columnName:"Name",keyName:"name"},{columnName:"Location",keyName:"location"},{columnName:"Phone",keyName:"phone"},{columnName:"Actions",keyName:"actions"}];t["default"]=Object(o.b)(function(e){return{userInfo:e.userInfo,userData:e.userData}})(function(e){e.dispatch,e.userInfo;var t=e.userData,a=(t.loading,t.oof),o=W(Object(n.useState)(!1),2),m=(o[0],o[1],W(Object(n.useState)(!1),2)),p=(m[0],m[1],W(Object(n.useState)(!1),2)),f=p[0],b=p[1],h=W(Object(n.useState)(null),2),g=h[0],y=h[1],v=W(Object(n.useState)(""),2),x=v[0],O=v[1],j=W(Object(n.useState)(new Array(a.length).fill(null)),2),w=(j[0],j[1],W(Object(n.useState)(!1),2)),E=(w[0],w[1]),k=W(Object(n.useState)(""),2),N=(k[0],k[1],d.map(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){D(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{sn:t+1,actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{size:"small",onClick:function(){return b(!0)}},r.a.createElement(l.a,null,"info_outline")))})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Content,{fadeIn:!0,minHeight:"70vh",flex:!0,align:"center",justify:"center"},r.a.createElement(s.Content,{id:"worktime",width:"90%",bg:"#ffffff",borderBox:!0,vmargin:"2em",shadow:!0,borderR:"0.4em"},r.a.createElement(s.Content,{flex:!0,horizontal:!0,padding:"2em",justify:"space-between",borderBox:!0},r.a.createElement(s.SText,{color:"#444444",size:"32px",weight:"700"},"Vendors"),r.a.createElement(c.a,{color:"primary","aria-label":"edit",style:{color:"#ffffff"}},r.a.createElement(l.a,null,"filter_list"))),r.a.createElement(u.a,{height:"70vh",tableData:N,columns:M,loading:!1}))),r.a.createElement(A,{open:f,handleClose:function(){return b(!1),E(!1),O(""),void setTimeout(y(null),2e3)},oofId:g,oofName:x}))})},539:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(100),i=a(491),l=a(529),c=a(535),s=a(101),u=a(501),d=[{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:2},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:0},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:1},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:2},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:2},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:1},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:0},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:1},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:2},{userName:"Onoja Oche",vendorName:"Maxwell Ike",gas:"12 kg",cylinder:"15 kg",price:"N4,000",status:0}],m=a(8),p=a(534),f=a(531),b=a(532),h=a(533),g=a(166),y=a.n(g),v=a(510);a(5),a(159),a(500);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=undefined;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l["return"]||l["return"]()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var w=Object(m.a)(function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})(function(e){var t=e.children,a=e.classes,n=e.onClose,o=j(e,["children","classes","onClose"]);return r.a.createElement(f.a,O({disableTypography:!0,className:a.root},o),r.a.createElement(v.a,{variant:"h6"},t),n?r.a.createElement(i.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(y.a,null)):null)}),E=Object(m.a)(function(e){return{root:{padding:e.spacing(2)}}})(b.a),k=(Object(m.a)(function(e){return{root:{margin:0,padding:e.spacing(1)}}})(h.a),Object(o.b)(function(e){return{userInfo:e.userInfo,userData:e.userData}})(function(e){var t=e.open,a=e.handleClose,o=(e.locationId,e.locationName,e.userInfo,e.userData),i=(e.submit,e.oofId,e.dispatch,o.oof,x(Object(n.useState)(!1),2)),l=(i[0],i[1],x(Object(n.useState)(!1),2)),c=(l[0],l[1],x(Object(n.useState)({punishable:!1}),2));c[0],c[1];return r.a.createElement(p.a,{onClose:a,"aria-labelledby":"customized-dialog-title",open:t,fullWidth:!0,maxWidth:"sm"},r.a.createElement(w,{id:"customized-dialog-title",onClose:a},r.a.createElement(s.SText,{color:"#444444",size:"25px",weight:"700"},"View Order")),r.a.createElement(E,{dividers:!0},r.a.createElement(s.Content,{flex:!0,justify:"center",align:"center"},r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Client Name"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"Onoja Oche")),r.a.createElement(s.Content,{flex:!0,horizontal:!0,justify:"space-between",width:"90%",vmargin:"0.5em"},r.a.createElement(s.Content,null,r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Client Phone"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"08034846400")),r.a.createElement(s.Content,null,r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Client Email"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"ocheben@gmail.com"))),r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Vendor Name"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"Maxwell Ike")),r.a.createElement(s.Content,{flex:!0,horizontal:!0,justify:"space-between",width:"90%",vmargin:"0.5em"},r.a.createElement(s.Content,null,r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Vendor Phone"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"08098327432")),r.a.createElement(s.Content,null,r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Vendor Email"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"maxike@gmail.com"))),r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Pickup Address"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"Jabi Lake Mall, Jabi, Abuja")),r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Delivery Address"),r.a.createElement(s.SText,{color:s.colors.four,size:"20px"},"Jabi Lake Mall, Jabi, Abuja")),r.a.createElement(s.Content,{vmargin:"0.5em",width:"90%"},r.a.createElement(s.SText,{color:s.colors.four,size:"14px",weight:"700"},"Order Status"),r.a.createElement(s.SText,{size:"18px",weight:"600",color:"#1b5e20"},"Delivered")))))}));function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=undefined;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l["return"]||l["return"]()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=[{columnName:"#",keyName:"sn"},{columnName:"User Name",keyName:"userName"},{columnName:"Vendor Name",keyName:"vendorName"},{columnName:"Gas Volume",keyName:"gas"},{columnName:"Cylinder Size",keyName:"cylinder"},{columnName:"Price",keyName:"price"},{columnName:"Status",keyName:"status"},{columnName:"View",keyName:"view"}],T=["#ff1744",s.colors.primary,"#1b5e20"],P=["Queued","In Progress","Delivered"];t["default"]=Object(o.b)(function(e){return{userInfo:e.userInfo,userData:e.userData}})(function(e){e.dispatch,e.userInfo;var t=e.userData,a=(t.loading,t.oof),o=C(Object(n.useState)(!1),2),m=(o[0],o[1],C(Object(n.useState)(!1),2)),p=(m[0],m[1],C(Object(n.useState)(!1),2)),f=p[0],b=p[1],h=C(Object(n.useState)(null),2),g=h[0],y=h[1],v=C(Object(n.useState)(""),2),x=v[0],O=v[1],j=C(Object(n.useState)(new Array(a.length).fill(null)),2),w=(j[0],j[1],C(Object(n.useState)(!1),2)),E=(w[0],w[1]),A=C(Object(n.useState)(""),2),I=(A[0],A[1],d.map(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){S(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{sn:t+1,status:r.a.createElement(s.SText,{size:"18px",weight:"600",color:T[e.status]},P[e.status]),view:r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{size:"small",onClick:function(){return b(!0)}},r.a.createElement(l.a,null,"info_outline")))})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Content,{fadeIn:!0,minHeight:"70vh",flex:!0,align:"center",justify:"center"},r.a.createElement(s.Content,{id:"worktime",width:"90%",bg:"#ffffff",borderBox:!0,vmargin:"2em",shadow:!0,borderR:"0.4em"},r.a.createElement(s.Content,{flex:!0,horizontal:!0,padding:"2em",justify:"space-between",borderBox:!0},r.a.createElement(s.SText,{color:"#444444",size:"32px",weight:"700"},"Orders"),r.a.createElement(c.a,{color:"primary","aria-label":"edit",style:{color:"#ffffff"}},r.a.createElement(l.a,null,"filter_list"))),r.a.createElement(u.a,{height:"70vh",tableData:I,columns:z,loading:!1}))),r.a.createElement(k,{open:f,handleClose:function(){return b(!1),E(!1),O(""),void setTimeout(y(null),2e3)},oofId:g,oofName:x}))})}}]);