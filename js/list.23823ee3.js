(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"6e2b":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"table-responsive"};function n(e,t,c,n,r,l){var s=Object(o["resolveComponent"])("a-table"),d=Object(o["resolveComponent"])("ProjectList"),i=Object(o["resolveComponent"])("a-col"),A=Object(o["resolveComponent"])("a-pagination"),j=Object(o["resolveComponent"])("ProjectPagination"),u=Object(o["resolveComponent"])("a-row");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{gutter:25},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{xs:24},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(s,{pagination:!1,dataSource:e.dataSource,columns:e.columns},null,8,["dataSource","columns"])])]})),_:1})]})),_:1}),Object(o["createVNode"])(i,{xs:24,class:"pb-30"},{default:Object(o["withCtx"])((function(){return[e.projects.length?(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(A,{onChange:e.onHandleChange,showSizeChanger:"",onShowSizeChange:e.onShowSizeChange,pageSize:10,defaultCurrent:1,total:40},null,8,["onChange","onShowSizeChange"])]})),_:1})):Object(o["createCommentVNode"])("",!0)]})),_:1})]})),_:1})}c("d81d"),c("d3b7");var r=c("5502"),l=c("233d");function s(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(o["isVNode"])(e)}var d=[{title:"Project",dataIndex:"project",key:"project"},{title:"Start Date",dataIndex:"startDate",key:"startDate"},{title:"Deadline",dataIndex:"deadline",key:"deadline"},{title:"Assigned To",dataIndex:"assigned",key:"assigned"},{title:"Status",dataIndex:"status",key:"status"},{title:"Completion",dataIndex:"completion",key:"completion"},{title:"",dataIndex:"action",key:"action"}],i={name:"ProjectLists",components:{ProjectPagination:l["ProjectPagination"],ProjectListTitle:l["ProjectListTitle"],ProjectListAssignees:l["ProjectListAssignees"],ProjectList:l["ProjectList"]},setup:function(){var e=Object(r["c"])(),t=e.state,a=Object(o["computed"])((function(){return t.project.data})),n=Object(o["ref"])(0),i=Object(o["ref"])(0),A=function(e,t){n.value=e,i.value=t},j=function(e,t){n.value=e,i.value=t},u=Object(o["computed"])((function(){return a.value.length&&a.value.map((function(e){var t=e.id,a=e.title,n=e.status,r=e.category,d=e.percentage;return{key:t,project:Object(o["createVNode"])(l["ProjectListTitle"],null,{default:function(){return[Object(o["createVNode"])(Object(o["resolveComponent"])("sdHeading"),{as:"h4"},{default:function(){return[Object(o["createVNode"])(Object(o["resolveComponent"])("router-link"),{to:"/app/project/projectDetails/".concat(t)},s(a)?a:{default:function(){return[a]}})]}}),Object(o["createVNode"])("p",null,[r])]}}),startDate:Object(o["createVNode"])("span",{class:"date-started"},[Object(o["createTextVNode"])("26 Dec 2019")]),deadline:Object(o["createVNode"])("span",{class:"date-finished"},[Object(o["createTextVNode"])("18 Mar 2021")]),assigned:Object(o["createVNode"])(l["ProjectListAssignees"],null,{default:function(){return[Object(o["createVNode"])("ul",null,[Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("6a06"),alt:""},null)]),Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("3439"),alt:""},null)]),Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("26aa"),alt:""},null)]),Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("c6f3"),alt:""},null)]),Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("3b9a"),alt:""},null)]),Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("9634"),alt:""},null)]),Object(o["createVNode"])("li",null,[Object(o["createVNode"])("img",{src:c("6f12a"),alt:""},null)])])]}}),status:Object(o["createVNode"])(Object(o["resolveComponent"])("a-tag"),{class:n},s(n)?n:{default:function(){return[n]}}),completion:Object(o["createVNode"])("div",{class:"project-list-progress"},[Object(o["createVNode"])(Object(o["resolveComponent"])("a-progress"),{percent:"complete"===n?100:d,strokeWidth:5,class:"progress-primary"},null),Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])("12/15 Task Completed")])]),action:Object(o["createVNode"])(Object(o["resolveComponent"])("sdDropdown"),{class:"wide-dropdwon",overlay:Object(o["createVNode"])(o["Fragment"],null,[Object(o["createVNode"])("a",{to:"#"},[Object(o["createTextVNode"])("View")]),Object(o["createVNode"])("a",{to:"#"},[Object(o["createTextVNode"])("Edit")]),Object(o["createVNode"])("a",{to:"#"},[Object(o["createTextVNode"])("Delete")])])},{default:function(){return[Object(o["createVNode"])("a",{to:"#"},[Object(o["createVNode"])(Object(o["resolveComponent"])("sdFeatherIcons"),{type:"more-horizontal",size:18},null)])]}})}}))}));return{dataSource:u,onHandleChange:j,onShowSizeChange:A,columns:d,projects:a}}},A=i,j=c("d959"),u=c.n(j);const b=u()(A,[["render",n]]);t["default"]=b},"6f12a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAElklEQVR4Xu2Xy0okQRBFc0TwuVFx4VtEFBFxI7jzr/0Bdy5FVBR8ICqIqBsVBXGGSIgmpqa6C63ulrme2khblVl578kbkfVre3v7d+KSdeAXgGXZZmEA1uYLYHG+AAawugPi+ujBABZ3QFweCQawuAPi8kgwgMUdEJdHggEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFxexxO8tbWVLdzZ2cl/x8bG0vr6eurv78+/7+/v0+7u7j/3Pj4+0tnZWTo5OamFwN93d3eX9vf381xTU1NpZWUlXV5els6/tLSU5ufn08XFReP+2tpampmZyePf39/TwcFBur6+zr/jvaenp4bWWgtv0+COAXbRJjgCNvN6e3vT4eFhA7abb5vh7e0tA7fx4+PjaW9vL2+COpe9c3Z2Nh0dHWUo8T1xXt8MPT09yTbY1dVVA/DGxkY6Pz/Pa4lrszE+9+vra968cTPVWXc7xnYMsC/OzBgZGWm6q83sx8fH9PDwkJaXl9Px8XGGYMbZ2Jubm9optrU4VHvX5ORkTnOzjVP1btswPsfi4mKW6lWoSm87oH1mjm8FHI20RReNd/iDg4PJUjUwMJBLeyyRMY3FpEYjrCzbBrKrKmFVgCNEX6OX/wh/dXU1vby8pNHR0Vy1LOFWkWLqW1WUz4Bs9uy3At7c3Ex9fX053dEYT1YEbFXAe3Ic5+CsfM7NzbVMfBzXyrxWgIv9uwqwbUjv13Ez2lrssg3QqsLVhfwtgL3XPT8/N0pbFeBYBh2ql3Pv9/HAVjTG5p+ens6V4Pb2tnHgKjOwGWB7z8TExF8HrCrA1hLK0m3vtX5tyY4HtrpAi+O7DriZeUVo8Tnb4a0AG7yFhYXcy70Xlh2erDTbIe4rPbhZb/UklvXgVvBtM9r9mPB2w7X5ug7YjLKeWgai2SnaDjJDQ0ONE/VnS3QRTrNTtBtc3IT22/rp6elp49PIn419v3iKLn4i/ogSbXDMsHj5t6Ol2Iy0shUPUjbGD1hWYv2w4mXOS31ZCS37pi37XzHx8QQf1+XPxe/0qCm2CQc8PDych7nOuE7fFLFdtTPJHU9wOxZbLIPtmLMbcxRLdDfe2fUe3A5RAP66iyT4695VjiTBlRbxQF0H/osE1xX5k8cDWJw+gAEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFweCQawuAPi8kgwgMUdEJdHgsUB/wHERxbFRshvpQAAAABJRU5ErkJggg=="},9634:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAElklEQVR4Xu2Xy0okQRBFc0TwuVFx4VtEFBFxI7jzr/0Bdy5FVBR8ICqIqBsVBXGGSIgmpqa6C63ulrme2khblVl578kbkfVre3v7d+KSdeAXgGXZZmEA1uYLYHG+AAawugPi+ujBABZ3QFweCQawuAPi8kgwgMUdEJdHggEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFxexxO8tbWVLdzZ2cl/x8bG0vr6eurv78+/7+/v0+7u7j/3Pj4+0tnZWTo5OamFwN93d3eX9vf381xTU1NpZWUlXV5els6/tLSU5ufn08XFReP+2tpampmZyePf39/TwcFBur6+zr/jvaenp4bWWgtv0+COAXbRJjgCNvN6e3vT4eFhA7abb5vh7e0tA7fx4+PjaW9vL2+COpe9c3Z2Nh0dHWUo8T1xXt8MPT09yTbY1dVVA/DGxkY6Pz/Pa4lrszE+9+vra968cTPVWXc7xnYMsC/OzBgZGWm6q83sx8fH9PDwkJaXl9Px8XGGYMbZ2Jubm9optrU4VHvX5ORkTnOzjVP1btswPsfi4mKW6lWoSm87oH1mjm8FHI20RReNd/iDg4PJUjUwMJBLeyyRMY3FpEYjrCzbBrKrKmFVgCNEX6OX/wh/dXU1vby8pNHR0Vy1LOFWkWLqW1WUz4Bs9uy3At7c3Ex9fX053dEYT1YEbFXAe3Ic5+CsfM7NzbVMfBzXyrxWgIv9uwqwbUjv13Ez2lrssg3QqsLVhfwtgL3XPT8/N0pbFeBYBh2ql3Pv9/HAVjTG5p+ens6V4Pb2tnHgKjOwGWB7z8TExF8HrCrA1hLK0m3vtX5tyY4HtrpAi+O7DriZeUVo8Tnb4a0AG7yFhYXcy70Xlh2erDTbIe4rPbhZb/UklvXgVvBtM9r9mPB2w7X5ug7YjLKeWgai2SnaDjJDQ0ONE/VnS3QRTrNTtBtc3IT22/rp6elp49PIn419v3iKLn4i/ogSbXDMsHj5t6Ol2Iy0shUPUjbGD1hWYv2w4mXOS31ZCS37pi37XzHx8QQf1+XPxe/0qCm2CQc8PDych7nOuE7fFLFdtTPJHU9wOxZbLIPtmLMbcxRLdDfe2fUe3A5RAP66iyT4695VjiTBlRbxQF0H/osE1xX5k8cDWJw+gAEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFweCQawuAPi8kgwgMUdEJdHgsUB/wHERxbFRshvpQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=list.23823ee3.js.map