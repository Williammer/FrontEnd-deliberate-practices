(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{229:function(e,t,n){"use strict";n.r(t);var r=n(588),a=n(61);it("should fetch and return the update repos action",function(e){var t={data:[{name:"react",license:"MIT"},{name:"redux",license:"MIT"},{name:"redux-observable",license:"MIT"}]},n=Object(r.a)({type:"FETCH_REPOS",username:"william"}),u={fetch:function(e){return Promise.resolve(t)}};Object(a.default)(n,null,u).subscribe(function(e){expect(e).toEqual({type:"UPDATE_REPOS",repos:["react","redux","redux-observable"]})},e,e)}),it("should return the fetch repos failure action if has exception",function(e){var t={message:"Not Found!"},n=Object(r.a)({type:"FETCH_REPOS",username:"william"}),u={fetch:function(e){return Promise.reject(t)}};Object(a.default)(n,null,u).subscribe(function(e){expect(e).toEqual({type:"FETCH_REPOS_FAILURE",error:t.message})},e,e)})}}]);
//# sourceMappingURL=9.55c12c2f.chunk.js.map